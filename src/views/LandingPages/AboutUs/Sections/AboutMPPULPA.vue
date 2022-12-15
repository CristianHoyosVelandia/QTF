<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCardMP from "../../../../examples/cards/blogCards/CenteredBlogCardMP.vue";
import pulpaImg from "@/assets/img/pulpa.jpg";

</script>
<template>
  <section class="py-6">
    
    <div class="container">
      <div class="row align-items-center">
        
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Fully integrated"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Payments functionality"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Prebuilt components"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Improved platform"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
        </div>

        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <section>
            <div class="card" id="card-position">
            <div class="card-header p-0 mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img :src="pulpaImg" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-normal">
                <a href="javascript:;"> PULPA DE AJI </a>
              </h5>
              <p class="mb-0" id="justifycontent">
                Producto obtenido a partir de la molienda y despulpado de ají sin presencia de semillas, mezclado con sal y ácido acético de origen natural.
              </p>
              <br>
              <p class="mb-0" id="justifycontent">
                Libre de material, colores y sabores no característicos.
              </p>
              <button type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success">
                Conoce Mas
              </button>
            </div>
          </div>
          </section>
          
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