<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div class="top-links container">
            <ul class="d-flex">
              <li>
                <nuxt-link to="/"
                  >kphp,Hyderabad. <span class="ml-3">|</span></nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/"
                  >hr@rdsinfotech.com <span class="ml-3">|</span></nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/">+91 40-29563887</nuxt-link>
              </li>
            </ul>
          </div>
        </div></el-col
      >
    </el-row>
    <header class="navbar" v-bind:class="{ scroll: scrollPosition > 200 }">
      <div class="container">
        <div class="logo">
          <img src="/favicon.png" alt="" />
        </div>
        <div class="nav-items">
          <ul class="d-flex">
            <li>
              <nuxt-link to="/">
                <fa
                  :icon="['fa', 'home']"
                  style="font-size: 20px"
                  :style="{ color: '#444', background: '#fff' }"
                />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">ABOUT</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/whyrds">WHY RDS</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">SERVICES</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">PROJECTS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">CAREERS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">CONTACT</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="main-content columns">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside> -->

      <div class="column">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>
<style>
.navbar {
  padding: 0 1em;
}
.navbar-brand {
  padding: 0;
}
.navbar-dark .navbar-text {
  color: #000000;
  font-weight: 600;
  font-size: 1em;
}
.grid-content {
  background: #000;
  min-height: 40px;
}
ul {
  margin-bottom: 0 !important;
  align-items: center;
}
ul li {
  margin-right: 1.7em;
}
li a {
  color: #000000;
  font-weight: 600;
}
a:hover {
  text-decoration: none;
}
.top-links {
  display: flex;
  align-items: center;
  min-height: 40px;
}
.top-links li a {
  color: #fff;
  font-weight: 400;
}

.scroll {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 10px 3px rgba(34, 33, 33, 0.1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  animation: affix_animation 0.6s ease-in-out;
  -webkit-animation: affix_animation 0.6s ease-in-out;
  z-index: 99;
}
@-webkit-keyframes affix_animation {
  0% {
    margin-top: -7.5rem;
    opacity: 0;
  }
  50% {
    margin-top: -4rem;
    opacity: 0;
  }
  100% {
    margin-top: 0rem;
    opacity: 1;
  }
}
@keyframes affix_animation {
  0% {
    margin-top: -7.5rem;
    opacity: 0;
  }
  50% {
    margin-top: -4rem;
    opacity: 0;
  }
  100% {
    margin-top: 0rem;
    opacity: 1;
  }
}
</style>
