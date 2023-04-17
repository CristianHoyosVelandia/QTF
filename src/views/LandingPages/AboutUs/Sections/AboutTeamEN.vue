<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import estabalidiad1 from "@/assets/img/estabalidiad1.jpg";
import plantulacion from "@/assets/img/plantulacion.jpg";
import recepcion from "@/assets/img/recepcion.jpg";
import seleccion from "@/assets/img/seleclavado1.jpg";
import cosecha from "@/assets/img/cosecha.jpg";
import cultivos from "@/assets/img/cultivos.jpg";
import semilla from "@/assets/img/semilla.jpg";

import molienda from "@/assets/img/TOR_7093.jpg";
import estabilidad from "@/assets/img/TOR_7109.jpg";
import almacenamiento from "@/assets/img/TOR_7073.jpg";




</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Our QTF Process
          </h3>
          <p class="text-white opacity-8 mb-0">
            Find out how we transform the world for you.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="semilla"
            :profile="{ name: 'OBTAINING THE SEED', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Our seeds are obtained naturally, they come from healthy fruits with great germinative power."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="plantulacion"
            :profile="{ name: 'PLANTING', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The seeds are planted in region nurseries, which control and guarantee their correct growth, delivering them ready to be transplanted."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="cultivos"
            :profile="{ name: 'CROPS ', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Our crops is monitored by expert personnel, who are in charge of comprehensive management, water management, fertilization and soil health, as well as phytosanitary control to optimize growth and the ability to combat any type of pest."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="cosecha"
            :profile="{ name: 'HARVEST', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="We are committed to the development of the region, which is why our crops are harvested manually, guaranteeing the integrity of the fruit."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="recepcion"
            :profile="{ name: 'RECEPTION', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The chili peppers arrives directly from the field to the QTF plant in canvas bags, to be later deposited in plastic baskets and subsequently processed."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="seleccion"
            :profile="{ name: 'SELECTION AND WASHING', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The chili peppers is carefully selected and classified according to the color, maturation and state of the fruit. At this stage, all kinds of foreign material from the crop are discarded and the washing carried out by sprinkling with drinking water allows the removal of impurities such as the soil present in the fruit."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="molienda"
            :profile="{ name: 'GRINDING', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="During the grinding process, the chili goes through a mill, which grinds the chili into smaller particles and, according to customer requirements, acetic acid and salt are added."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="estabalidiad1"
            :profile="{ name: 'STABILITY', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The chili mixed with acetic acid and salt is monitored to ensure correct fermentation and compliance with physicochemical parameters. At this stage, we will control that before being hermetically sealed, the final product complies with all the quality and safety conditions."
          />
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="almacenamiento"
            :profile="{ name: 'STORAGE', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Storage is carried out in cool, dry and well-ventilated spaces, protected from any type of pest that may affect the integrity of the product. The temperature should be kept below 35°C and relative humidity below 80%."
          />
        </div>
      </div>
    </div>
  </section>
</template>
