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
            QTF Quality Tropical Food S.A.S. ZOMAC
          </h3>
          <h4 class="text-white opacity-8 mb-0">
            Chili Pepper Experts
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
            description="Created on February 2, 2021 through commercial registration No. 103835 in Tulua, Valle. Its production plant is located in San Fernando alley, Ana C farm, with the objective of processing vegetables, mainly chili, which is grown and harvested by farmers in the region. "
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history2"
            :profile="{ name: 'Growing up together', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The necessary adaptations were made for its operation and  good manufacturing practices during the period of February to May 2021; some of these adaptations were: adaptation of floors, storage spaces for finished products and raw materials."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history3"
            :profile="{ name: 'Our Mission', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="Our purpose is to carry out processes guided by innovation, the development, training of human resources and continuous improvement with criteria of excellence in the raw materials area, energy and environment, to guide and promote the sustainable development of the region in the productive and social sector, and seeking to meet the requirements and expectations the client's."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history4"
            :profile="{ name: 'Our Vision', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="By 2027, we going to be the supplier of food products valued by customers and consumers for its quality and technological innovation. We aim to be a leader in the national market and strategically participating in foreign markets."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history5"
            :profile="{ name: 'Operation', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description="The plant begins its production operations in May 2021 and as of June 1 of the same year the hiring of personnel directly by the company begins, guaranteeing its workers the payment of wages, benefits and social security."
          />
        </div>
        <div class="col-lg-12 col-12">
          <HistoryTeamCards
            class="mt-4"
            :image="history6"
            :profile="{ name: 'positioning', link: 'javascript:;' }"
            :position="{ label: ' ', color: 'success' }"
            description= "Continuous improvement is part of our philosophy, thanks to this we have a favorable INVIMA concept, HACCP and GMP certification, and FDA registration. We keep improving for you! "

          />
        </div>
      </div>
    </div>
  </section>
</template>
