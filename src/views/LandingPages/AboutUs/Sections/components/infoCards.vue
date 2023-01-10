<template>
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
    <RouterLink :to="routerLink">
      <center>
        <div class="info contenedor">
          <figure>
            <img :src="srcimg" :alt="label" class="img-fluid border-radius-lg" id="imgMash" />
            <div class="capa">
              <img :src="logonb" alt="QFT"> 
              <p>Conoce todo sobre nuestros ajís</p>
            </div>
          </figure>
        </div>
            <p class="font-weight-normal mt-4 mb-4">
              {{label}}
            </p>
      </center>
    </RouterLink>
  </div>
    
</template>


<script setup>
  import { onMounted, ref } from 'vue';
  import logonb from "@/assets/img/LogosQFT/iconnbw.png"


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

  .contenedor{
    width: 200px;
    margin: auto;
    border-radius: 20px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contenedor figure{
    position: relative;
    height: 180px;
    width: 200px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 15px 25px
    rgba(0, 0, 0, 0.1);
    cursor:pointer
  }

  .contenedor figure img{
    width: 100%;
    height: 100%;
    transition: all 500ms ease-out;
  }

  .contenedor figure .capa{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    /* background: #4AB6B4; */
    background: #375496;
    transition: all 500ms ease-out;
    opacity: 0.3;
    visibility: hidden;
    text-align: center;
  }

  .contenedor figure:hover > .capa {
    opacity: 0.7;
    visibility: visible;
  }

  .contenedor figure:hover > .capa p{
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 5px;
    margin-right: 5px;
    color: #fff;
  }

  .contenedor figure:hover > .capa img{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    width: 50px;
    height: 50px;
    color: #fff;
  }
</style>