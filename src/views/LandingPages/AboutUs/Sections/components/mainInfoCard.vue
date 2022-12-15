<template>
  <section>
            <div class="card" id="card-position">
            <div class="card-header p-0 mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img :src="srcimg" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-normal">
                <a href="javascript:;"> AJI MASH </a>
              </h5>
              <p class="mb-0" id="justifycontent">
                Producto obtenido a partir de la molienda de ají Jalapeño rojo con presencia de semillas del propio fruto, mezclado con sal y ácido acético. Libre de material, colores y sabores no característicos.
              </p>
              <br>
              <p class="mb-0" id="justifycontent">
                Este producto está desarrollado a las necesidades del mercado. 
              </p>
              <button type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success">
                Conoce Mas
              </button>
            </div>
          </div>
          </section>
</template>


<script setup>
  import { onMounted, ref } from 'vue';


  // variables de los props
  const srcimg = ref(' ');
  const routerLink = ref(' ');
  const label = ref('name')
  
  const props = defineProps({ 
    srcimg:       { default: 'name',         type: String },
    routerLink:   { default: 'hashtag',      type: String },
    label:        { default: 'name',         type: String },
  });

  onMounted(() => {
    console.log('valores de los props:', props);
    srcimg.value      = props.srcimg
    routerLink.value  = props.routerLink
    label.value      =  props.label

  })

</script>
