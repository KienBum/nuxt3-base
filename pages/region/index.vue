<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="RegionTableConfig"></NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import RegionTableConfig from "~~/configs/tables/RegionTableConfig";
</script>

<style lang="sass" scoped>

</style>