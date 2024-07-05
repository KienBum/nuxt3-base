<template>
  <div>
    <label v-if="props.hasLabel" class="form-label">
      {{ props.label }}
      <span v-if="props.required" class="text-danger">(*)</span>
    </label>
    <VueMultiselect
      v-model="selected"
      :options="slotOptions"
      label="label"
      openDirection="bottom"
      :multiple="props.options.multiple"
      :taggable="props.options.taggable"
      :placeholder="props.label"
      :searchable="props.options.filter"
      :track-by="props.options.value || 'label'"
      close-on-select
      :show-labels="false"
      :disabled="props.options.disabled"
      :customLabel="customLabel"
      tagPlaceholder="Enter"
      class="base-select"
      @tag="addTag"
      @search-change="onSearch"
    >
      <template #clear>
        <div
          v-if="!!selected && !props.options.noClear"
          class="multiselect__clear"
          @mousedown.prevent.stop="clearAll"
        >
          <NIcon name="ion:ios-close" color="#999"></NIcon>
        </div>
      </template>
      <template #noOptions>
        <div class="fs-6">
          {{
            props.options.taggable
              ? "Nhập và ấn Enter để thêm dữ liệu"
              : "Không có dữ liệu"
          }}
        </div>
      </template>
      <template #noResult>
        <div class="fs-6">Không có dữ liệu tìm kiếm phù hợp</div>
      </template>
    </VueMultiselect>
  </div>
</template>

<script lang="ts" setup>
import VueMultiselect from "vue-multiselect";
useHead({
  link: [
    {
      href: "/css/vue-multiselect.css",
      rel: "stylesheet",
    },
  ],
});

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  hasLabel: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Object,
    default: () => ({}),
  },
  required: {
    type: Boolean,
    default: false,
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:modelValue"]);

const CHARACTER_JOIN = ",";

let selected: any = computed({
  get: () => {
    const value: any = props.modelValue;
    if (props.returnObject || !value) {
      return props.modelValue;
    } else {
      if (props.options.multiple && !props.options.taggable) {
        return getValue();
      } else if (props.options.multiple && props.options.taggable) {
        return (props.modelValue as string)
          .split(CHARACTER_JOIN)
          .map((element: any) => {
            return { label: element };
          });
      } else {
        return slotOptions.value.find(
          (element: any) => element[props.options.value] == props.modelValue
        );
      }
    }
  },
  set: (value) => {
    if (props.returnObject) {
      emits("update:modelValue", value || "");
    } else {
      if (props.options.multiple && !props.options.taggable) {
        emits("update:modelValue", setValue(value, props.options.value));
      } else if (props.options.multiple && props.options.taggable) {
        emits("update:modelValue", setValue(value));
      } else {
        const output: any = value;
        emits("update:modelValue", output[props.options.value] || "");
      }
    }
  },
});

const setValue = (entity: any, field: string = "label") => {
  const array: any = entity || [];
  const output: any = [];
  array.forEach((element: any) => {
    output.push(element[field]);
  });
  return output.join(CHARACTER_JOIN);
};

const getValue = () => {
  let output = (props.modelValue as string).split(CHARACTER_JOIN);
  for (let i = 0; i < output.length; i++) {
    output[i] = slotOptions.value.find(
      (element: any) => element[props.options.value] == output[i]
    );
  }
  return output;
};

const slotOptions = ref<any>([]);
const params = ref<any>({});

const customLabel = (item: any) => {
  let output = item["label"];
  if (props.options.label) {
    let listLabel = [];
    if (typeof props.options.label === "string") {
      listLabel = [props.options.label];
    } else listLabel = props.options.label;

    let arr;
    arr = listLabel.reduce((acc: any[], entity: any) => {
      acc.push(item[entity]);
      return acc;
    }, []);
    output = arr.join(" - ");
  }
  return output;
};

const validateTag = (value: string) => {
  let output = false;
  const CHARACTER = [","];

  for (let i = 0; i < CHARACTER.length; i++) {
    const element = CHARACTER[i];
    if (value.includes(element)) {
      // useNotify("warning", "Bản ghi chứa ký tự không hợp lệ !").show();
      output = true;
      break;
    }
  }

  if ((props.modelValue as string).includes(value)) {
    // useNotify("warning", "Bản ghi trùng !").show();
    output = true;
  }

  return output;
};

const addTag = (tag: any) => {
  if (validateTag(tag)) return;
  let output: any = props.modelValue || [];
  if (output.length) {
    output = [props.modelValue];
  }
  output.push(tag);
  emits("update:modelValue", output.join(CHARACTER_JOIN));
};

const clearAll = () => {
  emits("update:modelValue", "");
};

const onSearch = (searchQuery: any) => {
  if (props.options.apiSearch) {
    params.value[props.options.searchKey] = searchQuery;
    loadData();
  }
};

if (props.options.search) {
  let filter = props.options.search as string[];
  if (typeof filter === "string") filter = [filter];

  filter.forEach((element: string) => {
    watch(
      () => props.data[element],
      (newVal, oldVal) => {
        clearAll();
        params.value[element] = newVal;
      },
      { deep: true }
    );
  });
}

const loadData = async () => {
  const { data, error, pending } = await useAPI({
    path: props.options.api,
  })._get(params.value);

  slotOptions.value = (data.value as any)?.data;
};

const onInit = () => {
  if (props.options.notLoad) {
    slotOptions.value = props.options.data || [];
    return;
  }

  if (props.options.search) {
    let filter = props.options.search as string[];
    if (typeof filter === "string") filter = [filter];

    filter.forEach((element: string) => {
      params.value[element] = props.data[element] || "";
    });
  }
  params.value = { ...params.value, ...props.options.params };
  loadData();
};

onMounted(onInit);
</script>

<style lang="sass">
.base-select
  $primary: #00a3ff

  .multiselect__tags
    min-height: 43.56px !important
  .multiselect__input::placeholder
    color: #ccc
  .multiselect__single
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-size: 1.1rem
    margin: 2px 0 0 0
    padding-right: 0.6rem
  .multiselect__option
    font-size: 1.1rem !important
  .multiselect__option--selected
    color: $primary
  .multiselect__option--highlight
    font-weight: bold
    color: black
    background-color: white
  .multiselect__tag
    color: black
    background-color: #00a3ff1f
  .multiselect__tag-icon::after
    color: #6c757d
  .multiselect__tag-icon:hover::after
    color: #f1416c
  .multiselect__clear
    position: absolute
    right: 26px
    top: 9px
    z-index: 1
    cursor: pointer
  input
    font-size: 1.1rem !important
</style>
