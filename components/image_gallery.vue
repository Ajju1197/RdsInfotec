<template >
  <div>
    <div class="list" v-for="img in imageList" :key="img.id">
      <img @click="open($event)" :src="img.url" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [
        {
          id: 1,
          width: 900,
          height: 675,
          url: '/bg-images/bg-images_folder/changing-img.jpg',
        },
        {
          id: 2,
          width: 601,
          height: 1024,
          url: '/bg-images/bg-images_folder/industries.jpg',
        },
        {
          id: 3,
          width: 1024,
          height: 700,
          url: '/bg-images/bg-images_folder/house.jpg',
        },
      ],
    }
  },
  methods: {
    open(e) {
      fancyBox(e.target, this.imageList)
    },
  },
}
</script>
<style lang="">
</style>