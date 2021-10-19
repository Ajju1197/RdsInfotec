<template>
  <div>
    <CoolLightBox :items="images" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <img :src="image" alt="bg-image" />
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        'https://static.toiimg.com/photo/72975551.cms',
      ],
      index: null,
    }
  },
}
</script>

<style>
.image-wrapper {
  display: flex;
}
.image {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>