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
            :profile="{ name: 'OBTENCION DE SEMILLA', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Nuestras semillas provienen de frutos sanos y con gran poder germinativo las cuales son obtenidas de forma natural."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="plantulacion"
            :profile="{ name: 'PLANTULACION', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Las semillas son plantadas en viveros de la región, controlando y garantizando su correcto crecimiento, entregándolas listas para ser trasplantadas."
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
            description="Monitoreados por personal experto, dando un manejo integral y control fitosanitario para optimizar el crecimiento, capacidad para combatir cualquier plaga o enfermedad, gestión del agua, fertilización y la salud del suelo."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="cosecha"
            :profile="{ name: 'COSECHA', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Estamos comprometidos con el desarrollo de la región, por esos nuestras cosechas son recolectadas de forma Manuel, garantizando la integridad del fruto."
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
            description="El ají llega del campo a planta QTF en sacos de lona para luego ser depositada en canastillas plásticas para su posterior proceso."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="seleccion"
            :profile="{ name: 'SELECCIÓN Y LAVADO', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El ají es seleccionado y clasificado de acuerdo con el color, maduración, frutos que se encuentren en óptimas condiciones, se elimina todo tipo de material extraño proveniente del cultivo. El lavado se realiza con aspersión de agua potable con la finalidad de eliminar tierra presente en el fruto."
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
            description="En el proceso de molienda el ají pasa por un molino el cual tritura el ají en partículas más pequeñas, de acuerdo con los requerimientos del cliente se adiciona ácido acético y sal."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="estabalidiad1"
            :profile="{ name: 'ESTABILIDAD', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="El ají mezclado con ácido acético y sal es monitoreado para garantizar una correcta fermentación y cumplimiento de parámetros fisicoquímicos. En esta etapa controláramos que antes de ser cerrado herméticamente el producto final cumpla con todas las condiciones de inocuidad."
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
            description="El almacenamiento se realiza a temperatura ambiente, en un ambiente fresco y seco protegido de cualquier tipo de placa que pueda afectar la integridad del producto."
          />
        </div>
      </div>
    </div>
  </section>
</template>
