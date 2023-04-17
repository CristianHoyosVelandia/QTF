<script setup>
// import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
import DefaultCounterCard from "../../../components/counterCards/DefaultCounterCard.vue";

</script>

<template>
  <!-- <section class="pb-4 position-relative bg-gradient-dark mx-n3" > -->
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Tons Produced"
                :count="1000"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Tons Sold"
                :count="1000"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="National Customers"
                :count="10"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
