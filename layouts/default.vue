<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const title = computed(() =>
  // t("layouts.title", { title: t(route.meta.title ?? "CSCB ThriftStore") })
  t("layouts.title", { title: "CSCB ThriftStore" })
);
</script>
<template>
  <div>
    <Header class="header-nav-sticky"/>
    <div>
      <div >
        <div >
          <ClientOnly>
          </ClientOnly>
        </div>
      </div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.header-nav-sticky {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fbf7f2;
}
</style>
