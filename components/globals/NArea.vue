<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  hasLabel: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: Boolean,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <div :class="layout">
    <label v-if="props.hasLabel" class="form-label">
      {{ props.label }}
      <span v-if="props.required" class="text-danger">(*)</span>
    </label>
    <textarea
      :value="props.modelValue"
      :disabled="props.disabled"
      class="form-control"
      :placeholder="
        props.placeholder ? '' : `Nhập ${props.label.toLocaleLowerCase()}`
      "
      @input="onInput($event)"
    ></textarea>
  </div>
</template>
