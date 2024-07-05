<script lang="ts" setup>
import ProvinceTableConfig from "~~/configs/tables/ProvinceTableConfig";

definePageMeta({ name: "Tỉnh/Thành phố" });
</script>

<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="ProvinceTableConfig"></NTable>
    </div>
  </div>
</template>
