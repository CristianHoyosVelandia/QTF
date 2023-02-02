<script setup>
  // Importar imagenes aqui

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
  
  import mainImg_9 from "@/assets/img/Joloke/AjiJoloke.jpg"
  import Mimg1_9   from "@/assets/img/Joloke/2.jpg"
  import Mimg2_9   from "@/assets/img/Joloke/3.jpg"
  import Mimg3_9   from "@/assets/img/Joloke/4.jpg"
  
  import mainImg_101 from "@/assets/img/CayeneMash/c1.jpg"
  import Mimg1_101   from "@/assets/img/CayeneMash/c2.jpg"
  import Mimg2_101   from "@/assets/img/CayeneMash/c3.jpg"
  import Mimg3_101   from "@/assets/img/CayeneMash/c4.jpg"
  
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
      tittle:       { default: 'name',         type: String },
      caso:         { default: 0,              type: Number},
      content:      { default: '',         type: String },
      especie:      { default: '@/assets/img/mash.png"',         type: String },
      scoville:     { default: '@/assets/img/mash.png"',         type: String },
      presentation: { default: '@/assets/img/mash.png"',         type: String },
      vidaUtil:     { default: '@/assets/img/mash.png"',         type: String },
    });

  onMounted(() => {
    console.log('valores de los props del caso mandado es:', props.caso);
    setTimeout(() => {
      switch (props.caso) {
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
    }, 200);
    // console.log("el caso mandado por props es:", props.caso)
    content.value   =   props.content;
    especie.value   =   props.especie;
    scoville.value  =   props.scoville;
    presentation.value  = props.presentation;
    vidaUtil.value  = props.vidaUtil;
  })

</script>

<template>
  <section class="py-6">
    <div>

    </div>
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-6 col-md-12 col-12">
          <h3> Conoce: </h3>
          <br>
          <p class="justify-text-justify">
            {{props.content}}
          </p>
          <section>
            <div class="row justify-content-center">

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                
                <div class="info">
                  <img :src="Mimg1" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info ">
                  <img :src="Mimg2" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info">
                  <img :src="Mimg3" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>
              
            </div>
          </section>  
          <div class="FillHeight">

          </div>
        </div>

        <div class="col-lg-5 col-md-12 col-12 ms-auto mt-lg-0 mt-5">
          <section>
            <div class="card" id="card-position">
            <div class="card-header p-0 mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img :src="mainImg" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-normal">
                <a href="javascript:;"> Datos Relevantes </a>
              </h5>
              <p class="mb-0" id="justifycontent">
                <span  class="font-weight-normal" id="subtittle"> Especie: </span>  {{props.especie}}
              </p>
              <br>
              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Scoville Unidades: </span> {{props.scoville}}
              </p>
              <br>
              <h5 class="font-weight-normal" id="subtittle">Composición:</h5>
              <p class="mb-0" id="justifycontent">
                •	{{props.tittle}}
              </p>
              <p class="mb-0" id="justifycontent">    
                •	Conservantes Naturales
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Presentación: </span> {{props.presentation}}
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Vida Util: </span> {{props.vidaUtil}}
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
    color: black;
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
  .FillHeight{
    width: 100%;
    height: 15px;
    margin-top:200px;
  }

  .justify-text-justify{
    text-align: justify;
    margin-bottom: 35px;
  }
</style>