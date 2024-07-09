<script setup lang="ts">
import { defineProps, computed } from 'vue';
//define props
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
});

//define computed
const srcImg = computed(() => {
  return require(props.src);
});
</script>

<template>
<div class="content-image">
  <div class="content">
    {{content}}
  </div>
  <img :src="srcImg"/>

</div>
</template>

<style scoped lang="scss">
.content-image {
  width: 100%;
}
</style>