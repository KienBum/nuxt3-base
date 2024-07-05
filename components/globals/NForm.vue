<script lang="ts" setup>
import { initCommonService } from "~~/services/initCommon.service";

import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";

const props = defineProps({
  configs: {
    type: Object,
    default: () => ({}),
  },
  updateValue: {
    type: Object,
    default: () => ({}),
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: "",
  },
  id: {
    type: [String, Array<string>],
  },
  hasFooter: {
    type: Boolean,
    default: false,
  },
  customSave: {
    type: Function,
  },
});

const service = initCommonService(props.configs.api);

const emits = defineEmits(["vchange", "data"]);

const router = useRouter();
const { t } = useI18n();
const isStuck = ref<boolean>(false);

const rules = ref<any>({});
let data = ref<any>({});

props.configs.columns.forEach(function (item: any, i: number) {
  item.fields.forEach(function (field: any, j: number) {
    if (field.rules) {
      const arr = Object.keys(field.rules);

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        field.rules[element] = helpers.withMessage(
          t(`${element}-message`),
          field.rules[element]
        );
      }

      rules.value[field.key] = field.rules;
      data.value[field.key] = "";
    }

    if (field.defaultValue) {
      data.value[field.key] = field.defaultValue;
    }
  });
});

if (props.id) {
  service.finById(props.id as string).then((response) => {
    const res: any = response.value;
    data.value = res.data;
    emits("data", data.value);
  });
} else {
  data.value = { ...data.value, ...props.updateValue };
}

const v$: any = useVuelidate(rules, data, {
  $lazy: true,
  $autoDirty: true,
});

const changeValue = (item: any, field: any, value: any) => {
  item[field] = value;
  emits("vchange", { field, value });
};

const onErrorMessage = (field: string) => {
  if (v$ && v$.value[field] && v$.value[field]?.$silentErrors.length) {
    return v$.value[field].$silentErrors[0].$message;
  } else return "";
};

const onBack = () => {
  router.back();
};

const onSave = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  data.value = { ...data.value, ...props.params };
  Object.keys(data.value).map(
    (k) =>
      (data.value[k] =
        typeof data.value[k] == "string" ? data.value[k].trim() : data.value[k])
  );

  if (props.customSave) {
    props.customSave(data.value, v$);
    return;
  }

  if (props.id) {
    onUpdate();
    return;
  }

  onAdd();
};

const onUpdate = () => {
  service.update(data.value).then((response) => {
    if ((response.value as any).statusCode == 200) {
      // useNotify("success", "Cập nhật thành công").show();
      onBack();
    }
  });
};

const onAdd = () => {
  service.create(data.value).then((response) => {
    if ((response.value as any).statusCode == 200) {
      // useNotify("success", "Thêm mới thành công").show();
      onBack();
    }
  });
};

watch(
  () => props.updateValue,
  (newVal, oldVal) => {
    Object.keys(newVal).forEach(function (key) {
      data.value[key] = newVal[key];
    });
  },
  { deep: true }
);

watch(
  () => data.value,
  (newVal, oldVal) => {
    emits("data", newVal);
  },
  { deep: true }
);

const handleScroll = () => {
  if (window.scrollY > 90) isStuck.value = true;
  else isStuck.value = false;
};

const init = () => {
  window.addEventListener("scroll", handleScroll);
};

onMounted(init);
</script>

<template>
  <div class="card">
    <form class="form-layout" @submit.prevent>
      <div class="form-head border-b" :class="{ 'stuck-header': isStuck }">
        <div class="mt-auto">
          <slot name="head-title">
            <h3>
              {{
                `${props.id ? "Cập nhật" : "Thêm mới"} ${props.configs.title}`
              }}
            </h3>
          </slot>
        </div>
        <div class="flex-grow-1"></div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <slot v-if="!props.configs.isButtonBottom" name="button">
            <NButton
              color="secondary"
              prepend-icon="mdi:arrow-left-thin"
              @click="onBack"
            >
              Trở về
            </NButton>
            <NButton width="116px" @click="onSave">Lưu</NButton>
          </slot>
        </div>
      </div>
      <div class="form-body">
        <div class="row">
          <div
            v-for="(column, i) in props.configs.columns"
            :key="`column-${i}`"
            :class="`col-${column.layout} py-2`"
          >
            <template
              v-for="(field, ind) in column.fields"
              :key="`field-${ind}`"
            >
              <div
                v-if="
                  !field.type ||
                  field.type == 'text' ||
                  field.type == 'number' ||
                  field.type == 'number-int'
                "
              >
                <NInput
                  v-model="data[field.key]"
                  :type="field.type"
                  :label="field.label"
                  :max-length="field.maxLength"
                  :placeholder="field.placeholder"
                  :disabled="field.disabled"
                  :required="!!field?.rules?.required"
                  @update:modelValue="changeValue(data, field.key, $event)"
                >
                </NInput>
                <div class="v-messages">
                  <div class="help text-danger">
                    {{ onErrorMessage(field.key) }}
                  </div>
                </div>
              </div>

              <div v-else-if="field.type == 'textarea'">
                <NArea
                  v-model="data[field.key]"
                  :label="field.label"
                  :placeholder="field.placeholder"
                  :disabled="field.disabled"
                  :required="!!field?.rules?.required"
                  @update:modelValue="changeValue(data, field.key, $event)"
                >
                </NArea>
                <div class="v-messages">
                  <div class="help text-danger">
                    {{ onErrorMessage(field.key) }}
                  </div>
                </div>
              </div>

              <div v-else-if="field.type == 'select'">
                <NSelect
                  v-model="data[field.key]"
                  :id="`input-select-${i}`"
                  :label="field.label"
                  :options="field.options"
                  :data="data"
                  :required="!!field?.rules?.required"
                  @update:modelValue="changeValue(data, field.key, $event)"
                >
                </NSelect>
                <div class="v-messages">
                  <div class="help text-danger">
                    {{ onErrorMessage(field.key) }}
                  </div>
                </div>
              </div>

              <div
                v-else-if="field.type == 'checkbox' || field.type == 'switch'"
              >
                <NCheck
                  v-model="data[field.key]"
                  :label="field.label"
                  :type="field.type"
                  :true-value="field?.options?.trueValue || true"
                  :false-value="field?.options?.falseValue || false"
                  :disabled="field.disabled"
                  :size="field.size"
                  class="pt-14"
                  @update:modelValue="changeValue(data, field.key, $event)"
                >
                </NCheck>
              </div>

              <div v-else-if="field.type == 'radios'">
                <NRadios
                  v-model="data[field.key]"
                  :options="field.options"
                  class="pt-14"
                  @update:modelValue="changeValue(data, field.key, $event)"
                >
                </NRadios>
              </div>

              <div
                v-else-if="
                  field.type == 'datetime' ||
                  field.type == 'date' ||
                  field.type == 'time'
                "
              >
                <NDateTimePicker
                  v-model="data[field.key]"
                  :type="field.type"
                  :options="field.options"
                  :label="field.label"
                  :no-label="true"
                  :no-header="true"
                  :no-button="true"
                  :no-button-now="true"
                  :no-clear-button="true"
                  :no-value-to-custom-elem="true"
                  :right="true"
                  :required="!!field?.rules?.required"
                ></NDateTimePicker>
                <div class="v-messages">
                  <div class="help text-danger">
                    {{ onErrorMessage(field.key) }}
                  </div>
                </div>
              </div>

              <slot
                :name="field.key"
                :option="field"
                :data="data"
                :validate="v$"
              ></slot>
            </template>
          </div>
        </div>
      </div>
      <div v-if="hasFooter" class="form-footer border-t">
        <slot name="footer"></slot>
        <div class="flex-grow-1"></div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <slot v-if="props.configs.isButtonBottom" name="button">
            <NButton
              color="secondary"
              prepend-icon="mdi:arrow-left-thin"
              @click="onBack"
            >
              Trở về
            </NButton>
            <NButton width="116px" @click="onSave">Lưu</NButton>
          </slot>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="sass">
.form-layout
  .h-100
    height: 100%
  .form-head, .form-footer
    display: flex
    padding: 12px 20px

  .form-body
    padding: 20px 40px 40px

  .border-b
    border-bottom: 1px solid rgb(229, 229, 229)

  .border-t
    border-top: 1px solid rgb(229, 229, 229)

  .v-messages
    margin-top: 0.4rem
    text-align: left
    flex: 1 1 auto
    font-size: 12px
    min-height: 13px
    min-width: 1px
    position: relative
    .help
        font-size: 0.82rem !important
        line-height: 12px
        word-break: break-word
        padding-bottom: 1rem

  .stuck-header
    position: fixed
    top: 0
    right: 0
    left: 0
    z-index: 2
    background-color: white
    h3
      margin-left: 28rem
</style>
