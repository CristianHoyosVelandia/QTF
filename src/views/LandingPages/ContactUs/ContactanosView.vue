<script setup>
import { onMounted , ref } from "vue";

const correo = ref({
  nombre: " ",
  correo: " ",
  mensaje: " ",
  asunto: "Correo desde Pagina Web"
})
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/aji.jpg";
import iconimg from "@/assets/img/LogosQTF/iconnbw.png"

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

  // material-input
  import setMaterialInput from "@/assets/js/material-input";
  onMounted(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setMaterialInput();
  });

  var msjBox2 = ref({
    visible: false,
    status: false,
    message: '',
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function escribirMensaje( controller, status, msj) {
    controller.value.visible = true;
    controller.value.status = status;
    controller.value.message = msj;
  }

  function resetModal(controller) {
    controller.value.visible = false;
    controller.value.status = false;
    controller.value.message = '';
  }

  const EnviarMSJ = () => {
    resetModal(msjBox2)
    // console.log("entro aqui - >", correo.value)
    // console.log(validateEmail(correo.value.correo))
    if(correo.value.nombre.trim().length == 0){
      escribirMensaje(msjBox2, false, "Ingrese su nombre.");
      return false;
    } else {
      if(validateEmail(correo.value.correo)==null){
        escribirMensaje(msjBox2, false, "Ingrese su correo.");
        return false;
      } else {
        if(correo.value.mensaje.trim().length == 0){
          escribirMensaje(msjBox2, false, "Ingrese un mensaje.");
          return false;
        } else{
          escribirMensaje(msjBox2, true, "")
          const $buttonMailTo = document.querySelector('#trucazo');
          // console.log("click en trucazo")
          setTimeout(() => {
            $buttonMailTo.setAttribute('href', `mailTo: gerencia@qtfcolombia.com.co?subject=Nombre: ${correo.value.nombre} - Correo: ${correo.value.correo}&body=${correo.value.mensaje}`)
            $buttonMailTo.click()
          }, 500);
        }
      }
    }
  }
  const emitNombre        = (controller) =>  { correo.value.nombre = controller; };
  const emitCorreo        = (controller) =>  { correo.value.correo = controller; };
  const emitMensaje       = (controller) =>  { correo.value.mensaje = controller; };

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
              <div class="card-body ">
                <p class="pb-3 mb-2">
                  Si quieres mas información sobre nuestros productos no dudes en contactarnos 
                  por medio del formulario adjunto o a través de nuestras redes, 
                  no olvides poner tus datos de contacto para que podamos comunicarnos contigo.
                </p>
                <!-- For further questions, including partnership opportunities,
                  please email hello@creative-tim.com or contact using our
                  contact form. -->
                <form id="contact-form" method="post" @submit.prevent="hola" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          :key="correo.nombre"
                          :controller="correo.nombre"
                          @updateValue ="emitNombre"
                          class="input-group-static mb-3"
                          type="text"
                          label="Nombre Completo"
                          placeholder="Ingresa tu nombre aqui"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          :key="correo.correo"
                          :controller="correo.correo"
                          @updateValue ="emitCorreo"
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                          placeholder="Ingresa tu correo aqui"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-2">
                      <MaterialTextArea
                        :key="correo.mensaje"
                        :controller="correo.mensaje"
                        @updateValue ="emitMensaje"
                        id="message"
                        class="input-group-static mb-0"
                        :rows="2"
                        placeholder=""
                        > ¿Como podemos Ayudarte? Dejanos tu mensaje.</MaterialTextArea
                      >
                    </div>  

                    <a href="mailto:gerencia@qtfcolombia.com.co" id="trucazo">Hola</a>


                    <div v-bind="msjBox2" v-if="msjBox2.visible === true">

                      <div v-if="msjBox2.status === true" class="alert alert-dismissible mt-2 mb-2" role="alert">
                        <div class="row colorbgAlertSucess">
                          <div class="col colorTextSucess">
                            <strong> Correo enviado exitosamente</strong> 
                          </div>

                          <div class="col divBtnSucess">
                            <button type="button" class="closeBtnAlertSucess" data-bs-dismiss="alert" aria-label="Close">×</button>
                          </div>
                        </div>
                      </div>

                      <div v-else class="alert alert-dismissible mt-2 mb-2" role="alert">
                        <div class="row colorbgAlertDanger">
                          <div class="col colorTextDanger">
                            <strong> Error!.</strong> {{ msjBox2.message }}
                          </div>

                          <div class="col divBtnDanger">
                            <button type="button" class="closeBtnAlertDanger" data-bs-dismiss="alert" aria-label="Close">×</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row mt-1">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          @click="EnviarMSJ"
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
  
  .colorbgAlertDanger{
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    background-color: rgba(255, 0, 0, 0.5);
  }
  .divBtnDanger {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  }
  .colorTextDanger {
    color: white;
  }
  .closeBtnAlertDanger {
    
    height: 30px;
    width: 30px;
    border: none;
    background-color: red;
    color: white;
    border-radius: 25px;
  }

  .colorbgAlertSucess{
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    background-color: #55AE59;
  }

  .divBtnSucess {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  }
  .colorTextSucess {
    color: white;
  }
  .closeBtnAlertSucess {
    
    height: 30px;
    width: 30px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 25px;
  }

  #trucazo{
    opacity: 0;
  }

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