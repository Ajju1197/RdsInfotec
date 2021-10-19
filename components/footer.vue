<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="about-us-logo">
            <h1>More About Us</h1>
            <div class="content">
              <p>
                Structural steel detailing is a critical process of structural
                engineering and demands near-99% accuracy..
              </p>
              <span class="follow">Follow Us</span>
            </div>
            <div class="social-links d-flex">
              <span class="icon"
                ><fa
                  :icon="['fab', 'facebook']"
                  style="font-size: 50px"
                  :style="{ color: 'white' }"
              /></span>
              <span class="icon"
                ><fa
                  :icon="['fab', 'twitter']"
                  style="font-size: 50px"
                  :style="{ color: 'white' }"
              /></span>
              <span class="icon"
                ><fa
                  :icon="['fab', 'google-plus-square']"
                  style="font-size: 50px"
                  :style="{ color: 'white' }"
              /></span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="title">
            <h2>Usefull Links</h2>
          </div>
          <div class="links flex-wrap list-unstyled">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Why RDS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Careers</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Steel Detailing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Connection Design</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Estimation</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Contact</nuxt-link>
            </li>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footer {
  background: blue;
  position: relative;
  font-family: auto;
  h1 {
    color: #fff !important;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    // margin-bottom: 20px;
  }
  p {
    margin-bottom: 14px;
    font-size: 18px;
    color: #7e7e7e !important;
    line-height: 28px;
    text-align: left;
  }
  .follow {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
    text-align: initial;
  }
}
</style>