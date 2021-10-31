<template>
  <div>
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
              <div class="social-links d-flex justify-content-between">
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
            <div class="links d-flex flex-row list-unstyled">
              <ul>
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
              </ul>
              <ul>
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
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="title">
              <h2>Subscribe</h2>
            </div>
            <div class="subscribe-content text-left">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
              <form action="#" class="input-text">
                <input
                  type="email"
                  required="required"
                  placeholder="Email address"
                />
                <button
                  type="submit"
                  class="subscribe-btn"
                  style="background: #ff5e14"
                >
                  <fa
                    :icon="['fab', 'telegram']"
                    style="font-size: 48px"
                    :style="{ color: 'white', background: '#ff5e14' }"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <span class="copy-content"
        >©Copyright 2020 by Rds InfoTech | DevelopedBy
      </span>
      <span class="corp-sol">CorpTeam Solutions</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footer {
  background: #151414;
  position: relative;
  font-family: auto;
  .about-us-logo {
    text-align: left !important;
    h1 {
      color: #fff !important;
      display: block;
      font-size: 20px;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      // margin-bottom: 20px;
    }
  }
  .content {
    padding: 0 !important;
    p {
      margin-bottom: 14px;
      font-size: 18px;
      color: #7e7e7e !important;
      line-height: 28px;
      text-align: left;
    }
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
  .title {
    h2 {
      position: relative;
      text-align: left;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
      position: relative;
      &::after {
        position: absolute;
        content: '';
        width: 10%;
        bottom: -15px;
        left: 0;
        height: 2px;
        background: #ff5e14;
      }
    }
  }
  .links {
    ul {
      li {
        text-align: left;
        display: inline-block;
        width: 61%;
        margin-bottom: 12px;
        a {
          color: #7e7e7e !important;
          font-size: 17px;
          text-transform: capitalize;
          &:hover {
            color: #ff5e14 !important;
          }
        }
      }
    }
  }
  .social-links {
    width: 31%;
  }
  .subscribe-content {
    p {
      margin-bottom: 14px;
      font-size: 18px;
      color: #7e7e7e;
      line-height: 28px;
    }
  }
  input {
    width: 100%;
    padding: 14px 28px;
    background: #2e2e2e;
    border: 1px solid #2e2e2e;
    color: #fff;
  }
  ::placeholder {
    color: #7e7e7e;
  }
  input:focus {
    outline: none;
  }
  .subscribe-btn {
    position: absolute;
    right: 0;
  }
}
.copy-right {
  background: #202020 !important;
  padding: 10px 0;
  column-gap: 1em;
  display: flex;
  justify-content: center;
  .copy-content {
    margin: 0;
    font-size: 18px;
    color: #878787;
  }
  .corp-sol {
    color: #ff5e14;
  }
}
</style>
