<script setup>
  import { onMounted, onUnmounted } from "vue";

  //example components
  import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "../../examples/footers/FooterDefault.vue";
  import Header from "../../examples/Header.vue";
  // sections
  import PresentationCounter from "./Sections/PresentationCounter.vue";
  import InformacionRelevante from './Sections/informacionRelevanteyRegistros.vue'

  //images
  // import vueMkAjiHeader from "@/assets/img/aji.png";
  // import vueMkAjiHeader from "@/assets/img/backgrounds/bgt1.png";
  import vueMkAjiHeader from "@/assets/img/backgrounds/bg1.png";
  import vueMkAjiHeaderMobile from "@/assets/img/backgrounds/bgt1.png";


  import logonb from "@/assets/img/LogosQTF/iconnbw.png"
  
  //hooks
  const body = document.getElementsByTagName("body")[0];

  var ancho = window.innerWidth;
  var hancho = calcularHight(ancho);
  var imgbg  = calcularBg(ancho);
 
  function calcularHight(ancho) {
    
    var au;
    if(  0 <= ancho  && ancho <= 350 ) {
      au = 80
    }
    
    else if ( 351 <= ancho  && ancho <= 450  ){ 
      au = 80
    }

    else if ( 451 <= ancho  && ancho <= 540  ){ 
      au = 85
    }
    
    else {
      au = 85
    }

    return au;
  }

  function calcularBg(ancho) {
    
    var au;

    console.log(ancho)
    if(  0 <= ancho  && ancho <= 350 ) {
      console.log('entramos aqui en 0 a 350')
      au = vueMkAjiHeaderMobile
    }
    
    else if ( 351 <= ancho  && ancho <= 450  ){ 
      console.log('entramos aqui en menos de 450')
      au = vueMkAjiHeaderMobile

    }

    else if ( 451 <= ancho  && ancho <= 540  ){ 
      console.log('entramos aqui en menos de 540')
      au = vueMkAjiHeader

    }
    
    else {
      au = vueMkAjiHeader

    }
    console.log(au)
    return au;
  }

  console.log(hancho)
  onMounted(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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

      <!-- class="page-header min-height-400" -->
    <div
      :class="`page-header min-vh-${hancho ?? '85'}`"
      :style="`background-image: url(${imgbg})`"
      id= "imgBgMainQTF"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center mx-auto position-relative">

            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                <div id="divCenteredforAll" v-if="hancho>80">
                  <img :src="logonb" alt="QTF" class='brandQTF'>  
                </div>
              </div>
              <div v-if="hancho>80" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2 mt-4">
                <h1
                  class="text-white pt-3 mt-n5 me-2"
                  :style="{ display: 'inline-block ', fontWeight: '700'}"
                >
                  Quality Tropical Foods S.A.S
                </h1>
              </div>
            </div>
            <div v-if="hancho<=80" id="divCenteredforAll">
              <img :src="logonb" alt="QTF" class='brandQTFpeque'>  
            </div>
            <h2 v-if="hancho<=80" class="lead text-white px-5 mt-2" :style="{ fontWeight: '300' }">
              Un producto 100% Colombiano, somos expertos en ají.
            </h2>
            <p v-else class="lead text-white px-5 mt-2" :style="{ fontWeight: '300' }">
              Un producto 100% Colombiano, somos expertos en ají.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div v-if="hancho>80" class="card card-body mx-3 mx-md-4 mt-n6">
    

    <PresentationCounter/>
    <InformacionRelevante />
    <!-- <PresentationTestimonials /> -->

  </div>

  <div v-else class="card card-body mx-3 mx-md-4 mt-n6">
    
    <InformacionRelevante />
    <PresentationCounter/>
    <!-- <PresentationTestimonials /> -->

  </div>
  <DefaultFooter />
</template>

<style>

  .brandQTFpeque {
      min-height: 25px;
      min-width: 25px;
      max-width: 150px;
      max-height: 150px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    #imgBgMainQTF{
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    
  @media only screen and (max-width: 450px) {
    .brandQTF {
      min-height: 25px;
      min-width: 25px;
      max-width: 80px;
      max-height: 80px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    #imgBgMainQTF{
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  @media only screen and (min-width: 451px) {
    .brandQTF {
      color: white;
      min-height: 80px;
      min-width: 80px;
      width: 150px;
      height: 150px;
    }

    #imgBgMainQTF{
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    #divCenteredforAll{
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>