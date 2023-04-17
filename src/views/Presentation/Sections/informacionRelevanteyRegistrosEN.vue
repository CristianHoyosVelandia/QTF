<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="mx-n3 pb-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg/1200px-Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg"
              icon="touch_app"
              title="Our Process <br /> Continuous Improvement"
              description="CERTIFICACIÓN HACCP HAZARD ANALYSIS AND CRITICAL CONTROL POINTS and we go for more."
            />

            <RotatingCardBack
              image="https://occidente.co/wp-content/uploads/2017/08/rio-cauca.jpg"
              title="QUALITY TROPICAL FOODS S.A.S. ZOMAC "
              description=" Created in Valle del Cauca with the aim of processing vegetables (mainly chili peppers); grown and harvested by regional farmers."
              :action="[
                {
                  route: '/QTF/contacto-QTF',
                  label: 'Learn More',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            
            <DefaultInfoCard
              title="100% colombians"
              description="Our raw material comes from Colombian farmers with good practices in sustainability, agricultural technology and crop quality.
              We are specialists in chili peppers and our main aim is to guarantee the satisfaction of our customers and a minimum impact on the environment.  "
            />

            <DefaultInfoCard
              title="Technical support."
              description=" We provide support and technical assistance to the Colombian farmer, as well as ongoing training to our employees. We Committed to the region development. "
            />
          </div>
          <div class="row justify-content-start mt-2">
            
             <DefaultInfoCard
              title="Our Mission"
              description="Our purpose is to carry out processes guided by innovation, the development, training of human resources and continuous improvement with criteria of excellence in the raw materials area, energy and environment, to guide and promote the sustainable development of the region in the productive and social sector, and seeking to meet the requirements and expectations the client's."
            />
            <DefaultInfoCard
              title="Our Vision"
              description="By 2027, we going to be the supplier of food products valued by customers and consumers for its quality and technological innovation. We aim to be a leader in the national market and strategically participating in foreign markets."
            />
         </div>
        </div>
      </div>
    </div>
  </section>
</template>
