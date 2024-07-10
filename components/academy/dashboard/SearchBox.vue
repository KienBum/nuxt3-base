<template>
<a-space direction="vertical">
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
</a-space>

  
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
import { ref } from 'vue';
const emit = defineEmits(['onSearch']);
const value = ref<string>('');

//define props
const props = defineProps({
    placeholder: {
    type: String,
    default: 'search text'
  },
});


const onSearch = (searchValue: string) => {
  emit('onSearch', value?._value);
};




</script>

<style>

</style>
