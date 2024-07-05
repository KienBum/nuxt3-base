<script lang="ts" setup>
import AreaFormConfig from "~~/configs/forms/AreaFormConfig";
</script>

<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="AreaFormConfig"></NForm>
    </div>
  </div>
</template>
