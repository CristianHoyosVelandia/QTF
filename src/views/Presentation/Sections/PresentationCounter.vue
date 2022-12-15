<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Toneladas Producidas"
                :count="400"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <!-- <DefaultCounterCard
                color="success"
                title="Toneladas Vendidas"
                description="Mix the sections, change the colors and unleash your
                  creativity"
                :count="284"
                suffix="+"
                :duration="3000"
                divider="vertical"
              /> -->
              <DefaultCounterCard
                color="success"
                title="Toneladas Vendidas"
                :count="284"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Clientes Nacionales"
                :count="6"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
