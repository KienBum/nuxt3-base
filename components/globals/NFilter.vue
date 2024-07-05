<template>
  <div class="base-advance-search p-5 mb-5">
    <div class="row pt-2 pb-4">
      <div
        v-for="(field, i) in props.options"
        :key="`search-${i}`"
        :class="`col-${field.layout} py-2`"
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
            :has-label="false"
            :placeholder="field.placeholder"
            :disabled="field.disabled"
            @update:modelValue="changeValue(data, field.key, $event)"
          >
          </NInput>
        </div>

        <div v-else-if="field.type == 'select'">
          <NSelect
            v-model="data[field.key]"
            :id="`input-select-${i}`"
            :label="field.label"
            :has-label="false"
            :options="field.options"
            :data="data"
            @update:modelValue="changeValue(data, field.key, $event)"
          >
          </NSelect>
        </div>

        <div v-else-if="field.type == 'checkbox' || field.type == 'switch'">
          <NCheck
            v-model="data[field.key]"
            :label="field.label"
            :type="field.type"
            :true-value="field?.options?.trueValue || true"
            :false-value="field?.options?.falseValue || false"
            :disabled="field.disabled"
            :size="field.size"
            class="pt-6"
            @update:modelValue="changeValue(data, field.key, $event)"
          >
          </NCheck>
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
            :has-label="false"
            :no-label="true"
            :no-header="true"
            :no-button="true"
            :no-button-now="true"
            :no-value-to-custom-elem="true"
            :right="true"
          ></NDateTimePicker>
        </div>
      </div>
    </div>
    <NButton
      prepend-icon="ph:magnifying-glass"
      color-icon="white"
      size="sm"
      @click="onSearch"
    >
      Tìm kiếm
    </NButton>
  </div>
</template>

<script lang="ts" setup>
type T = {
  layout?: string | number;
  type?: string;
  key: string;
  label: string;
  options: any;
  disabled: boolean;
  placeholder?: string;
  size?: string;
};

const props = defineProps({
  options: {
    type: Array as PropType<T[]>,
    default: () => [],
  },
});

const emits = defineEmits(["filter", "vchange"]);

let data = ref<any>({});

let isLoad = ref<boolean>(true);

const onSearch = () => {
  if (isLoad.value) {
    isLoad.value = false;
    emits("filter", data.value);

    setTimeout(() => {
      isLoad.value = true;
    }, 1000);
  }
};

const changeValue = (item: any, field: any, value: any) => {
  item[field] = value;
  emits("vchange", { field, value });
};
</script>

<style lang="sass">
.base-advance-search
  background-color: #f9f9f9
</style>
