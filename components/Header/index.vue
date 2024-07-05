<script setup>
import { isClose, toggleMenuBar, init } from "~~/composables/useMenu";
import Cookies from "js-cookie";
import { SearchOutlined, UserOutlined, CustomerServiceOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
init();

const { locale, locales } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <div class="">
    <Promote />
    <MenuBar />
  </div>
</template>

<style lang="scss" scoped>
</style>
