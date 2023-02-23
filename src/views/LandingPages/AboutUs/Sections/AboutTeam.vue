<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import estabalidiad1 from "@/assets/img/estabalidiad1.jpg";
import plantulacion from "@/assets/img/plantulacion.jpg";
import recepcion from "@/assets/img/recepcion.jpg";
import seleccion from "@/assets/img/seleclavado1.jpg";
import cosecha from "@/assets/img/cosecha.jpg";
import cultivos from "@/assets/img/cultivos.jpg";
import semilla from "@/assets/img/semilla.jpg";

import molienda from "@/assets/img/TOR_7093.jpg";
import estabilidad from "@/assets/img/TOR_7109.jpg";
import almacenamiento from "@/assets/img/TOR_7073.jpg";




</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Nuesto Proceso QFT
          </h3>
          <p class="text-white opacity-8 mb-0">
            Conoce como transformamos el mundo por ti. 
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="semilla"
            :profile="{ name: 'OBTENCIÓN DE LA SEMILLA', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Nuestras semillas son obtenidas de forma natural, provienen de frutos sanos y con gran poder germinativo."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="plantulacion"
            :profile="{ name: 'PLANTULACIÓN', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Las semillas son plantuladas en viveros de la región, los cuales controlan y garantizan su correcto crecimiento, entregándolas listas para ser trasplantadas."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="cultivos"
            :profile="{ name: 'CULTIVOS ', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Son monitoreados por personal experto, quienes se encargan del manejo integral, gestión del agua, fertilización y salud del suelo, así como del control fitosanitario para optimizar el crecimiento y la capacidad para combatir cualquier tipo de plaga."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="cosecha"
            :profile="{ name: 'COSECHA', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Estamos comprometidos con el desarrollo de la región, por eso nuestras cosechas son recolectadas de forma manual, garantizando la integridad del fruto."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="recepcion"
            :profile="{ name: 'RECEPCIÓN', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El ají llega directamente del campo a la planta QTF en sacos de lona, para luego ser depositado en canastillas plásticas y posteriormente, procesarse."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="seleccion"
            :profile="{ name: 'SELECCIÓN Y LAVADO', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El ají es seleccionado cuidadosamente y clasificado de acuerdo con el color, la maduración y el estado del fruto, este se debe encontrar en óptimas condiciones. En esta etapa se descarta todo tipo de material extraño proveniente del cultivo y el lavado realizado mediante aspersión con agua potable, permite la eliminación de impurezas como la tierra presente en el fruto."
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="molienda"
            :profile="{ name: 'MOLIENDA', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Durante el proceso de molienda el ají pasa por un molino, el cual tritura el ají en partículas más pequeñas y de acuerdo con los requerimientos del cliente, se adiciona ácido acético y sal."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="estabalidiad1"
            :profile="{ name: 'ESTABILIDAD', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El ají mezclado con ácido acético y sal es monitoreado para garantizar una correcta fermentación y cumplimiento de parámetros fisicoquímicos. En esta etapa, controláramos que antes de ser cerrado herméticamente el producto final cumpla con todas las condiciones de calidad e inocuidad."
          />
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="almacenamiento"
            :profile="{ name: 'ALMACENAMIETO', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El almacenamiento se realiza en espacios frescos, secos y bien ventilados, protegido de cualquier tipo de plaga que pueda afectar la integridad del producto. La temperatura debe mantenerse a menos de 35°C y humedad relativa menor del 80%."
          />
        </div>
      </div>
    </div>
  </section>
</template>
