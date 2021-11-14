<template>
  <div class="get-in-touch-section">
    <div class="container">
      <div class="section-content">
        <div class="inner-content text-center">
          <h1>Need help with Strucutural Steel Detailing ?</h1>
          <NuxtLink class="get-in-touch-btn" to="/"
            >GET IN TOUCH WITH US</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.get-in-touch-section {
  height: 302px;
  background: url('../static/bg-images/bg-image-steel-construction.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  .container {
    height: 100%;
    .section-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .inner-content {
        background: #ffffffa8;
        width: 100%;
        padding: 2.5em;
        h1 {
          color: #000000 !important;
          font-family: 'Libre Baskerville', serif;
          font-style: italic;
          font-weight: 400;
          line-height: 1.4;
          font-size: 2.1rem !important;
        }
        .get-in-touch-btn {
          background-image: linear-gradient(
            to right,
            #fbc2eb 0%,
            #a6c1ee 51%,
            #fbc2eb 100%
          );
          font-size: 20px;
          padding: 15px;
          color: #000000;
        }
      }
    }
  }
}
</style>
