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
          <h5 class="font-weight-normal text-white mt-4 mb-4">
            {{label}}
          </h5>
      </center>
    </RouterLink>
  </div>
    
</template>


<script setup>
  import { onMounted, ref } from 'vue';
  import logonb from "@/assets/img/LogosQFT/iconnb.png"

  // Images Assets
  import rojoPicanteImg from "@/assets/img/PicanteRojo/AjiPicanteRojo.jpg";
  import habaneroRojo from "@/assets/img/AjiHabaneroRojo/habaneroDespulpado.jpg";
  import CayeneMash from "@/assets/img/CayeneMash.jpg";
  import NagaJolokiaMash from "@/assets/img/AjiJoloke.jpg";
  import AjijalapenoVerde from "@/assets/img/AjiJalapenoVerde.jpg";
  import RojoMash from "@/assets/img/JalapenoRojo1.jpg";
  import dulceRojo from "@/assets/img/DulceRojo/AjiDulceRojo.jpg";
  import AmarilloImg from '@/assets/img/AjiAmarillo/Amarillo.png'


  // variables de los props
  const srcimg = ref(' ');
  const routerLink = ref(' ');
  const label = ref('name')
  
  const props = defineProps({ 
    srcimg:       { default: '@/assets/img/AjiAmarillo/Amarillo.png',         type: String },
    routerLink:   { default: 'hashtag',      type: String },
    label:        { default: 'name',         type: String },
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