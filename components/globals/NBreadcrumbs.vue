<script lang="ts" setup>
const listMenu = useListMenu()
const router = useRouter()
const route = useRoute()
const { locale } = useI18n();
let scums = ref<any>([])

const getParents = (childItem: any, menu: any = []) => {
  const p = menu.find((item: any) => item.id == childItem.parentId)
  if (p) {
    scums.value.unshift(p)
    getParents(p, menu)
  }
}
const getScums = () => {
  scums.value = []
  let item = listMenu.value.find((item: any) => item.path == route.path.replaceAll('/' + locale.value, ''))
  if (!item) return
  scums.value.unshift(item)
  getParents(item, listMenu.value)

}
watch(listMenu, (newVal, oldVal) => {
  getScums()
})
watch(route, () => {
  getScums()
})

</script>

<template>
  <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
    <h1 class="text-dark fw-bold my-1 fs-2">
      {{ scums.length > 0 ? scums[scums.length - 1].name : '' }}
      <small class="text-muted fs-6 fw-normal ms-1"></small>
    </h1>
    <ul class="breadcrumb fw-semibold fs-base my-1">
      <li v-for="(item, ind) in scums" :key="ind" class="breadcrumb-item"
        :class="{ 'text-muted': ind != scums.length - 1, 'text-dark': ind == scums.length - 1 }">
        <NuxtLink :to="localePath(item.path)" v-if="ind != scums.length - 1" class="text-hover-primary text-muted">
          {{ item.name }}
        </NuxtLink>
        {{ ind == scums.length - 1 ? item.name : '' }}
      </li>
    </ul>
  </div>
</template>
