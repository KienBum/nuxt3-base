<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="CountryFormConfig"></NForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountryFormConfig from '~~/configs/forms/CountryFormConfig';
</script>
