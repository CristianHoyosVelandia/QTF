<script setup>
  import { onMounted } from "vue";

  //example components
  import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "@/examples/footers/FooterDefault.vue";

  // Sections components
  import BaseFab from "../../components/BaseLayout.vue";
  import View from "../../components/View.vue";

  // Features page components
  import FeatureOne from "./components/FeatureOne.vue";

  // Features page components codes
  import { feature1Code } from "./components/codes";

  //nav-pills
  import setNavPills from "@/assets/js/nav-pills";

  //hook
  onMounted(() => {
    setNavPills();
  });
</script>

<template>
  <!-- Navbar de Vista -->
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar/>
      </div>
    </div>
  </div>

  <br>
  <section>
    <div class="page-header pillComponente min-vh-90">
    </div>
    
  </section>

  <DefaultFooter />

</template>


<style>
  .pillComponente {
    background-color: red;
  }
</style>