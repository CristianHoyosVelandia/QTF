<template>
  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
    <RouterLink :to="routerLink">
      <center>
        <div class="info">
          <img :src="srcimg" class="img-fluid border-radius-lg" id="imgMash" />
          <h6 class="font-weight-bolder mt-4 mb-4">
            {{label}}
          </h6>
        </div>
      </center>
    </RouterLink>
  </div>
    
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

<style>
  #justifycontent{
    text-align: justify;
  }

  #imgMash{
    margin: auto;
    border-radius: 20px;
    height: 180px;
    width: 220px;
  }
</style>