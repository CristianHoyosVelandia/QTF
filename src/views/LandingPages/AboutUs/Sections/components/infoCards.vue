<template>
  <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
    <RouterLink :to="routerLink">
      <div class="row justify-content-center">
        <div class="info contenedor">
          <figure>
            <img :src="srcimg" :alt="label" class="img-fluid border-radius-lg" id="imgMash" />
            <div class="capa">
              <img :src="logonb" alt="QFT"> 
              <p>Conoce todo sobre nuestros ajís</p>
            </div>
          </figure>
        </div>
        <div v-if="hancho<=80" class="m-lg-4 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">

          <div class="row justify-content-center">
            <div class="col-4" v-for="item in props.desc" :key="item">
              <img :src="fire" id="fireGFT">
            </div>
            <div class="col-4" v-for="item in (3-props.desc)" :key="item">
              <img :src="fireoff" id="fireGFT">
            </div>
          </div>
          <h4 class="font-weight-normal text-white mt-2 mb-4">
            {{label}}
          </h4>
        </div>
      </div>
    </RouterLink>
  </div>
  
  <div v-if="hancho>80" class="m-lg-4 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
    <RouterLink :to="routerLink">
        <div class="row justify-content-center">
          <div class="col-4" v-for="item in props.desc" :key="item">
            <img :src="fire" id="fireGFT">
          </div>
          <div class="col-4" v-for="item in (3-props.desc)" :key="item">
            <img :src="fireoff" id="fireGFT">
          </div>
        </div>
      <h4 class="font-weight-normal text-white mt-2 mb-4">
        {{label}}
      </h4>
    </RouterLink>
  </div>
    
</template>


<script setup>
  import { onMounted, ref } from 'vue';
  import logonb from "@/assets/img/LogosQFT/iconnb.png"
  import fire from "@/assets/img/fuego/fire.png"
  import fireoff from "@/assets/img/fuego/fireoff.png"


  // Images Assets
  import PicanteRojo from "@/assets/img/PicanteRojo/AjiPicanteRojo.jpg"
  import rojoPicanteImg from "@/assets/img/PicanteRojo/AjiPicanteRojo.jpg";
  import habaneroRojo from "@/assets/img/AjiHabaneroRojo/habaneroDespulpado.jpg";
  import CayeneMash from "@/assets/img/CayeneMash/c1.jpg";
  import NagaJolokiaMash from "@/assets/img/AjiJoloke.jpg";
  import AjijalapenoVerde from "@/assets/img/AjiJalapenoVerde.jpg";
  import RojoMash from "@/assets/img/JalapenoRojo1.jpg";
  import dulceRojo from "@/assets/img/DulceRojo/AjiDulceRojo.jpg";
  import AmarilloImg from '@/assets/img/AjiAmarillo/Amarillo.png'

  var ancho = window.innerWidth;
  var hancho = calcularHight(ancho);

  function calcularHight(ancho) {
    
    var au;
    if(  0 <= ancho  && ancho <= 350 ) {
      au = 80
    }
    
    else if ( 351 <= ancho  && ancho <= 450  ){ 
      au = 80
    }

    else if ( 451 <= ancho  && ancho <= 781  ){ 
      au = 80
    }
    
    else {
      au = 85
    }

    return au;
  }
  // variables de los props
  const srcimg = ref(' ');
  const routerLink = ref(' ');
  const label = ref('name')
  
  const props = defineProps({ 
    srcimg:       { default: '@/assets/img/AjiAmarillo/Amarillo.png',         type: String },
    routerLink:   { default: 'hashtag',      type: String },
    label:        { default: 'name',         type: String },
    desc:         { default:  2 ,           type: Number},

  });

  onMounted(() => {
    console.log('valores de los props:', props);
    switch (props.srcimg) {
      case 'RojoMash':
        srcimg.value = RojoMash
      break;
      case 'AjijalapenoVerde':
        srcimg.value = AjijalapenoVerde
      break;
      case 'dulceRojo':
        srcimg.value = dulceRojo
      break;
      case 'rojoPicanteImg':
        srcimg.value = rojoPicanteImg
      break;
      case 'AmarilloImg':
        srcimg.value = AmarilloImg
      break;
      case 'habaneroRojo':
        srcimg.value = habaneroRojo
      break;
      case 'NagaJolokiaMash':
        srcimg.value = NagaJolokiaMash
      break;
      case 'RojoDulce':
        srcimg.value = dulceRojo
      break;
      case 'CayeneMash':
        srcimg.value = CayeneMash
      break;
      case 'PicanteRojo':
        srcimg.value =PicanteRojo
      break;
      default:
        srcimg.value = AmarilloImg
    }

    routerLink.value  = props.routerLink
    label.value      =  props.label

  })

</script>

<style>

  

  #imgMash{
    border-radius: 20px;
    height: 200px;
    width: 220px;
  }

  #justifycontent{
    text-align: justify;
  }

  .contenedor{
    width: 220px;
    height: 200px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #fireGFT{
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
  }
  .contenedor figure{
    position: relative;
    height: 200px;
    width: 220px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 1px 15px 25px
    rgba(255, 255, 255, 0.1);
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
    padding-top: 15%;
    width: 100%;
    height: 100%;
    /* background: #4AB6B4; */
    background: #3A3A40;
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
    margin-top: 15px;
    margin-bottom: 10px;
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