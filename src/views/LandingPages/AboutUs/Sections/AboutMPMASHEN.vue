<script setup>
// example components
import CenteredBlogCardMP from "../../../../examples/cards/blogCards/CenteredBlogCardMP.vue";
import mashImg from "@/assets/img/mash.png";

import Carrousel from './CarrouselEN.vue'
import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCardsEN.vue'
import MainInfoCard from '@/views/LandingPages/AboutUs/Sections/components/mainInfoCardEN.vue'

import { onMounted, ref } from 'vue';

// variables de los props
const listCarrousel = ref([]);
  
onMounted(() => {
  listCarrousel.value = [
    {
      srcimg : "RojoMash",
      routerLink : "/nuestrosAjisMash-QTF/1",
      label : "Red Chillies (Jalapeño) ",
      desc  : 1
    },
    {
      srcimg : "AjijalapenoVerde",
      routerLink : "/nuestrosAjisMash-QTF/2",
      label : "Green Chillies (Jalapeño) ",
      desc  : 1

    },
    {
      srcimg : "CayeneMash",
      routerLink : "/nuestrosAjisMash-QTF/3",
      label : "Red Chillies (Cayenne)",
      desc  : 2

    },
    {
      srcimg : "rojoPicanteImg",
      routerLink : "/nuestrosAjisMash-QTF/4",
      label : "Red Hot Chili Peppers",
      desc  : 3

    },
    {
      srcimg : "AmarilloImg",
      routerLink : "/nuestrosAjisMash-QTF/5",
      label : "Peruvian Yellow Chili Pepper",
      desc  : 2

    },    
    {
      srcimg : "habaneroRojo",
      routerLink : "/nuestrosAjisMash-QTF/6",
      label : "Habanero peppers",
      desc  : 3

    },
    
    {
      srcimg : "RojoDulce",
      routerLink : "/nuestrosAjisMash-QTF/8",
      label : "Sweet Red Chili",
      desc  : 1
    },
    {
      srcimg : "NagaJolokiaMash",
      routerLink : "/nuestrosAjisMash-QTF/9",
      label : "Chili Naga Jolokia",
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
              label = "CHILI MASH"
              routerLink = "/contacto-QTF"
              desc1 ="Product obtained from grinding with the presence of fruit seeds itself, mixed with salt and acetic acid. Free of uncharacteristic material, colors and flavors."
              desc2 = "This product is developed to market needs."
            />
          
        </div>

        <div class="col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0 ms-auto mt-2"/>

        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ms-auto mt-2">

            <h3 class="mt-2 mb-6 text-white"> Some of our QTF specimens:</h3>

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