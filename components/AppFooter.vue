<template>
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <div class="container-fluid d-flex flex-column flex-md-row flex-stack">
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-semibold me-2">2023©</span>
        <a
          :href="address"
          target="_blank"
          class="text-gray-800 text-hover-primary"
        >
          Admin
        </a>
      </div>

      <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
        <li class="menu-item">
          <a :href="address" target="_blank" class="menu-link px-2"> About </a>
        </li>

        <li class="menu-item">
          <a :href="address" target="_blank" class="menu-link px-2">
            Support
          </a>
        </li>

        <li class="menu-item">
          <a :href="address" target="_blank" class="menu-link px-2">
            Purchase
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const address = ref<string>("https://phucdaian.com.vn/");
</script>
