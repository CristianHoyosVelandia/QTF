<script setup>
// example components
import CenteredBlogCardMP from "../../../../../examples/cards/blogCards/CenteredBlogCardMP.vue";
import mashImg from "@/assets/img/mash.png";
import img1 from "@/assets/img/ajimashJalapenoRojo/1.jpg";
import img2 from "@/assets/img/ajimashJalapenoRojo/2.jpg";
import img3 from "@/assets/img/ajimashJalapenoRojo/3.jpg";


</script>
<template>
  <section class="py-6">
    <div>

    </div>
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-6">
          <h3> Conoce: </h3>
          <br>
          <p>
            El jalapeño es uno de los ajís más famosos, tiene presentación rojo o verde. La mayoría de los jalapeños son suaves, pero hay especies mucho más calientes. Este ají lleva el nombre de la ciudad mexicana de Jalapa. La gruesa pared frutal es difícil de secar y, por lo tanto, cuando están maduras, a menudo se secan y se ahúman sobre madera dura. Este producto se llama chipotle. El jalapeño tiene un sabor único. Los jalapeños se pueden usar frescos en salsas o cortados en aros para nachos y también son deliciosos en sopas, guisos y pizzas. A menudo se rellenan con carne o queso. Cuando está en estado verde, el jalapeño es bueno para comer y será un poco más dulce cuando esté rojo.
          </p>
          <section>
            <div class="row justify-content-start">

              <div class="col-md-4">
                
                <div class="info">
                  <img :src="img1" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-md-4">
                <div class="info">
                  <img :src="img2" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>

              <div class="col-md-4">
                <div class="info">
                  <img :src="img3" class="img-fluid border-radius-lg" id="imgMash" />
                </div>
              </div>
              
            </div>
          </section>  
          <div class="FillHeight">

          </div>
        </div>

        <div class="col-lg-5 ms-auto mt-lg-0 mt-6">
          <section>
            <div class="card" id="card-position">
            <div class="card-header p-0 mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img :src="mashImg" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-normal">
                <a href="javascript:;"> Datos Relevantes </a>
              </h5>
              <p class="mb-0" id="justifycontent">
                <span  class="font-weight-normal" id="subtittle"> Especie: </span>  Capsicum Annuum
              </p>
              <br>
              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Scoville Unidades: </span> 2.500 – 8.000
              </p>
              <br>
              <h5 class="font-weight-normal" id="subtittle">Composición:</h5>
              <p class="mb-0" id="justifycontent">
                •	Mash ají jalapeño rojo
              </p>
              <p class="mb-0" id="justifycontent">    
                •	Conservantes Naturales
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Presentación: </span> Tambores por 20 kg, 50 kg, 200 kg, 220 kg.
              </p>
              <br>

              <p class="mb-0" id="justifycontent">
                <span class="font-weight-normal" id="subtittle"> Vida Util: </span> 24 meses.
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
    border-radius: 20px;
    height: 180px;
    width: 220px;
  }
  .FillHeight{
    width: 100%;
    height: 15px;
    margin-top:200px;
  }
</style>