<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="DistrictFormConfig" :id="route.params.id"></NForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import DistrictFormConfig from "~~/configs/forms/DistrictFormConfig";
const route = useRoute();
</script>
