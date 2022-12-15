<script setup>
// example components
import CenteredBlogCardMP from "../../../../examples/cards/blogCards/CenteredBlogCardMP.vue";
import mashImg from "@/assets/img/mash.png";
import rojoPicanteImg from "@/assets/img/AjiRojoPicante.jpg";
import AmarilloImg from "@/assets/img/AjiAmarillo.jpg";
import RojoMash from "@/assets/img/RojoMash.png";
import dulceRojo from "@/assets/img/dulceRojo.png";

import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCards.vue'
import mainInfoCard from '@/views/LandingPages/AboutUs/Sections/components/mainInfoCard.vue'


</script>
<template>
  <section class="py-5">

    <div class="container">

      <div class="row align-items-center">

        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ms-auto mt-lg-0 mt-2">
          
          <h6 class="mb-4"> Algunos de nuestros ejemplares: </h6>

          <div class="row justify-content-center">

            <InfoCards
              :srcimg = "RojoMash"
              routerLink = "/nuestrosAjisJRM-QFT"
              label = "Ají Jalapeño Rojo"
            />

            <InfoCards
              :srcimg = "dulceRojo"
              routerLink = "/nuestrosAjisJRM-QFT"
              label = "Ají Dulce Rojo Mash"
            />

            <InfoCards
              :srcimg = "AmarilloImg"
              routerLink = "/nuestrosAjisJRM-QFT"
              label = "Ají Amarillo"
            />

            <InfoCards
              :srcimg = "rojoPicanteImg"
              routerLink = "/nuestrosAjisJRM-QFT"
              label = "Ají Picante Rojo"
            />

          </div>

        </div>

        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ms-auto mt-2">
          <mainInfoCard
            :srcimg="mashImg"
          />
          
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  #justifycontent{
    text-align: justify;
  }

  #imgMash{
    border-radius: 20px;
    height: 180px;
    width: 220px;
  }
</style>