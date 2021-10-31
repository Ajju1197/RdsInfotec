<template>
  <div class="about-rds1 my-4">
    <div class="container box-content">
      <div class="row align-items-start justify-content-center">
        <div class="col-10 d-flex justify-content-end">
          <h1>Welcome to 'RDS Engineering'</h1>
        </div>
        <div class="col-lg-5 col-12">
          <div class="left-block">
            <nuxt-img
              src="/about2.png"
              alt="slider-image"
              format="webp"
              quality="80"
            />
          </div>
        </div>
        <div class="col-lg-5 col-12">
          <div class="right-block">
            <div class="block-content">
              <p>
                Rds InfoTech Engineering is located in the Southern Part of
                India, in the city of Hyderabad, Telangana. Backed by more than
                200 years of combined experience, we provide detailed
                fabrication drawings for steel fabrication companies throughout
                the United States, Canada and other parts of the world. Our
                company was founded on the premise of providing our customers
                with options to fulfill their detailing needs. We strive for
                complete customer satisfaction in all aspects of our business.
                ...
              </p>
              <a href="#" class="btn2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.box-content {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) !important;
  margin-top: 5px;
  padding: 6em 0;
}
.col-10 {
  padding-right: 7em !important;
}
.block-content h1 {
  color: #007bff;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  font-family: 'Peddana', serif;
}
.block-content p {
  color: #6c757d !important;
  text-align: justify;
  font-size: 21px;
  line-height: 1.5;
  font-family: 'Peddana', serif;
  margin-bottom: 1em;
}
.block-content .btn2 {
  font-size: 21px;
  background-color: #007bff;
  border: none;
  color: #ffffff;
  padding: 16px 32px;
  text-align: center;
  margin: 4px 2px;
  transition: 0.3s;
}
.block-content .btn2:hover {
  transition: 0.5s all ease-in-out;
  background: #fda50f;
}
</style>
