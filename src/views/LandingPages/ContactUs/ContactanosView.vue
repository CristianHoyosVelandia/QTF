<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/aji.jpg";
import iconimg from "@/assets/img/LogosQFT/iconnbw.png"

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
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

  
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">

          <!-- Image -->
          <div
            class="col-6 d-lg-flex d-none h-100 mt-5 pe-0 position-absolute top-0 start-0 flex-column"         
          >
            <div
              id="imgId"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
            ></div>
          </div>

          <!-- <div class="col-xl-1 col-lg-1 col-md-1"/> -->

          <div class="col-xl-6 col-lg-6 col-md-12 d-flex flex-column ms-lg-auto me-lg-1">
            <div 
              class="card d-flex blur justify-content-center shadow-lg my-2 sm-0 my-sm-2 mt-1 mb-2"
            >
              <div
                class="card-header p-0 position-relative mx-0 z-index-2 bg-transparent"
              >
                <div class="bg-gradient-success shadow-success border-radius-md p-3"
                >
                  <h3 class="text-white text-success ml-2 mb-0">Contactanos</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3 mb-2">
                  Si quieres mas información sobre nuestros productos no dudes en contactarnos 
                  por medio del formulario adjunto o a través de nuestras redes, 
                  no olvides poner tus datos de contacto para que podamos comunicarnos contigo.
                </p>
                <!-- For further questions, including partnership opportunities,
                  please email hello@creative-tim.com or contact using our
                  contact form. -->
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-3"
                          type="text"
                          label="Nombre Completo"
                          placeholder="Ingresa tu nombre aqui"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                          placeholder="Ingresa tu correo aqui"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-2">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-0"
                        :rows="3"
                        placeholder=""
                        > ¿Como podemos Ayudarte? Dejanos tu mensaje.</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          class="mt-3 mb-0"
                          >Enviar Mensaje
                        </MaterialButton>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>


<style>
  #cardcomponent {
    background-color: red;
    border-radius: 15px;

  }
  #imgId {
    border-radius: 50px;
    height: 80%;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  #imgIconID {
    border-radius: 50px;
    height: 80%;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>