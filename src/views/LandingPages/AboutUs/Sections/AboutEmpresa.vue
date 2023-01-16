<script setup>
// example component
import HistoryTeamCards from "@/examples/cards/teamCards/HistoryTeamCards.vue";

// images
import history1 from "@/assets/img/history/1.jpg";
import history2 from "@/assets/img/history/2.jpg";
import history3 from "@/assets/img/history/3.jpg";
import history4 from "@/assets/img/history/4.jpg";
import history5 from "@/assets/img/history/6.jpg";
import history6 from "@/assets/img/history/7.jpg";

</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            QFT Quality Tropical Food S.A.S. ZOMAC
          </h3>
          <h4 class="text-white opacity-8 mb-0">
            Expertos en Ají
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history1"
            :profile="{ name: 'QUALITY TROPICAL FOODS S.A.S. ZOMAC', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Se creó el 02 de febrero de 2021 mediante matrícula mercantil No. 103835 de la Cámara de Comercio de Tuluá. Su planta de producción se ubica en el callejón san Fernando, finca Ana C (en arriendo), con el objetivo de procesar hortalizas (ají principalmente) cultivado y cosechado por agricultores de la región. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history2"
            :profile="{ name: 'Creciendo Juntos', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Durante el periodo de febrero a mayo de 2021 se realizan las adecuaciones locativas para su operación, para el cumplimiento de buenas prácticas de manufactura, adecuación de pisos y espacios de almacenamiento y adquisición de materias primas."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history3"
            :profile="{ name: 'Misión', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="En Quality Tropical Foods SAS somos especialistas en el procesamiento de materias primas agrícolas, reconocidos por sus exigentes estándares de calidad e inocuidad, que garantizan la satisfacción de nuestros clientes, apertura de nuevos mercados, generando rentabilidad del negocio y el mínimo impacto al medio ambiente. Ofrecemos materias primas, utilizadas en procesos industriales, para las compañías productoras de alimentos en el mundo. Contribuimos a impulsar el desarrollo de la región en el sector productivo y social. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history4"
            :profile="{ name: 'Visión', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Para el año 2027, seremos el proveedor de materias primas agrícolas,  reconocidos por nuestros clientes, por la calidad, innovación, servicio y competitividad, mediante el uso de tecnologias de alto impacto, implementación de sistemas de gestión,  beneficiando a empleados, proveedores y clientes. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history5"
            :profile="{ name: 'Operación', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="La planta comienza sus operaciones productivas en mayo de 2021 y a partir del 01 de junio del mismo año comienza la contratación de personal directamente por la compañía, garantizando a sus trabajadores el pago de salarios, prestaciones sociales y seguridad social."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history6"
            :profile="{ name: 'Posicionamiento', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description= "La mejora continua es parte de nuestra filosofía, por ello tenemos concepto favorable INVIMA y certificación de análisis de peligros y puntos críticos de control, o HACCP. El cual es: el enfoque preventivo sistemático para la seguridad alimentaria de los peligros biológicos, químicos y físicos en los procesos. ¡Mejoramos por ti!. "

          />
        </div>
      </div>
    </div>
  </section>
</template>
