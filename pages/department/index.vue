<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="DepartmentTableConfig"></NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DepartmentTableConfig from "~~/configs/tables/DepartmentTableConfig";
</script>

<style lang="sass" scoped>
</style>