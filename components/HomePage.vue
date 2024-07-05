
<script lang="ts" setup>
import API_PATH from "~~/enums/API_PATH";
const downloadFile = async () => { 
  console.log('a yo@!')
  const { data, error, pending } = await useAPI({
    path: `${API_PATH.GLASSESCATEGORY}` as API_PATH,
  })._get();

  const response: any = data

  console.log(response)
  // useNotify('danger', 'get data successfully').show()
}
downloadFile()
</script>
<template>
  <div class="main">
    <div class="banner">
      <!-- <img class="model-picture model-picture-rule" src="@/assets/images/model01.jpg" alt="model's picture 01">
      <img class="model-picture model-picture-rule" src="@/assets/images/model03.jpg" alt="model's picture 02">
      <img class="model-picture model-picture-rule" src="@/assets/images/model04.jpg" alt="model's picture 03"> -->
      <img class="banner-picture model-picture-rule" src="https://media.ray-ban.com/cms/resource/image/665128/landscape_ratio720x233/2592/839/928c781d637db011bb80abc823d5731a/1EC323D0BC34043E5A6804A347392E73/rb-genuinesince-hp-hero-d.jpg" alt="model's picture 03">
      <div class="mask">
        <div class="banner-body">
          <span class="banner-title">IT TAKES COURAGE TO BE GENUINE</span>
          <span class="banner-message">Find a frame that’s true to you.</span>
          <div class="banner-direction">
            <a class="direction">{{ $t("find-glasses") }}</a>
            <a class="direction">{{ $t("find-eyeglasses") }}</a>
          </div>
        </div>
        </div>
    </div>
    <div class="cataloge">
      <div class="cataloge-item">
        <img class="cataloge-picture model-picture-rule" src="@/assets/images/model02.jpg" alt="model's picture 03">
        <div class="mask">
          <span>{{ $t("glass-for-study") }}</span>
        </div>
      </div>
      <div class="cataloge-item">
        <img class="cataloge-picture model-picture-rule" src="@/assets/images/model06.jpg" alt="model's picture 03">
        <div class="mask">
          <span>{{ $t("glass-for-party") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6px;
  margin-bottom: 6px;
  .banner {
    position: relative;
    height: auto;
    .banner-picture {
      width: 100%;
      height: auto;
    }
    .model-picture {
      width: 33%;
      height: auto;
      max-height: 430px;
    }
    .model-picture:last-of-type {
      width: 34%;
    }
    
    .mask {
      top: 50%;
      bottom: auto;
      left: auto;
      right: 0;
      transform: translate(0%, -50%);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 704px;
      width: 100%;
      z-index: 1;
      .banner-body {
        max-width: 500px;
        height: auto;
        // border: 1px solid grey;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #fff;
        align-items: center;
        padding: 4rem 0rem;
        .banner-title {
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .banner-message {
          font-size: 16px;
        }
        .banner-direction {
          display: flex;
          gap: 2rem;
          .direction{
            border: 1px solid grey;
            background-color: #fff;
            color: #1f1f24;
            outline: 1px inset #1f1f24;
            padding: 9px 24px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            justify-content: center;
            letter-spacing: 0;
            line-height: 1.6;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .cataloge {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:  6px;
    .cataloge-item {
      position: relative;
      width: 100%;
      height: auto;
      cursor: pointer;
      .cataloge-picture {
        width: 100%;
        height: auto;
      }
      .mask {
        position: absolute;
        bottom: 10%;
        left: 30%;
        transform: translate(0%, -50%);
        
        justify-content: center;
        align-items: center;
        z-index: 2;

        font-size: 30px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }

  .model-picture-rule {
    object-fit: cover;
    border-radius: 4px;
  }
}

</style>