<template >
  <div class="container my-5">
    <div class="some-of-our-works-section">
      <div class="section-heading">
        <h1>Some Of Our Works</h1>
      </div>
      <div class="row main-card">
        <div
          class="work-projects-block col-md-4"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="image">
            <nuxt-img
              :src="post.image_src"
              alt="flex image"
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              quality="80"
            />
            <div class="overlay"></div>
            <fa class="plus-icon" icon="plus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Some-of-works',
  data() {
    return {
      posts: [
        {
          id: 1,
          image_src: '/bg-images/bg-images_folder/img-7.png',
        },
        {
          id: 2,
          image_src: '/bg-images/bg-images_folder/img-13.png',
        },
        {
          id: 3,
          image_src: '/bg-images/bg-images_folder/truss1.png',
        },
        {
          id: 4,
          image_src: '/bg-images/bg-images_folder/Miscellaneous.png',
        },
        {
          id: 5,
          image_src: '/bg-images/bg-images_folder/partdraw1.png',
        },
        {
          id: 6,
          image_src: '/bg-images/bg-images_folder/img-5.jpg',
        },
        {
          id: 7,
          image_src: '/bg-images/bg-images_folder/drawing1.png',
        },
        {
          id: 8,
          image_src: '/bg-images/bg-images_folder/img-8.png',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.section-heading {
  margin-bottom: 2em;
  h1 {
    font-size: 2.5rem !important;
    font-weight: 400;
    color: #444 !important;
  }
}
.main-card {
  row-gap: 2em;
  .work-projects-block {
    overflow: hidden;
    position: relative;
    .image {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
      }
      .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transition: all 0.5s ease-in-out;
      }
      &:hover .overlay {
        transition: all 0.5s ease-in-out;
        background: rgba(0, 0, 0, 0.7);
      }
      .plus-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        font-size: 40px;
        background: #fff;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        opacity: 0;
        transition: all 0.5s ease-in;
      }
      &:hover .plus-icon {
        transition: all 0.5s ease-in;
        opacity: 1;
      }
    }
  }
}
</style>