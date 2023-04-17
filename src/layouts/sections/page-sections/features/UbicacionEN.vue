<script setup>
  import { onMounted, onUnmounted } from "vue";

  //example components
  import DefaultNavbar from "@/examples/navbars/NavbarDefaultEN.vue";
  import DefaultFooter from "@/examples/footers/FooterDefaultEN.vue";
  import Ubicacion from "../../../../views/LandingPages/AboutUs/Sections/AboutUbicacion.vue"
  import logonb from "@/assets/img/LogosQTF/iconnbw.png"
  //image
  import bg0 from "@/assets/img/chilop2.jpg";

  const ParamsMash = {
    "DescItems": "Algunos de nuestros ejemplares:"
  }

  const body = document.getElementsByTagName("body")[0];
  //hooks
  onMounted(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    body.classList.add("about-us");
    body.classList.add("bg-gray-200");

    if (document.getElementById("typed")) {
      // eslint-disable-next-line no-unused-vars
      var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      });
    }
  });

  onUnmounted(() => {
    body.classList.remove("about-us");
    body.classList.remove("bg-gray-200");
  });
</script>

<template>
  <DefaultNavbar
    :action="{
      route: 'https://api.whatsapp.com/send?phone=573125600426&text=Hola&source=&data=',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-85"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">

            <img :src="logonb" alt="QTF" class='brandQTF mb-3'>  

            <h2 class="mb-4 text-white opacity-8">
              Distribution centers
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body bg-gradient-dark shadow-xl mx-3 mx-md-4 mt-n6">
    <Ubicacion />
  </div>
  <DefaultFooter />
</template>

<style>
  .brandQTF {
    min-height: 25px;
    min-width: 25px;
    max-width: 200px;
    max-height: 200px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>