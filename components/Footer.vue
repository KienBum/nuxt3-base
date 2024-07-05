<template>
  <div class="footer">
    <div class="upper text">
      <div class="shipping-info">
        <span>{{ `You are shipping to: ` }}</span>
        <a-dropdown class="pick-location" placement="bottomRight">
          <a-button>{{ `Viet Nam` }}</a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a rel="" href="#">
                  Viet Nam
                </a>
              </a-menu-item>
              <a-menu-item>
                <a rel="" href="#">
                  USA
                </a>
              </a-menu-item>
              <a-menu-item>
                <a rel="" href="#">
                  China
                </a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <div class="action">
        <a href="#" class="btn-action">priva policy</a>
        <a href="#" class="btn-action">site map</a>
        <a href="#" class="btn-action">store location</a>
        <a href="#" class="btn-action">feedback</a>
      </div>
    </div>
    <div class="lower text">
      <p>
        {{ `Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843. Copyright ©2023 Luxottica Group S.p.A. - All Rights Reserved Other sites of the Group` }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const addresslink = ref<string>("https://tinhte.vn/");
</script>
<style lang="scss" scoped>
.footer {
  padding: 24px 64px;
  background-color: #1f1f24;
  .text {
    color: #efefef;
    line-height: 19px;
    font-size: 12px;
    font-weight: 500;
  }
  .upper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .shipping-info {
      display: flex;
      gap: 1rem;
      align-items: center;
      .pick-location {
        min-width: 160px;
      }
    }
    .action {
      display: flex;
      gap: 1rem;
      .btn-action {
        
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        text-transform: uppercase;
        cursor: pointer;
      }
      .btn-action:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>