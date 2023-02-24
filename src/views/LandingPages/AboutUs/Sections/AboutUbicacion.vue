<script setup>
// example component
import HistoryTeamCards from "@/examples/cards/teamCards/UbicationCards.vue";

// images
import history1 from "@/assets/img/Centros/1.png";
// 
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            QTF Quality Tropical Food S.A.S. ZOMAC
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
            href="https://www.google.com/maps/place/Quality+Tropical+Food/@4.3381454,-76.169679,15z/data=!4m2!3m1!1s0x0:0x2ce572f5bdc1240c?sa=X&ved=2ahUKEwjguMKLmc38AhXnSzABHTynAlQQ_BJ6BAhWEAg"
            :profile="{ name: 'QUALITY TROPICAL FOODS S.A.S. ZOMAC,Bolivar Valle', link: 'https://www.google.com/maps/place/Quality+Tropical+Food/@4.3381454,-76.169679,15z/data=!4m2!3m1!1s0x0:0x2ce572f5bdc1240c?sa=X&ved=2ahUKEwjguMKLmc38AhXnSzABHTynAlQQ_BJ6BAhWEAg' }"
            :position="{ label: ' ', color: 'success' }"
            description="Se crea el 2 de febrero del 2021 mediante matrícula mercantil No. 103835 de la Cámara de Comercio de Tuluá. Su planta de producción se ubica en el callejón san Fernando, finca Ana C, con el objetivo de procesar hortalizas, principalmente ají, el cual es cultivado y cosechado por agricultores de la región."
          />
        </div>
      </div>
    </div>
  </section>
</template>
