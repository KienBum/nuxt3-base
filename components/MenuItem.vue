<script setup lang="ts">
import { toggleMenuItem } from '~~/composables/useMenu'
import MenuItemProps from '~~/props/MenuItemProps'
const props = defineProps(MenuItemProps)
</script>

<template>
  <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
    <span v-if="path == null || path == ''" class="menu-link" @click="toggleMenuItem($event, 'menu-item')">
      <span class="menu-icon">
        <span v-if="!isSub" class="svg-icon svg-icon-2">
          <NIcon :name="icon" :svg="svg"></NIcon>
        </span>
        <span class="menu-bullet" v-if="isSub"><span class="bullet bullet-dot"></span></span>
      </span><span class="menu-title">{{ label || name }}</span><span class="menu-arrow" v-if="childs.length > 0"></span>
    </span>

    <NuxtLink :to="localePath(path)" v-if="path != null && path != ''" class="menu-link"><span class="menu-icon"
        @click="toggleMenuItem($event, 'menu-item')">
        <span v-if="!isSub" class="svg-icon svg-icon-2">
          <NIcon :name="icon" :svg="svg"></NIcon>
        </span>
        <span class="menu-bullet" v-if="isSub"><span class="bullet bullet-dot"></span></span>
      </span><span class="menu-title" @click="toggleMenuItem($event, 'menu-item')">{{ label }}</span>
      <span class="menu-arrow" v-if="childs.length > 0"></span>
    </NuxtLink>

    <template v-for="item, ind in childs" :key="ind">
      <MenuSub v-if="childs.length > 0" v-bind="item" />
    </template>
  </div>
</template>

<style lang="sass">
@import '~~/assets/sass/_menu.sass'
</style>
