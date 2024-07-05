<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
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
  maxLength: {
    type: Number,
  },
  highlineLabel: {
    type: Boolean,
    default: false,
    required: false
  },
});

const emit = defineEmits(["update:modelValue"]);

const typeInput = computed({
  get: () => {
    let output = props.type;
    const num_type = "number";
    if (output.includes(num_type)) {
      output = num_type;
    }
    return output;
  },
  set: (value) => {},
});

const maxLength = computed({
  get: () => {
    let output = 0;

    if (!props.maxLength) {
      output = props.type.includes("number") ? 5 : 5000;
    } else {
      output = props.maxLength;
    }

    return output;
  },
  set: (value) => {},
});

const onInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const onKeyDown = (e: KeyboardEvent) => {
  if (props.type.includes("number") && (e.key === "e" || e.key === "-")) {
    e.preventDefault();
    return false;
  }

  if (props.type === "number-int" && e.key === ".") {
    e.preventDefault();
    return false;
  }

  if (
    e.key !== "Backspace" &&
    !e.ctrlKey &&
    (e.target as HTMLInputElement).value.length > maxLength.value
  ) {
    e.preventDefault();
    return false;
  }
};

const onBlur = (e: Event) => {
  const output = (e.target as HTMLInputElement).value;
  if (output) {
    emit("update:modelValue", output.slice(0, maxLength.value));
  }
};
</script>

<template>
  <div :class="layout">
    <label v-if="props.hasLabel" class="form-label" :class="{ 'bold': highlineLabel }">
      {{ props.label }}
      <span v-if="props.required" class="text-danger">(*)</span>
    </label>
    <input
      :type="typeInput"
      :value="props.modelValue"
      :disabled="props.disabled"
      class="form-control"
      :placeholder="
        props.placeholder ? props.placeholder : `Nhập ${props.label.toLocaleLowerCase()}`
      "
      @keydown="onKeyDown"
      @blur="onBlur"
      @input="onInput($event)"
    />
  </div>
</template>
<style lang="sass" scoped>
.bold
  font-weight: bold
</style>
