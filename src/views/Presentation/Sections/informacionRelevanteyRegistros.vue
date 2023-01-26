<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <!-- <section class="pb-5 position-relative bg-gradient-dark mx-n3"> -->
  <section class="mx-n3 pb-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg/1200px-Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg"
              icon="touch_app"
              title="Nuestro Proceso <br /> La mejora Continua"
              description="CERTIFICACIÓN HACCP HAZARD ANYLISIS CRITICAL CONTROL POINT en Junio y Vamos Por mas"
            />
            <!-- <RotatingCardFront
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg/1200px-Capsicum_baccatum_in_Sa%C3%BAde_flea_market%2C_S%C3%A3o_Paulo%2C_Brazil.jpg"
              icon="touch_app"
              title="Feel the <br /> Material Kit"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            /> -->

            <RotatingCardBack
              image="https://occidente.co/wp-content/uploads/2017/08/rio-cauca.jpg"
              title="QUALITY TROPICAL FOODS S.A.S. ZOMAC "
              description="Creada en el valle del cauca con el objetivo de procesar hortalizas (ají principalmente) cultivado y cosechado por agricultores de la región. "
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Descubre Mas',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
              <!-- icon="content_copy" -->
            <DefaultInfoCard
              title="100% Vallecaucanos"
              description="Agricultores del y para el Valle del Cauca; especialistas en el procesamiento de materias primas,
              que garantizan la satisfacción de nuestros clientes y generen el mínimo impacto al medio ambiente. "
            />
              <!-- icon="flip_to_front" -->
            <DefaultInfoCard
              title="Capacitaciones"
              description="Construyendo y Formando Tejido Social."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="point"
              title="Mision"
              description="Somos especialistas en el procesamiento de materias primas agrícolas, reconocidos por sus exigentes estándares de calidad e inocuidad, que garantizan la satisfacción de nuestros clientes. "
            />
            <DefaultInfoCard
              class="mt-3"
              icon="point"
              title="Vision"
              description="Para el año 2027, seremos el proveedor de materias primas agrícolas,  reconocidos por nuestros clientes, por la calidad, innovación, servicio y competitividad, mediante el uso de tecnologias de alto impacto, implementación de sistemas de gestión,  beneficiando a empleados, proveedores y clientes."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
