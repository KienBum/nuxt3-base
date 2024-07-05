<script setup lang="ts">
const listMenu = useMenu()
</script>
<template>
  <div id="kt_aside" class="aside aside-default aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle" style="">

    <div class="aside-logo flex-column-auto px-10 pt-9 pb-5" id="kt_aside_logo">
      <NuxtLink :to="localePath('/')">
        <img alt="Logo" src="@/assets/images/logo.png" width="50" height="50"
          class="max-h-50px logo-default theme-light-show">
        <!-- <img alt="Logo" src="/craft/assets/media/logos/logo-default-dark.svg"
          class="max-h-50px logo-default theme-dark-show">
        <img alt="Logo" src="/craft/assets/media/logos/logo-minimize.svg" class="max-h-50px logo-minimize"> -->
      </NuxtLink>
      <NuxtLink :to="localePath('/')">
        ADMIN
      </NuxtLink>
    </div>

    <div class="aside-menu flex-column-fluid px-4 px-lg-7">
      <div
        class="menu menu-sub-indention menu-column menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-active-bg menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 my-5 mt-lg-2 mb-lg-0"
        id="kt_aside_menu" data-kt-menu="true">
        <div class="hover-scroll-y me-lg-n5 pe-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="20px"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" style="height: 798px;">
          <template v-for="item, ind in listMenu" :key="ind">
            <MenuItem v-bind="item" />
          </template>
        </div>
      </div>
    </div>
    <div class="aside-footer flex-column-auto pb-5 d-none" id="kt_aside_footer">
      <a href="/craft/index.html" class="btn btn-light-primary w-100">
        Button
      </a>
    </div>
  </div>
</template>