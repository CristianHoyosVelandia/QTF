<script setup>
  import { onMounted, onUnmounted } from "vue";

  //example components
  import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

  //image
  import bg0 from "@/assets/img/bcgroundMaterias.png";

  //dep
  import Typed from "typed.js";

  //sections
  import AboutMP from "./Sections/AboutMPMASH.vue";
  import AboutMPPulpa from "./Sections/AboutMPPULPA.vue";
  import Divider from "./Sections/components/divider.vue";


  import AboutTeam from "./Sections/AboutTeam.vue";
  import Featuring from "./Sections/AboutFeaturing.vue";
  import Newsletter from "./Sections/AboutNewsletter.vue";

  const body = document.getElementsByTagName("body")[0];
  //hooks
  onMounted(() => {
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
      route: 'https://api.whatsapp.com/send?phone=573176703596&text=Hola&source=&data=',
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
            <br>
            <h1 class="text-white">
              Explora nuestros productos 
            </h1>
            <h1>
              <span class="text-white" id="typed"></span> 
            </h1>
            <div id="typed-strings">
              <h1>Con Amor</h1>
              <h1>Para ti </h1>
            </div>
            <br>
            <p class="lead mb-4 text-white opacity-8">
              Ya sea en pulpa o en mash, contamos con todo en Aji en el Valle del Cauca.
            </p>
            <!-- <button type="submit" class="btn bg-white text-dark">
              Vive la Experiencia
            </button> -->
            <h6 class="text-white mb-2 mt-5">Encuéntranos en nuestras plataformas:</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <AboutMP />
    <Divider />
    <AboutMP />
    <Divider />
    <AboutMPPulpa />
    <!-- <AboutTeam />
    <Featuring />
    <Newsletter /> -->
  </div>
  <DefaultFooter />
</template>
