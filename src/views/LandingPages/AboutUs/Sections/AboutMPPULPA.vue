<script setup>
// example components
// import pulpaImg from "@/assets/img/Pulpa/pulpa.jpg";
import pulpaImg from "@/assets/img/Pulpa/pulpa1.jpg";


import Carrousel from './Carrousel.vue'
import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCards.vue'
import MainInfoCard from '@/views/LandingPages/AboutUs/Sections/components/mainInfoCard.vue'

import { onMounted, ref } from 'vue';

// variables de los props
const listCarrousel = ref([]);
  
onMounted(() => {
  listCarrousel.value = [
    {
      srcimg : "CayeneDespulpado",
      routerLink : "/nuestrosAjisMash-QTF/101",
      label : "Ají Cayenne Rojo Despulpado",
      desc  : 2
    },
    {
      srcimg : "AmarilloDespulpado",
      routerLink : "/nuestrosAjisMash-QTF/102",
      label : "Ají Amarillo Peruano Despulpado",
      desc  : 2

    },
    {
      srcimg : "HabaneroRojoDespulpado",
      routerLink : "/nuestrosAjisMash-QTF/103",
      label : "Ají Habanero Rojo Despulpado",
      desc  : 3

    },
    {
      srcimg : "JolokiaDespulpado",
      routerLink : "/nuestrosAjisMash-QTF/104",
      label : "Ají Naga Jolokia Despulpado ",
      desc  : 3

    },
    {
      srcimg : "JalapeñoDespulpado",
      routerLink : "/nuestrosAjisMash-QTF/105",
      label : "Ají Jalapeño Despulpado (Rojo - Verde)",
      desc  : 1
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
            routerLink = "/contacto-QTF"
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
              routerLink = "/nuestrosAjisJRM-QTF"
              label = "Ají Cayenne Rojo Despulpado "
            />

            <InfoCards
              :srcimg = "dulceRojo"
              routerLink = "/nuestrosAjisJRM-QTF"
              label = "Ají Amarillo Peruano Despulpado"
            />

            <InfoCards
              :srcimg = "AmarilloImg"
              routerLink = "/nuestrosAjisJRM-QTF"
              label = "Ají Habanero Rojo Despulpado"
            />

            <InfoCards
              :srcimg = "rojoPicanteImg"
              routerLink = "/nuestrosAjisJRM-QTF"
              label = "Ají Picante Rojo Despulpado"
            />

            <InfoCards
              :srcimg = "AmarilloImg"
              routerLink = "/nuestrosAjisJRM-QTF"
              label = "Ají Naga Jolikia Despulpado "
            />

            <InfoCards
              :srcimg = "rojoPicanteImg"
              routerLink = "/nuestrosAjisJRM-QTF"
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