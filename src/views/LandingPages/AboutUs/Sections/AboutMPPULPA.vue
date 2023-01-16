<script setup>
// example components
import pulpaImg from "@/assets/img/pulpa.jpg";
import rojoPicanteImg from "@/assets/img/AjiRojoPicante.jpg";
import AmarilloImg from "@/assets/img/AjiAmarillo/AjiAmarillo.jpg";
import RojoMash from "@/assets/img/RojoMash.png";
import dulceRojo from "@/assets/img/dulceRojo.png";

import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCards.vue'
import MainInfoCard from '@/views/LandingPages/AboutUs/Sections/components/mainInfoCard.vue'


</script>
<template>
  <!-- <section class="pb-5 position-relative bg-gradient-dark mx-n3"> -->
  <section class="pb-5 position-relative mx-n3">
    <div class="row">

      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ms-auto mt-lg-0 mt-2">
        
        <h6 class="mb-4"> Algunos de nuestros ejemplares: </h6>

        <div class="row justify-content-center">

          <InfoCards
            :srcimg = "RojoMash"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Ají Cayenne Rojo Despulpado "
          />

          <InfoCards
            :srcimg = "dulceRojo"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Ají Amarillo Peruano Despulpado"
          />

          <InfoCards
            :srcimg = "AmarilloImg"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Ají Habanero Rojo Despulpado"
          />

          <InfoCards
            :srcimg = "rojoPicanteImg"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Ají Picante Rojo Despulpado"
          />

          <InfoCards
            :srcimg = "AmarilloImg"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Ají Naga Jolikia Despulpado "
          />

          <InfoCards
            :srcimg = "rojoPicanteImg"
            routerLink = "/nuestrosAjisJRM-QFT"
            label = "Aji Jalapeño Despulpado (Rojo - Verde)"
          />

        </div>

      </div>

      <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ms-auto mt-2">
        <MainInfoCard
          :srcimg="pulpaImg"
          label = "PULPA DE AJI"
          routerLink = "/contacto-QFT"
          desc1 ="Producto obtenido a partir de la molienda y despulpado de ají sin presencia de semillas, mezclado con sal y ácido acético de origen natural."
          desc2 = "Este producto está desarrollado a las necesidades del mercado."
        />
        
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