<script setup>
import { isClose, toggleMenuBar, init } from "~~/composables/useMenu";
import Cookies from "js-cookie";
import { SearchOutlined, UserOutlined, CustomerServiceOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
import gymMenu from "../../configs/product/gym";
import poolMenu from "../../configs/product/pool";
import spaMenu from "../../configs/product/spa";
import yogaMenu from "../../configs/product/yoga";
init();

const { locale, locales } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

</script>
<template>
  <div class="navbar">
<!--    logo for-->
    <div class="logo" @click="$router.push('/academy')">
      VFL ACADEMY
    </div>

    <div class="menu justify-center">
      <div class="dropdown">
        <button class="dropbtn title-decorate">{{ $t("menu.gym") }}</button>
        <DropdownContent name="gym club" :items="gymMenu"/>
      </div>
      <div class="dropdown">
        <button class="dropbtn title-decorate">{{ $t("menu.yoga") }}</button>
        <DropdownContent name="yoga club" :items="yogaMenu"/>
      </div>
      <div class="dropdown">
        <button class="dropbtn title-decorate">{{ $t("menu.pool") }}</button>
        <DropdownContent name="pool club" :items="poolMenu"/>
      </div>
      <div class="dropdown">
        <button class="dropbtn title-decorate">{{ $t("menu.spa") }}</button>
        <DropdownContent name="spa club" :items="spaMenu"/>
      </div>
      
    </div>
    <div class="helper justify-end">
      <SearchOutlined class="icon" />
      <UserOutlined class="icon" />
      <!-- <CustomerServiceOutlined class="icon" /> -->
      <ShoppingCartOutlined class="icon" />

      <!--begin::Lang-->
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="icon"
      >
        <div
          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          {{ locale.code }}
        </div>
      </NuxtLink>
      <!--end::Lang-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 48px;
  padding: 0px 64px;
  display:  grid;
  grid-template-columns: 200px 300px 200px;
  justify-content: space-between;
  user-select: none;
  &:hover {
    background-color: #fbf7f2;
  }
  .logo {
    width: 100px;
    display: flex;
    align-items: center;
  }
  //.logo img{
  //  height: 64px;
  //  max-width: 100px;
  //  width: auto;
  //  cursor: pointer;
  //}
  .menu {
    display: flex;
    align-items: center;
      .menu-item {
        text-transform: uppercase;
        height: 48px;
        font-size: 16px;
        font-weight: 700;
        padding: 0px 1rem;
      }
  }
  .helper {
    display: flex;
    align-items: center;
    gap: 30px;
    .icon {
      font-size: 22px;
      text-transform: uppercase;
      color: #1f1f24;
      cursor: pointer;
    }
  }
}
.navbar {
  overflow: hidden;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  text-transform: uppercase;
  height: 48px;
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  padding: 0px 1rem;
  margin: 0;
}
</style>
