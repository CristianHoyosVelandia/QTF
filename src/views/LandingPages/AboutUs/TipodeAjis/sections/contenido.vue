<script setup>
  // Importar imagenes aqui
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

  import arrowD from "@/assets/img/right.png"
  import arrowI from "@/assets/img/left.png"
  import brand from "@/assets/img/logo-ct-dark.png"


  import mainImg_01 from "@/assets/img/ajimashJalapenoRojo/j1.png"
  import Mimg1_01   from "@/assets/img/ajimashJalapenoRojo/2.jpg"
  import Mimg2_01   from "@/assets/img/ajimashJalapenoRojo/jr1.jpg"
  import Mimg3_01   from "@/assets/img/ajimashJalapenoRojo/3.jpg"

  import mainImg_2 from "@/assets/img/ajimashJalapenoVerde/ajv3.jpg"
  import Mimg1_2   from "@/assets/img/ajimashJalapenoVerde/ajv2.jpg"
  import Mimg2_2   from "@/assets/img/ajimashJalapenoVerde/ajv1.jpg"
  import Mimg3_2   from "@/assets/img/ajimashJalapenoVerde/ajv4.jpg"
  
  import mainImg_3 from "@/assets/img/CayeneMash/c1.jpg"
  import Mimg1_3   from "@/assets/img/CayeneMash/c2.jpg"
  import Mimg2_3   from "@/assets/img/CayeneMash/c3.jpg"
  import Mimg3_3   from "@/assets/img/CayeneMash/c4.jpg"
  
  import mainImg_4 from "@/assets/img/PicanteRojo/AjiPicanteRojo.jpg"
  import Mimg1_4   from "@/assets/img/PicanteRojo/AjiPicanteRojo2.jpg"
  import Mimg2_4   from "@/assets/img/PicanteRojo/3.jpg"
  import Mimg3_4   from "@/assets/img/PicanteRojo/4.jpg"
  
  import mainImg_5 from "@/assets/img/AjiAmarillo/Amarillo.png"
  import Mimg1_5   from "@/assets/img/AjiAmarillo/AjiAmarillo.jpg"
  import Mimg2_5   from "@/assets/img/AjiAmarillo/3.jpg"
  import Mimg3_5   from "@/assets/img/AjiAmarillo/4.jpg"
  
  import mainImg_6 from "@/assets/img/Pulpa/habanero/habaneroDespulpado.jpg"
  import Mimg1_6   from "@/assets/img/Pulpa/PastaHabanero.jpg"
  import Mimg2_6   from "@/assets/img/AjiHabaneroRojo/3.jpg"
  import Mimg3_6   from "@/assets/img/AjiHabaneroRojo/4.jpg"
  
  import mainImg_7 from "@/assets/img/PicanteRojo/AjiPicanteRojo.jpg"
  import Mimg1_7   from "@/assets/img/PicanteRojo/AjiPicanteRojo2.jpg"
  import Mimg2_7   from "@/assets/img/PicanteRojo/4.jpg"
  import Mimg3_7   from "@/assets/img/PicanteRojo/4.jpg"
  
  import mainImg_8 from "@/assets/img/DulceRojo/dulceRojo.png"
  import Mimg1_8   from "@/assets/img/DulceRojo/AjiDulceRojo.jpg"
  import Mimg2_8   from "@/assets/img/DulceRojo/2.jpg"
  import Mimg3_8   from "@/assets/img/DulceRojo/3.jpg"

  import mainImg_9 from "@/assets/img/Joloke/AjiJoloke.jpg"
  import Mimg1_9   from "@/assets/img/Joloke/2.jpg"
  import Mimg2_9   from "@/assets/img/Joloke/3.jpg"
  import Mimg3_9   from "@/assets/img/Joloke/4.jpg"
  
  import mainImg_101 from "@/assets/img/CayeneMash/p1.png"
  import Mimg1_101   from "@/assets/img/CayeneMash/p3.jpg"
  import Mimg2_101   from "@/assets/img/CayeneMash/c2.jpg"
  import Mimg3_101   from "@/assets/img/CayeneMash/p4.jpg"
  
  import mainImg_102 from "@/assets/img/AjiAmarillo/Amarillo.png"
  import Mimg1_102   from "@/assets/img/AjiAmarillo/AjiAmarillo.jpg"
  import Mimg2_102   from "@/assets/img/AjiAmarillo/3.jpg"
  import Mimg3_102   from "@/assets/img/AjiAmarillo/4.jpg"
  
  import mainImg_103 from "@/assets/img/Pulpa/habanero/habaneroDespulpado.jpg"
  import Mimg1_103   from "@/assets/img/Pulpa/PastaHabanero.jpg"
  import Mimg2_103   from "@/assets/img/AjiHabaneroRojo/3.jpg"
  import Mimg3_103   from "@/assets/img/AjiHabaneroRojo/4.jpg"
  
  import mainImg_104 from "@/assets/img/Joloke/AjiJoloke.jpg"
  import Mimg1_104   from "@/assets/img/Joloke/2.jpg"
  import Mimg2_104   from "@/assets/img/Joloke/3.jpg"
  import Mimg3_104   from "@/assets/img/Joloke/4.jpg"
  
  import mainImg_105 from "@/assets/img/Pulpa/pulpa1.jpg"
  import Mimg1_105   from "@/assets/img/Pulpa/pulpa.jpg"
  import Mimg2_105   from "@/assets/img/ajimashJalapenoVerde/ajv1.jpg"
  import Mimg3_105   from "@/assets/img/ajimashJalapenoVerde/ajv4.jpg"
  

  // Todas las imagenes aqui
  import { onMounted, ref, computed} from 'vue';

    // variables de los props
    const listCarrousel = ref([
      {
        img: "@/assets/img/ajimashJalapenoVerde/ajv4.jpg"
      }
    ]);
    const mainImg = ref('');
    const Mimg1 = ref('');
    const Mimg2 = ref('');
    const Mimg3 = ref('');
    const content = ref('');
    const especie = ref('');
    const scoville = ref('');
    const presentation = ref('');
    const vidaUtil = ref('');

    const props = defineProps({ 
      tittle:       { default: '',         type: String },
      caso:         { default: 0,          },
      content:      { default: '',         type: String },
      especie:      { default: '',         type: String },
      scoville:     { default: '',         type: String },
      presentation: { default: '',         type: String },
      vidaUtil:     { default: '',         type: String },
    });

  onMounted(() => {
    MountedPage();
  })

  function MountedPage(){
    console.log('valores de los props del caso mandado es:', props.caso);
    setTimeout(() => {
      switch ( parseInt(props.caso)) {
        case 1:
          mainImg.value   =   mainImg_01;
          Mimg1.value     =   Mimg2_01;
          Mimg2.value     =   Mimg1_01;
          Mimg3.value     =   Mimg3_01;
        break;
        
        case 2:
          mainImg.value   =   mainImg_2;
          Mimg1.value     =   Mimg1_2;
          Mimg2.value     =   Mimg2_2;
          Mimg3.value     =   Mimg3_2;
        break;
  
        case 3:
          mainImg.value   =   mainImg_3;
          Mimg1.value     =   Mimg1_3;
          Mimg2.value     =   Mimg2_3;
          Mimg3.value     =   Mimg3_3;
        break;
  
        case 4:
          mainImg.value   =   mainImg_4;
          Mimg1.value     =   Mimg1_4;
          Mimg2.value     =   Mimg2_4;
          Mimg3.value     =   Mimg3_4;
        break;
  
        case 5:
          mainImg.value   =   mainImg_5;
          Mimg1.value     =   Mimg1_5;
          Mimg2.value     =   Mimg2_5;
          Mimg3.value     =   Mimg3_5;
        break;
  
        case 6:
          mainImg.value   =   mainImg_6;
          Mimg1.value     =   Mimg1_6;
          Mimg2.value     =   Mimg2_6;
          Mimg3.value     =   Mimg3_6;
        break;
  
        case 7:
          mainImg.value   =   mainImg_7;
          Mimg1.value     =   Mimg1_7;
          Mimg2.value     =   Mimg2_7;
          Mimg3.value     =   Mimg3_7;
        break;

        case 8:
          mainImg.value   =   mainImg_8;
          Mimg1.value     =   Mimg1_8;
          Mimg2.value     =   Mimg2_8;
          Mimg3.value     =   Mimg3_8;
        break;

        case 9:
          mainImg.value   =   mainImg_9;
          Mimg1.value     =   Mimg1_9;
          Mimg2.value     =   Mimg2_9;
          Mimg3.value     =   Mimg3_9;
        break;
  
  
        case 101:
          mainImg.value   =   mainImg_101;
          Mimg1.value     =   Mimg1_101;
          Mimg2.value     =   Mimg2_101;
          Mimg3.value     =   Mimg3_101;
        break;
  
  
        case 102:
          mainImg.value   =   mainImg_102;
          Mimg1.value     =   Mimg1_102;
          Mimg2.value     =   Mimg2_102;
          Mimg3.value     =   Mimg3_102;
        break;
  
  
        case 103:
          mainImg.value   =   mainImg_103;
          Mimg1.value     =   Mimg1_103;
          Mimg2.value     =   Mimg2_103;
          Mimg3.value     =   Mimg3_103;
        break;
  
        case 104:
          mainImg.value   =   mainImg_104;
          Mimg1.value     =   Mimg1_104;
          Mimg2.value     =   Mimg2_104;
          Mimg3.value     =   Mimg3_104;
        break;
  
        case 105:
          mainImg.value   =   mainImg_105;
          Mimg1.value     =   Mimg1_105;
          Mimg2.value     =   Mimg2_105;
          Mimg3.value     =   Mimg3_105;
        break;
  
        default:
          mainImg.value   =   mainImg_01;
          Mimg1.value     =   Mimg1_01;
          Mimg2.value     =   Mimg2_01;
          Mimg3.value     =   Mimg3_01;
        break;
      }
      listCarrousel.value = [
        {
          img: Mimg1,
        },
        {
          img: Mimg2,
        },
        {
          img: Mimg2,
        }
      ]
    }, 200);
    // console.log("el caso mandado por props es:", props.caso)
    content.value   =   props.content;
    especie.value   =   props.especie;
    scoville.value  =   props.scoville;
    presentation.value  = props.presentation;
    vidaUtil.value  = props.vidaUtil;

  }

  import Router from "@/router/index.js"

  function Anterior() {

    Router.push(`/nuestrosAjisMash-QFT/${(parseInt(props.caso)-1)}`)
    setTimeout(() => {
      window.location.reload()
    }, 200);    
  }

  function Siguiente() {
    Router.push(`/nuestrosAjisMash-QFT/${(parseInt(props.caso)+1)}`)
    setTimeout(() => {
      window.location.reload()
    }, 200);
  }

</script>

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


<template>
  <section class="py-6">
    <div>

    </div>
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-6 col-md-12 col-12">
          <h3 id="subtittle"> Conoce: </h3>
          <br>
          <p class="justify-text-justify">
            {{props.content}}
          </p>
          <section>
            <div v-if="hancho>80" class="row justify-content-center">

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                
                <div class="info">
                  <img @key="Mimg1" :src="Mimg1" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info ">
                  <img @key="Mimg2" :src="Mimg2" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info">
                  <img @key="Mimg3" :src="Mimg3" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>
              
            </div>

            <div v-if="hancho<=80" class="row justify-content-center">

              <carousel :items-to-show="1" class="mt-lg-2">
                <slide v-for="item in listCarrousel" :key="item">
                  <div class="info">
                    <img @key="item.img" :src="item.img" class="img-fluid border-radius-lg" id="imgMash" />
                  </div>
                </slide>

                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
              
            </div>
          </section>  
            <div v-if="hancho>80" class="row align-items-center mt-5">
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img v-if="parseInt(props.caso)!=1 && parseInt(props.caso)!=101" @key="arrowI" :src="arrowI" class="img-fluid border-radius-lg" id="imgArrow" @click="Anterior"/>
              </div>
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img @key="brand" :src="brand" class="img-fluid border-radius-lg" id="imgIcon" />
              </div>
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img v-if="parseInt(props.caso)!=9 && parseInt(props.caso)!=105" @key="arrowD" :src="arrowD" class="img-fluid border-radius-lg" id="imgArrow" @click="Siguiente" />
              </div>
            </div>

            <div v-if="hancho<=80" class="row align-items-center mt-5">
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img v-if="parseInt(props.caso)!=1 && parseInt(props.caso)!=101" @key="arrowI" :src="arrowI" class="img-fluid border-radius-lg" id="imgArrowP" @click="Anterior"/>
              </div>
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img @key="brand" :src="brand" class="img-fluid border-radius-lg" id="imgIconP" />
              </div>
              <div class="col-lg-4 col-md-4 col-4 ms-auto mt-lg-0">
                <img v-if="parseInt(props.caso)!=9 && parseInt(props.caso)!=105" @key="arrowD" :src="arrowD" class="img-fluid border-radius-lg" id="imgArrowP" @click="Siguiente" />
              </div>
            </div>
        </div>

        <div class="col-lg-5 col-md-12 col-12 ms-auto mt-lg-0 mt-5">
          <section>
            <div class="card" id="card-position">
            <div class="card-header p-0 mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img @key="mainImg" :src="mainImg" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-bold">
                <a href="javascript:;" id="subtittle"> Datos Relevantes </a>
              </h5>
              <p class="mb-0" id="justifycontent">
                <span  class="font-weight-bold" id="subtittle"> Especie: </span>  {{props.especie}}
              </p>
              <br>
              <p class="mb-0" id="justifycontent">
                <span class="font-weight-bold" id="subtittle"> Scoville Unidades: </span> {{props.scoville}}
              </p>
              <br>
              <h6 class="font-weight-bold" id="subtittle">Composición:</h6>
              <p class="mb-0" id="justifycontent">
                •	{{props.tittle}}
              </p>
              <p class="mb-0" id="justifycontent">    
                •	Conservantes Naturales
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-bold" id="subtittle"> Presentación: </span> {{props.presentation}}
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-bold" id="subtittle"> Vida Util: </span> {{props.vidaUtil}}
              </p>
            </div>
          </div>
          </section>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  #subtittle{
    text-align: start;
    color: rgb(181, 21, 21);
  }

  #justifycontent{
    text-align: justify;
  }

  #imgMash{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    height: 220px;
    width: 220px;
  }

  #imgIcon{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    height: 150px;
    width: 150px;
  }

  #imgArrow{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    height: 50px;
    width: 50px;
  }

  #imgIconP{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    height: 80px;
    width: 80px;
  }

  #imgArrowP{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    height: 20px;
    width: 20px;
  }

  .FillHeight{
    width: 100%;
    height: 15px;
    margin-top:200px;
  }

  .justify-text-justify{
    text-align: justify;
    margin-bottom: 35px;
  }

  .carousel__prev, .carousel__next {
    width: 50px;
    height: 80px;
    text-align: center;
    font-size: 50px;
    padding: 0;
    color: grey;
  }

  .carousel__pagination-item {
    display: block;
    border: 0;
    margin: 0;
    cursor: pointer;
    padding: var(--vc-pgn-margin);
    color: grey;
  }

</style>