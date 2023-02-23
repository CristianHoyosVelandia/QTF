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
            description="Se crea el 2 de febrero del 2021 mediante matrícula mercantil No. 103835 de la Cámara de Comercio de Tuluá. Su planta de producción se ubica en el callejón san Fernando, finca Ana C, con el objetivo de procesar hortalizas, principalmente ají, el cual es cultivado y cosechado por agricultores de la región. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history2"
            :profile="{ name: 'Creciendo Juntos', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Durante el periodo de febrero a mayo del 2021, se realizaron las adecuaciones locativas necesarias para su operación y el cumplimiento de las buenas prácticas de manufactura, como adecuación de pisos, espacios de almacenamiento de producto terminado y materias primas."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history3"
            :profile="{ name: 'Misión', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Nuestro propósito es realizar procesos guiados por la innovación, el desarrollo, formación de recursos humanos y mejoramiento continuo con criterios de excelencia en el área de materias primas, energía y medio ambiente, para contribuir a impulsar el desarrollo sustentable de la región en el sector productivo y social, y buscando cumplir los requerimientos y expectativas del cliente."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history4"
            :profile="{ name: 'Visión', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Para el 2027 ser el proveedor de productos alimenticios valorado por los clientes y consumidores por su calidad e innovación tecnológica. Apuntamos a ser una compañía rentable, líder en el mercado nacional y participando estratégicamente en los mercados externos. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history5"
            :profile="{ name: 'Operación', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="La planta comienza sus operaciones productivas en mayo del 2021 y a partir del 01 de junio del mismo año comienza la contratación de personal directamente por la compañía, garantizando a sus trabajadores el pago de salarios, prestaciones y seguridad social."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history6"
            :profile="{ name: 'Posicionamiento', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description= "La mejora continua es parte de nuestra filosofía, gracias a esto tenemos concepto favorable INVIMA, certificación HACCP y GMP, y registro FDA. ¡Seguimos mejorando por ti! "

          />
        </div>
      </div>
    </div>
  </section>
</template>
