<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="CommuneFormConfig" :id="route.params.id"></NForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommuneFormConfig from "~~/configs/forms/CommuneFormConfig";

const route = useRoute();
</script>
