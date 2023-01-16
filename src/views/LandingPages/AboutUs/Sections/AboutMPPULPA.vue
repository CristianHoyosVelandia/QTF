<script setup>
// example components
import pulpaImg from "@/assets/img/pulpa.jpg";
import rojoPicanteImg from "@/assets/img/AjiRojoPicante.jpg";
import AmarilloImg from "@/assets/img/AjiAmarillo/AjiAmarillo.jpg";
import RojoMash from "@/assets/img/RojoMash.png";
import dulceRojo from "@/assets/img/dulceRojo.png";

import Carrousel from './Carrousel.vue'
import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCards.vue'
import MainInfoCard from '@/views/LandingPages/AboutUs/Sections/components/mainInfoCard.vue'

import { onMounted, ref } from 'vue';

// variables de los props
const listCarrousel = ref([]);
  
onMounted(() => {
  listCarrousel.value = [
    {
      srcimg : "RojoMash",
      routerLink : "/nuestrosAjisMash-QFT/1",
      label : "Ají Jalapeño Rojo"
    },
    {
      srcimg : "AjijalapenoVerde",
      routerLink : "/nuestrosAjisMash-QFT/2",
      label : "Ají Jalapeño Verde Mash"
    },
    {
      srcimg : "CayeneMash",
      routerLink : "/nuestrosAjisMash-QFT/3",
      label : "Ají Cayene Rojo Mash"
    },
    {
      srcimg : "rojoPicanteImg",
      routerLink : "/nuestrosAjisMash-QFT/4",
      label : "Ají Picante Rojo"
    },
    {
      srcimg : "AmarilloImg",
      routerLink : "/nuestrosAjisMash-QFT/5",
      label : "Ají Amarillo Mash"
    },
    {
      srcimg : "habaneroRojo",
      routerLink : "/nuestrosAjisMash-QFT/6",
      label : "Ají Habanero Rojo Mash"
    },
    {
      srcimg : "NagaJolokiaMash",
      routerLink : "/nuestrosAjisMash-QFT/7",
      label : "Ají Naga Jolokia Mash"
    },
    {
      srcimg : "RojoDulce",
      routerLink : "/nuestrosAjisMash-QFT/8",
      label : "Ají Rojo Dulce Mash"
    },


  ]
})

</script>
<template>
  <!-- <section class="pb-5 position-relative bg-gradient-dark mx-n3"> -->
  <section class="pb-5 position-relative mx-n3">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 mt-2">
          <MainInfoCard
            :srcimg="pulpaImg"
            label = "PULPA DE AJI"
            routerLink = "/contacto-QFT"
            desc1 ="Producto obtenido a partir de la molienda y despulpado de ají sin presencia de semillas, mezclado con sal y ácido acético de origen natural."
            desc2 = "Este producto está desarrollado a las necesidades del mercado."
          />
          
        </div>

        <div class="col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0 ms-auto mt-2"/>


        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ms-auto mt-2">
          
          <h3 class="mb-4 text-white"> Algunos de nuestros ejemplares: </h3>

          <div class="row justify-content-center">

            <Carrousel
              :listCarrousel="listCarrousel"
            />
            <!-- <InfoCards
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
            /> -->

          </div>

        </div>

        
      </div>
    </div>
  </section>
</template>

<style>
  #justifycontent{
    text-align: justify;
  }
</style>