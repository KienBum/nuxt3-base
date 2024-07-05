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
    <!-- <a-row :gutter="16">
      <a-col class="" :span="24">
        <div>
          <Header />
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
      </a-col>
    </a-row> -->
    <Header />
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
