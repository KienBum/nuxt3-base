<script lang="ts" setup>
import ProvinceFormConfig from "~~/configs/forms/ProvinceFormConfig";
</script>

<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="ProvinceFormConfig"></NForm>
    </div>
  </div>
</template>
