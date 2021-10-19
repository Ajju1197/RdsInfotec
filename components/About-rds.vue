<template >
  <div class="about-rds">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="team-image">
            <nuxt-img
              :src="team_img"
              alt="About_img"
              format="webp"
              quality="80"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="section-heading">
            <h2>About RDS Infotech Engineering</h2>
          </div>
          <div class="section-content">
            <p>
              RDS Infotech Engineering is located in the Southern Part of India,
              in the city of Hyderabad, Andhra Pradesh. Backed by more than 200
              years of combined experience, we provide detailed fabrication..
            </p>
          </div>
          <div class="buttons">
            <nuxt-link class="read-more-btn" to="/about">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team_img: '/bg-images/bg-images_folder/changing-img.jpg',
    }
  },
}
</script>
<style lang="scss">
.about-rds {
  margin-top: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgb(10, 60, 93);
  .team-image {
    background-color: transparent;
    border: 2px solid rgb(195 195 206 / 98%);
    padding: 0.25rem;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
    img {
      vertical-align: middle;
      border-style: none;
    }
  }
  .section-heading {
    h2 {
      color: rgb(255, 204, 0) !important;
      font-size: 2em;
      font-weight: 400;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
  .section-content {
    p {
      margin-top: 30px;
      color: whitesmoke;
      font-size: 19px !important;
      line-height: 40px;
      text-align: justify;
      font-weight: 300 !important;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    .read-more-btn {
      padding: 16px 32px;
      color: #fff;
      background: #007bff;
      font-size: 1em;
      transition: all 0.5s ease-out;
      &:hover {
        background: #ffc107;
        transition: all 0.5s ease-out;
      }
    }
  }
}
</style>