<template>
  <span :class="`badge badge-light-${props.color} fw-bold`">
    {{ props.label }}
  </span>
</template>

<script lang="ts" setup>
type T =
  | "primary"
  | "warning"
  | "danger"
  | "success"
  | "secondary"
  | "light"
  | "info"
  | "dark";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<T>,
    default: "primary",
  },
});
</script>
