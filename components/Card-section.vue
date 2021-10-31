<template>
  <div class="mb-5 card-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="card in cards" :key="card.id">
          <div class="card">
            <div class="images">
              <nuxt-img
                :src="card.image"
                alt="card-image"
                format="webp"
                sizes="sm:100vw md:50vw lg:400px"
                quality="80"
              />
            </div>
            <div class="content">
              <h1>{{ card.title }}</h1>
              <p>{{ card.content }}</p>
              <NuxtLink class="btn" to="/">{{ card.button }}</NuxtLink>
            </div>
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
      currentDate: new Date(),
      cards: [
        {
          id: 1,
          image: '/bg-images/bg-images_folder/structural-detailing.jpg',
          title: 'Structural Steel Detailing',
          content:
            'Structural steel detailing is a critical process of structural engineering and demands near-99% accuracy. Even a tiny error can lead to ..',
          button: 'READ MORE',
        },
        {
          id: 2,
          image: '/bg-images/bg-images_folder/structural-steel-detailing.jpg',
          title: 'Structural Steel Connection  Design',
          content:
            'We offer structural steel connection design services to fabricators, builders. The inhouse team consists of seasoned structural engineers..',
          button: 'READ MORE',
        },
        {
          id: 3,
          image: '/bg-images/bg-images_folder/steel-estimation.jpg',
          title: 'Estimation Connection Design',
          content:
            'RDS is one of the leading providers of well defined & systematic Structural Steel Detailing and Estimation services..',
          button: 'READ MORE',
        },
      ],
    }
  },
}
</script>

<style>
.card-section .card {
  width: 100%;
  padding: 0;
  min-height: 537px;
  border-radius: 10px;
}

.card img {
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
}
.content {
  padding: 20px 20px;
}
h1 {
  font-size: 1.6em !important;
  font-weight: 500;
  color: rgb(0, 140, 255) !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 57.6px;
}
.btn {
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
  padding: 10px 25px;
  color: #fff;
  font-size: 0.9em;
  border-radius: 5px;
  margin: 1em 0;
}
</style>
