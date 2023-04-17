<script setup>
// example components
import CenteredBlogCardMP from "../../../../examples/cards/blogCards/CenteredBlogCardMP.vue";
import mashImg from "@/assets/img/mash.png";

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
      routerLink : "/nuestrosAjis-QTF/1",
      label : "Ají Jalapeño Rojo",
      desc  : 1
    },
    {
      srcimg : "AjijalapenoVerde",
      routerLink : "/nuestrosAjis-QTF/2",
      label : "Ají Jalapeño Verde Mash",
      desc  : 1

    },
    {
      srcimg : "CayeneMash",
      routerLink : "/nuestrosAjis-QTF/3",
      label : "Ají Cayene Rojo Mash",
      desc  : 2

    },
    {
      srcimg : "rojoPicanteImg",
      routerLink : "/nuestrosAjis-QTF/4",
      label : "Ají Picante Rojo",
      desc  : 3

    },
    {
      srcimg : "AmarilloImg",
      routerLink : "/nuestrosAjis-QTF/5",
      label : "Ají Amarillo Peruano Mash",
      desc  : 2

    },    
    {
      srcimg : "habaneroRojo",
      routerLink : "/nuestrosAjis-QTF/6",
      label : "Ají Habanero Rojo Mash",
      desc  : 3

    },
    // {
    //   srcimg : "PicanteRojo",
    //   routerLink : "/nuestrosAjis-QTF/7",
    //   label : "Ají Picante Rojo",
    //   desc  : 2

    // },
    {
      srcimg : "RojoDulce",
      routerLink : "/nuestrosAjis-QTF/8",
      label : "Ají Rojo Dulce Mash",
      desc  : 1
    },
    {
      srcimg : "NagaJolokiaMash",
      routerLink : "/nuestrosAjis-QTF/9",
      label : "Ají Naga Jolokia Mash",
      desc  : 3
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
              :srcimg="mashImg"
              label = "AJÍ MASH"
              routerLink = "/contacto-QTF"
              desc1 ="Producto obtenido a partir de la molienda con presencia de semillas del propio fruto, mezclado con sal y ácido acético. Libre de material, colores y sabores no característicos."
              desc2 = "Este producto está desarrollado a las necesidades del mercado."
            />
          
        </div>

        <div class="col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0 ms-auto mt-2"/>

        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ms-auto mt-2">

            <h3 class="mt-2 mb-6 text-white"> Algunos de nuestros ejemplares: </h3>

            <Carrousel
              :listCarrousel="listCarrousel"
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

</style>