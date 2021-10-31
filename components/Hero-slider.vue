<template>
  <div class="block">
    <el-carousel height="80vh">
      <el-carousel-item v-for="item in items" :key="item.id">
        <!-- <img :src="item.image_src" alt="slider-image" /> -->
        <nuxt-img
          :src="item.image_src"
          height="670"
          alt="slider-image"
          format="webp"
          quality="80"
        />
        <h3 class="small">{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'hero-slider',
  data() {
    return {
      items: [
        {
          id: 1,
          image_src: '/bg-images/bg-images_folder/changing-img.jpg',
        },
        {
          id: 2,
          image_src: '/bg-images/bg-images_folder/industries.jpg',
        },
        {
          id: 3,
          image_src: '/bg-images/bg-images_folder/house.jpg',
        },
      ],
    }
  },
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  /* height: 1000px; */
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  /* height: 1000px; */
}
img {
  width: 100%;
  height: 100%;
}
.el-carousel ul li {
  margin-right: 0 !important;
}
.el-carousel .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
