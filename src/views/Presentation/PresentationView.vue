<script setup>
  import { onMounted, onUnmounted } from "vue";

  //example components
  import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "../../examples/footers/FooterDefault.vue";
  import Header from "../../examples/Header.vue";
  // sections
  import PresentationCounter from "./Sections/PresentationCounter.vue";
  import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
  import InformacionRelevante from './Sections/informacionRelevanteyRegistros.vue'

  //images
  import vueMkAjiHeader from "@/assets/img/aji.png";
  import logonb from "@/assets/img/LogosQFT/iconnbw.png"
  
  //hooks
  const body = document.getElementsByTagName("body")[0];

  var ancho = window.innerWidth;
  var hancho = calcularHight(ancho);

  function calcularHight(ancho) {
    
    var au;

    console.log(ancho)
    if(  0 <= ancho  && ancho <= 350 ) {
      console.log('entramos aqui en 0 a 350')
      au = 50
    }
    
    else if ( 351 <= ancho  && ancho <= 540  ){ 
      console.log('entramos aqui en menos de 540')
      au = 85
    }
    
    else {
      au = 85
    }

    return au;
  }

  console.log(hancho)
  onMounted(() => {
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
  });
  onUnmounted(() => {
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
  });


</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <!-- HEADEEEER -->
  <Header>
    <div
      :class="`page-header min-vh-${hancho ?? '85'}`"
      :style="`background-image: url(${vueMkAjiHeader})`"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center mx-auto position-relative">

            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                <center>
                  <img :src="logonb" alt="QFT" class='brandQFT'>  
                </center>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2 mt-4">
                <h1
                  class="text-white pt-3 mt-n5 me-2"
                  :style="{ display: 'inline-block ', fontWeight: '700'}"
                >
                  Quality Tropical Foods S.A.S
                </h1>
              </div>
            </div>
            
            <p class="lead text-white px-5 mt-2" :style="{ fontWeight: '300' }">
              Un producto 100% Colombiano, somos expertos en ají.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    

    <PresentationCounter />
    <InformacionRelevante />
    <!-- <PresentationTestimonials /> -->

  </div>
  <DefaultFooter />
</template>

<style>
  @media only screen and (max-width: 480px) {
    .brandQFT {
      min-height: 25px;
      min-width: 25px;
      max-width: 80px;
      max-height: 80px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media only screen and (min-width: 481px) {
    .brandQFT {
      color: white;
      min-height: 80px;
      min-width: 80px;
      width: 150px;
      height: 150px;
    }
  }
</style>