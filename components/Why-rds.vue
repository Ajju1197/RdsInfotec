<template>
  <div>
    <div class="container box-content my-4">
      <div class="row">
        <div class="col-10 m-auto section-heading">
          <h1 class="text-center">Why Rds</h1>
        </div>
        <div class="col-11 mx-auto whyrds-content">
          <p>
            We focus by using intelligent resources such as SDS-2 (BIM) and
            AutoCAD. We strictly follow steel detailing industry standards when
            it comes to detailing. When you do business with us, we are not just
            focused on getting the job done, we are also committed to building a
            strong relationship with you and your company so you will always
            think of us first when it comes to finding a reliable and focused
            steel detailer. This can only be accomplished with our professional
            staff of well-trained individuals, who have a dedicated passion for
            this industry.
          </p>
          <hr />
          <p>
            RDS specializes in producing detailed structural steel fabrication
            shop and erection drawings that follow client's customized standards
            while maintaining the guidelines set by AISC, NISD and OSHA. In RDS
            we constantly check that we follow the following steps to make sure
            that the customer is satisfied.
          </p>
          <ul>
            <li>
              We Maintain consistent communication with an experienced staff to
              produce on-time, on-budget results
            </li>
            <li>
              We supply Production Tracking Reports: ABM's, Shop Bolt Lists,
              Field Bolt Lists, Material Summary, and Gather Sheets for
              convenience in the fabrication and erection process
            </li>
            <li>We provide any Customizable Report to suit your needs</li>
            <li>
              We are capable of providing CNC, KSS, DXF, CIS2, IFC, and VRML
              files for Material Management software systems, shop production
              line equipment or merging our model with the final construction
              model for clash detection
            </li>
            <li>
              For our client's who do not have their own standards, we have
              developed separate detailing standards using the experience and
              expertise of our staff, and are constantly developed and improved
              upon. Upon award of a new contract, we forward a copy of these
              standards to the new client for their review and input.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
  components: {
    Footer,
  },
}
</script>
<style lang="scss">
.section-heading {
  h1 {
    color: #33b5e5 !important;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 1.2;
  }
}
.whyrds-content {
  p {
    font-family: 'Peddana', serif;
    font-size: 18px;
    line-height: 2;
    text-align: justify;
  }
}
</style>
