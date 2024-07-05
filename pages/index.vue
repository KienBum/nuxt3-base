<script lang="ts" setup>

const checked = ref<any>("");

setTimeout(() => {
  checked.value = "Dung nhan";
}, 5000);

function onConfirm() {
  alert("success");
}
const clicked = () => {
  useConfirm(onConfirm).show();
};

const text_message = ref(
  ""
);


</script>
<template>
  <div class="main">
    <HomePage />
  </div>
</template>
<style lang="scss" scoped>
</style>