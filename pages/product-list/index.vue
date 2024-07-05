<script setup>
const { locale, locales } = useI18n();
</script>
<template>
  <div class="main">
    <div class="title">
      <h1 class="title-message">{{ $t("glass-for-study") }}</h1>
    </div>
    <div class="row-action">
      <span>navigation & filters</span>
      <span class="text-center">{{ `168 ${$t("products")}` }}</span>
      <div class="justify-end">
        <label for="lang">{{ $t("sort-by") }}</label>
        <select class="select-box" value="1" name="" id="">
          <option :value="1">{{ $t("by-price-low-to-high") }}</option>
          <option :value="2">{{ $t("by-price-high-to-low") }}</option>
          <option :value="3">{{ $t("by-released-new-to-old") }}</option>
          <option :value="4">{{ $t("by-released-old-to-new") }}</option>
        </select>
      </div>
    </div>
    <div class="result">
      <div class="p-slot" v-for="index of 8" :key="index+'p-item'">
        <div class="p-item" @click="$router.push('/product-detail')">
          <img class="p-picture" :src="`/productslist/p${index}.jpg`" :alt="`p${index}`">
          <label class="p-label" for="">{{ `SP ${index} - CSCB Autumn collection` }}</label>
        </div>
      </div>
    </div>
    <div class="summary">
      <span class="summary-title">you are seeing 66 products of 168</span>
      <button class="load-more-btn">load more products</button>
    </div>
    <div class="message">
      <p>Take a look at the complete selection of CSCB's glasses to find the perfect ones that match your style. Discover iconic models like Wayfarer and Clubmaster and find other frame styles such as semi-rim, full-rim and metal. Order today your next glasses and receive them with free shipping on the official online store https://www.cscb.vn</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  padding-top: 40px;
  .title {
    text-align: center;
    text-transform: uppercase;
    .title-message {
      font-size: 22px;
      font-weight: 700;
      margin: 1rem auto;
    }
  }
  .row-action {
    padding: 16px 64px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    .select-box {
      outline: none;
      border: 0;
      max-width: 199px;
      margin-left: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      option {
        padding: 6px 8px;
        border: 0;
        outline: 0;
        background: #fff;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .result {
    padding: 0px 64px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 10px;
    .p-slot {
      .p-item {
        overflow: hidden;
        cursor: pointer;
        .p-picture {
          width: 100%;
          max-height: 550px;
          height: 100%;
          object-fit: cover;
        }
        .p-label {
          padding: 16px;
          color: #1f1f24;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .p-label:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .summary {
    padding: 0px 64px;
    margin-top: 66px;
    margin-bottom: 88px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-transform: uppercase;
    .summary-title {
      font-size: 12px;
      font-weight: 500;
    }
    .load-more-btn {
      border-radius: 3px;
      background: #1f1f24;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      padding: 8px 88px;
      line-height: 1.6;
      text-transform: uppercase;
      outline: none;
      text-decoration: none;
    }
  }
  .message {
    padding: 16px 64px;
    width: 712px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>