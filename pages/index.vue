<template>
  <div>
    <HeroSlider></HeroSlider>
    <CardSection></CardSection>
    <GetInTouch></GetInTouch>
    <SomeOfOurWorks></SomeOfOurWorks>
    <!-- <Fancy /> -->
    <!-- <LightBox /> -->
    <about-rds />
    <!-- <ImageGallery /> -->
    <Footer />
  </div>
</template>

<script>
import HeroSlider from '../components/Hero-slider.vue'
import CardSection from '../components/Card-section.vue'
import GetInTouch from '../components/Get-in-touch.vue'
import SomeOfOurWorks from '../components/Some-of-our-works.vue'
import AboutRds from '../components/About-rds.vue'
import Footer from '../components/footer.vue'
import ImageGallery from '../components/image_gallery.vue'
import Fancy from '../components/fancy.vue'
import LightBox from '../components/Lightbox.vue'

export default {
  name: 'App',
  components: {
    HeroSlider,
    CardSection,
    GetInTouch,
    SomeOfOurWorks,
    AboutRds,
    Footer,
    ImageGallery,
    Fancy,
    LightBox,
  },
  data() {
    return {
      search: '',
      posts: [
        {
          id: 1,
          state: 'AndhraPradesh',
          title: 'post 1',
          body: 'Vue.js is cool',
        },
        {
          id: 2,
          state: 'Bihar',
          title: 'post 2',
          body: 'React.js is cool',
        },
        {
          id: 3,
          state: 'Goa',
          title: 'post 3',
          body: 'Javascript is cool',
        },
        {
          id: 4,
          state: 'Chhattisgarh',
          title: 'post 1',
          body: 'php is cool',
        },
        {
          id: 5,
          state: 'Himachal Pradesh',
          title: 'post 2',
          body: 'Tensorflow is cool',
        },
        {
          id: 6,
          state: 'Jammu and Kashmir',
          title: 'post 3',
          body: 'nodejs is cool',
        },
        {
          id: 7,
          state: 'Karnataka',
          title: 'post 1',
          body: 'flutter is cool',
        },
        {
          id: 8,
          state: 'Madhya Pradesh',
          title: 'post 2',
          body: 'Infosis is cool',
        },
        {
          id: 9,
          state: 'Nagaland',
          title: 'post 3',
          body: 'Oracle is cool',
        },
        {
          id: 10,
          state: 'Odisha',
          title: 'post 1',
          body: 'Python is cool',
        },
        {
          id: 11,
          state: 'Telangana',
          title: 'post 2',
          body: 'Express.js is cool',
        },
        {
          id: 12,
          state: 'Punjab',
          title: 'post 3',
          body: 'Mongo is cool',
        },
      ],
    }
  },

  computed: {
    filterPosts() {
      return this.posts.filter((post) =>
        post.state.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.search-input input {
  padding: 10px 40px;
  border-color: lime;
  display: flex;
  border-radius: 20px;
}
::placeholder {
  color: rgb(21, 175, 21);
  font-size: 1em;
  font-weight: bold;
}
.card {
  display: flex;
  padding: 50px 30px;
  width: 60%;
  min-height: 300px;
  margin: 0 auto;
}
.btn {
  padding: 5px 20px;
  border-radius: 8px;
  text-decoration: none;
  background: greenyellow;
}
.btn:hover {
  background: gray;
  color: #fff;
  transition: all 0.5s ease-in-out;
}
.state-name {
  font-size: 2em;
  font-weight: bold;
  background: gray;
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
