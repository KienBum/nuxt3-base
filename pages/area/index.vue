<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="AreaTableConfig"></NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AreaTableConfig from "~~/configs/tables/AreaTableConfig";
</script>

<style lang="sass" scoped>
</style>