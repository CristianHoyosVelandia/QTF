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
              description="CERTIFICACIÓN HACCP HAZARD ANALYSIS AND CRITICAL CONTROL POINTS y Vamos Por más."
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
                  route: '/QTF/contacto-QTF',
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
              title="100% Colombianos"
              description="Nuestra principal materia prima proviene de agricultores de origen colombiano que comercializan sus productos en el mercado local,
               estos son especialistas en el procesamiento de materias primas, implementando buenas prácticas en sostenibilidad, tecnificación de la agricultura 
               y calidad de sus cultivos, lo que nos permite garantizar la satisfacción de nuestros clientes y un mínimo impacto al medio ambiente.  "
            />
              <!-- icon="flip_to_front" -->
           
            <DefaultInfoCard
              title="Apoyo técnico."
              description=" Brindamos apoyo y acompañamiento técnico al agricultor, así como también capacitación permanente a nuestros colaboradores. 
              Comprometidos con el desarrollo de la región "
            />
          </div>
          <div class="row justify-content-start mt-2">
            
             <DefaultInfoCard
              title="Misión"
              description="Nuestro propósito es realizar procesos guiados por la innovación, el desarrollo, formación de recursos humanos y mejoramiento continuo con criterios de excelencia en el área de materias primas, energía y medio ambiente, para contribuir a impulsar el desarrollo sustentable de la región en el sector productivo y social, y buscando cumplir los requerimientos y expectativas del cliente."
            />
              <!-- description="Somos especialistas en el procesamiento de materias primas agrícolas, 
              reconocidos por sus exigentes estándares de calidad e inocuidad, que garantizan la satisfacción de nuestros clientes, 
              apertura de nuevos mercados, generando rentabilidad del negocio y el mínimo impacto al medio ambiente. 
              Ofrecemos materias primas, utilizadas en procesos industriales, para las compañías productoras de alimentos en el mundo. Contribuimos a impulsar el desarrollo de la región en el sector productivo y social. " -->

            <DefaultInfoCard
              title="Visión"
              description="Para el 2027 ser el proveedor de productos alimenticios valorado por los clientes y consumidores por su calidad e innovación tecnológica. Apuntamos a ser una compañía rentable, líder en el mercado nacional y participando estratégicamente en los mercados externos."
            />
              <!-- description="Para el año 2027, seremos el proveedor de materias primas agrícolas,  reconocidos por nuestros clientes, por la calidad, innovación, servicio y competitividad, mediante el uso de tecnologias de alto impacto, implementación de sistemas de gestión,  beneficiando a empleados, proveedores y clientes." -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
