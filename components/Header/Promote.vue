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
  <div class="promote-bar">
    <div></div>
    <div></div>
    <a class="message-title title-decorate justify-end">In store & online services</a>
  </div>
</template>

<style lang="scss" scoped>
.promote-bar {
  align-items: center;
  background: #f2f2f2;
  display: grid;
  font-size: 12px;
  color: #1f1f24;
  grid-template-columns: 220px auto 220px;
  height: 48px;
  padding: 0 64px;
  width: 100%;
  .message-title {
    // position: relative;
    font: inherit;
    color: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
  // .message-title::after {
  //   content: '';
  //   display: none;
  //   position: absolute;
  //   bottom: 0;
  //   width: 100%;
  //   border: 1px solid #1f1f24;
  // }
  // .message-title:hover:after {
  //     display: block;
  // }
}
</style>
