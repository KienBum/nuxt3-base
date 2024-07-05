<script setup>
import { isClose, toggleMenuBar, init } from "~~/composables/useMenu";
import Cookies from "js-cookie";
import { SearchOutlined, UserOutlined, CustomerServiceOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
init();

const { locale, locales } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const onSignout = () => {
  Object.keys(Cookies.get()).forEach(function (cookieName) {
    const neededAttributes = {
      // Here you pass the same attributes that were used when the cookie was created
      // and are required when removing the cookie
    };
    Cookies.remove(cookieName, neededAttributes);
  });
  navigateTo("/login");
  // useNotify("success", "Đăng xuất thành công").show();
};
</script>
<template>
  <div class="header">
    <div class="logo">
      <img src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg" alt="">
    </div>
    <div class="menu">
      <!-- <a-button class="menu-item" type="primary">{{ $t("menu.glasses") }}</a-button>
      <a-button class="menu-item" type="primary">{{ $t("menu.eye-glass") }}</a-button> -->
      <button class="menu-item" >{{ $t("menu.gym") }}</button>
      <button class="menu-item" >{{ $t("menu.yoga") }}</button>
      <button class="menu-item" >{{ $t("menu.pool") }}</button>
      <button class="menu-item" >{{ $t("menu.spa") }}</button>
    </div>
    <div class="helper">
      <SearchOutlined class="icon" />
      <UserOutlined class="icon" />
      <CustomerServiceOutlined class="icon" />
      <!-- <ShoppingCartOutlined class="icon" /> -->

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
// #kt_header_user_menu_toggle:hover {
//   #kt_content_user_menu {
//     position: fixed;
//     z-index: 107;
//     margin: 0;
//     inset: 0px 0px auto auto;
//     transform: translate(-70px, 90px);
//     display: flex;
//     will-change: transform;
//     animation: menu-sub-dropdown-animation-fade-in 0.3s ease 1,
//       menu-sub-dropdown-animation-move-up 0.3s ease 1;
//   }
// }
.header {
  height: 64px;
  padding: 0px 64px;
  display: flex;
  .logo img{
    max-height: 100%;
    width: 80px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 30px;
      .menu-item {
        text-transform: uppercase;
      }
  }
  .helper {
    display: flex;
    align-items: center;
    gap: 30px;
    .icon {
      font-size: 22px;
      color: #1f1f24;
      cursor: pointer;
    }
  }
}
</style>
