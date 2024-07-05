<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="DistrictTableConfig"></NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DistrictTableConfig from "~~/configs/tables/DistrictTableConfig";
</script>
