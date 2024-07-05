<script lang="ts" setup>
const props = defineProps({
    src: {
        type: String,
        default: "",
    },
    layout: {
        type: Boolean,
        default: "",
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
});
</script>

<template>
    <div :class="layout">
        <img :src="src" :width="width" :height="height" alt="">
    </div>
</template>
