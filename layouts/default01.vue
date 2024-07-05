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
  <div class="d-flex flex-column flex-root">
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- <SideBar></SideBar> -->

    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <AppHeader />

      <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar" id="kt_toolbar">
          <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap">
              <ClientOnly>
                <NBreadcrumbs />
              </ClientOnly>
              <!-- <div class="d-flex align-items-center flex-nowrap text-nowrap py-1">
                  <a href="#" class="btn bg-body btn-color-gray-700 btn-active-primary me-4" data-bs-toggle="modal"
                    data-bs-target="#kt_modal_invite_friends">
                    Invite Friends
                  </a>

                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project"
                    id="kt_toolbar_primary_button">
                    New Project </a>
                </div> -->
            </div>
          </div>
          <slot />
        </div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>
