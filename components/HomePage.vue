<script setup lang="ts">


</script>

<template>
<div class="academy-dashboard">
  <div class="video-container">
    <video autoplay muted loop id="myVideo">
      <source src='@/assets/video/video_demo.mp4' type="video/mp4">
    </video>
<!--    <div class="video-content">-->
<!--      Get ready for the summer of a Life Time.-->
<!--    </div>-->
  </div>
  <!-- <div class="blog-container">
    <div class="blog-box blog1">
      <img style="width: 100%;" src="@/assets/images/academy/db_image4.jpg"/>
      <div class="blog1-content">
        ATHLETIC COUNTRY CLUBS
      </div>
    </div>
    <div class="blog-box blog2">
      <image-content srcImg='@/assets/images/academy/db_image2.jpg' content="test"/>
    </div>
  </div> -->
</div>
</template>

<style scoped lang="scss">
.academy-dashboard {
  .video-container {
    .video-content {
      top: 100px;
      opacity: 999;
      position: absolute;
    }
  }
  .blog-container {
    display: flex;
    justify-content: space-between;
    .blog-box {
      width: 50%;
    }
    .blog1 {
      &-content {
        position: absolute;
        top: 50px;

      }
    }
    .blog2 {
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>