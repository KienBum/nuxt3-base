<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="DepartmentFormConfig"></NForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import DepartmentFormConfig from "~~/configs/forms/DepartmentFormConfig";
</script>
