<script setup>
  // example components

  import mashImg from "@/assets/img/mash.png";
  import test from "../../../../../assets/img/mash.png";
  import img1 from "@/assets/img/ajimashJalapenoRojo/1.jpg";
  import img2 from "@/assets/img/ajimashJalapenoRojo/2.jpg";
  import img3 from "@/assets/img/ajimashJalapenoRojo/3.jpg";

  import { onMounted, ref, computed} from 'vue';
    
    function imageSrc(route) {
        return new URL(route, import.meta.url).href;
      }

    // variables de los props

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
      tittle:      { default: 'name',         type: String },
      mainImg:      { default: '@/assets/img/mash.png"',         type: String },
      Mimg1:        { default: '@/assets/img/mash.png"',         type: String },
      Mimg2:        { default: '@/assets/img/mash.png"',         type: String },
      Mimg3:        { default: '@/assets/img/mash.png"',         type: String },
      content:      { default: '',         type: String },
      especie:      { default: '@/assets/img/mash.png"',         type: String },
      scoville:     { default: '@/assets/img/mash.png"',         type: String },
      presentation: { default: '@/assets/img/mash.png"',         type: String },
      vidaUtil:     { default: '@/assets/img/mash.png"',         type: String },

    });

  onMounted(() => {
    // console.log('valores de los props:', props);
    mainImg.value   =   props.mainImg;
    Mimg1.value     =   props.Mimg1;
    Mimg2.value     =   props.Mimg2;
    Mimg3.value     =   props.Mimg3;
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
                  <img :src="imageSrc(props.Mimg1)" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info ">
                  <img :src="imageSrc(props.Mimg2)" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-lg-4 col-md-3 col-sm-12 col-12 mt-2">
                <div class="info">
                  <img :src="imageSrc(props.Mimg3)" class="img-fluid border-radius-lg" id="imgMash" />
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
                <img :src="imageSrc(props.mainImg)" class="img-fluid border-radius-lg" />
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