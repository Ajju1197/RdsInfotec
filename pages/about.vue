<template>
  <div>
    <engineering></engineering>
    <div class="container">
      <h3 class="text-center">We have delivered Engineering Designs for</h3>
      <div class="row mt-4">
        <div class="col-lg-8 mx-auto">
          <ul class="timeline">
            <li class="timeline-element">
              <h5 class="timeline-text">Industrial Plants</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">Health care Facilities</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">
                Schools and Institutional Structures
              </h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">High Rise Condominiums</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">
                High Rise Condominiums and Apartments
              </h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">Correctional Facilities</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">Parking Structures</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">Multiplex Cinemas and theaters</h5>
            </li>
            <li class="timeline-element">
              <h5 class="timeline-text">Hotels and Inns.</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Engineering from '../components/RdsEngineering.vue'
import Footer from '../components/footer.vue'
export default {
  components: {
    Engineering,
    Footer,
  },
}
</script>

<style lang="scss">
.column {
  padding: 0 !important;
}
.rootClassName1 {
  box-shadow: 0;
}
.timeline {
  position: relative;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  margin-left: -1px;
  background-color: #50a1ff;
}
.timeline-element {
  position: relative;
  width: 50%;
  padding: 1rem 0;
  padding-right: 2.5rem;
  text-align: right;
  &:nth-child(even) {
    margin-left: 50%;
    padding-left: 2.5rem;
    padding-right: 0;
    text-align: left;
  }
  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }
}

.timeline-element::before {
  content: '';
  position: absolute;
  right: -8px;
  top: 1.35rem;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #50a1ff;
  background-color: #fff;
}
</style>
