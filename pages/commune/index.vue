<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="ProvinceTableConfig"></NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProvinceTableConfig from "~~/configs/tables/ProvinceTableConfig";
</script>

<style lang="sass" scoped>
</style>