<template>
  <carousel :items-to-show="1" class="mt-lg-5">
    <slide v-for="item in props.listCarrousel" :key="item">
      <InfoCards
        :srcimg = "item.srcimg"
        :routerLink = "item.routerLink"
        :label = "item.label"
      />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import InfoCards from '@/views/LandingPages/AboutUs/Sections/components/infoCards.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    InfoCards,
    Pagination,
    Navigation
  },
}
</script>

<script setup>
  import { onMounted, ref } from 'vue';

  // variables de los props
  const listCarrousel = ref([]);
  
  const props = defineProps({
    listCarrousel: { default: 
    [
      {srcimg:'', routerLink:'/nuestrosAjisMash-QFT/7', label:"Ají Naga Jolokia Mash"},
      {srcimg:'', routerLink:'/nuestrosAjisMash-QFT/7', label:"Ají ROjo"}
    ],         type: Array },
  });

  onMounted(() => {
    console.log('valores de los props Carrosel:', props);
  })

</script>
