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
            Chili Pepper Experts.
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
            description="Created on February 2, 2021 through commercial registration No. 103835 in Tulua, Valle. Its production plant is located in San Fernando alley, Ana C farm, with the objective of processing vegetables, mainly chili, which is grown and harvested by farmers in the region."
          />
        </div>
      </div>
    </div>
  </section>
</template>
