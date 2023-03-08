<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import {useRoute} from "vue-router";
  //example components
  import DefaultNavbar from "../../../../examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "../../../../examples/footers/FooterDefault.vue";
  //image
  // import bg0 from "@/assets/img/bcgroundMaterias.png";
  import bg0  from "@/assets/img/chilop2.jpg";
  //dep
  import Typed from "typed.js";
  //sections
  import Contenido from "./sections/contenido.vue";

  const route = useRoute();
  const id = route.params.id;
  console.log('The id is: ' + id);

  const tittle = ref('')
  const contentido = ref('')
  const img = ref('')
  const ingredientes = ref([])
  const especie = ref('')
  const scoville = ref('')
  const presentation = ref('')
  const vidaUtil = ref('')
  const caso = ref(id);

  const body = document.getElementsByTagName("body")[0];
  //hooks
  onMounted(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    if (document.getElementById("typed")) {
      // eslint-disable-next-line no-unused-vars
      var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      });
    }
    routeParams(route.params.id)
  });

  onUnmounted(() => {
    body.classList.remove("about-us");
    body.classList.remove("bg-gray-200");
  });

  function routeParams(id)  {
    switch (parseInt(id)) {
      case 1:
        tittle.value = 'AJÍ JALAPEÑO ROJO MASH',
        contentido.value = 'El jalapeño es uno de los ajís más famosos, tiene presentación rojo o verde. La mayoría de los jalapeños son suaves, pero hay especies mucho más calientes. Este ají lleva el nombre de la ciudad mexicana de Jalapa. La gruesa pared frutal es difícil de secar y, por lo tanto, cuando están maduras, a menudo se secan y se ahúman sobre madera dura. Este producto se llama chipotle. El jalapeño tiene un sabor único. Los jalapeños se pueden usar frescos en salsas o cortados en aros para nachos y también son deliciosos en sopas, guisos y pizzas. A menudo se rellenan con carne o queso. Cuando está en estado verde, el jalapeño es bueno para comer y será un poco más dulce cuando esté rojo.',
        img.value = '',
        especie.value = 'Capsicum Annuum',
        scoville.value = '2.500 – 8.000',
        ingredientes.value = ["Mash ají jalapeño Rojo", "Ácido acético", "Sal"]
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 meses.'
        caso.value = 1
        break;
      case 2:
        tittle.value = 'AJÍ JALAPEÑO VERDE MASH'
        contentido.value = 'El jalapeño es uno de los ajís más famosos, tiene presentación rojo o verde. La mayoría de los jalapeños son suaves, pero hay especies mucho más calientes. Este ají lleva el nombre de la ciudad mexicana de Jalapa. La gruesa pared frutal es difícil de secar y, por lo tanto, cuando están maduras, a menudo se secan y se ahúman sobre madera dura. Este producto se llama chipotle. El jalapeño tiene un sabor único. Los jalapeños se pueden usar frescos en salsas o cortados en aros para nachos y también son deliciosos en sopas, guisos y pizzas. A menudo se rellenan con carne o queso. Cuando está en estado verde, el jalapeño es bueno para comer y será un poco más dulce cuando esté rojo.'
        img.value = ''
        especie.value = 'Capsicum Annuum'
        scoville.value = '2.500 – 8.000'
        ingredientes.value = ["Mash ají jalapeño verde", "Ácido acético", "Sal"]
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg'
        vidaUtil.value = '24 Meses'
        caso.value = 2
        break;

      case 3:
        
        tittle.value ='AJÍ CAYENNE ROJO MASH ',
        contentido.value = 'Los pimientos de cayena son un grupo de pimientos ahusados, de 10 a 25 cm de largo, generalmente delgados, mayoritariamente de color rojo, Normalmente es un ají moderadamente picante, a menudo con una punta curvada y una piel un poco ondulada, que cuelga del arbusto, los chiles se originaron en América del Sur, donde han estado bajo cultivo desde tiempos prehistóricos. La larga viabilidad de la semilla facilitó la rápida propagación de la planta a través de los trópicos y subtrópicos por los españoles y portugueses, el Cayenne es usado para fabricación de salsas, especia en la cocina, condimento en mesa, encurtidos, kétchups y alimentos ahumados.',
        img.value = '',
        especie.value = 'Capsicum annuum',
        scoville.value = '30.000 – 50.000',
        ingredientes.value = ["Mash ají Cayenne Rojo", "Ácido acético", "Sal"]
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 meses'
        caso.value = 3
        break;

      case 4:
        
        tittle.value ='AJÍ PICANTE ROJO MASH',
        contentido.value = 'Como todas las variedades de Capsicum Frutescens, la planta tiene un aspecto espeso. La planta puede crecer hasta 150 cm. Las vainas miden unos 4 cm. de largo y tienen un hábito erguido. Colorean de amarillo-verde o amarillo a rojo cuando están completamente maduros. Eso es después de unos 90 días después de trasplantar, este ají es originario del estado mexicano de Tabasco.',
        img.value = '',
        especie.value = 'Capsicum frutescens',
        scoville.value = '30.000 - 70.000',
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 meses '
        caso.value = 4
        break;

      case 5:
        
          tittle.value ='AJI AMARILLO PERUANO',
          contentido.value = 'Ají amarillo es una variedad de Capsicum nativo del Sur y Centro América donde se ha cultivado durante más de 7.000 años. Es considerado el ají más consumido en Perú y un insumo irremplazable de la cocina nacional. Este ají es cultivado en la costa, sierra y selva peruana hasta unos 1500 msnm en climas cálidos con temperaturas de entre 16 y 24ºC. Tiene un tamaño promedio de 10 a 15 centímetros de largo, 2 a 3,5 cm de ancho y forma cónica alargada, aunque uno de sus subtipos, el ají pacae o ají inca  puede llegar hasta los 22 o 25 centímetros y tener un mayor grosor.',
          img.value = '',
          especie.value = 'Capsicum baccatum.',
          scoville.value = '40.000 – 50.000',
          ingredientes.value = ["Mash ají Amarillo Peruano", "Ácido acético", "Sal"]
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 meses'
          caso.value = 5
        break;

      case 6:
        
          tittle.value ='AJÍ HABAERO ROJO MASH',
          contentido.value = 'El ají habanero es el ají más famoso del mundo. Este pimiento es extremadamente picante, 40 veces más picante que un jalapeño, y muy popular en México, América del Sur y el Caribe. El Habanero tiene una temporada de crecimiento de 90-100 días y ama las condiciones ambientales cálidas. Las vainas son arrugadas, de 5 cm de largo y 2,5 cm de diámetro y de color verde a rojo.',
          img.value = '',
          especie.value = 'Capsicum chinense.',
          scoville.value = '150,000 - 325,000',
          ingredientes.value = ["Mash ají picante rojo", "Ácido acético", "Sal"]
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 meses'
          caso.value = 6
        break;
      
      case 7:
          tittle.value ='AJÍ PICANTE ROJO MASH',
          contentido.value = 'Como todas las variedades de Capsicum Frutescens, la planta tiene un aspecto espeso. La planta puede crecer hasta 150 cm. Las vainas miden unos 4 cm. de largo y tienen un hábito erguido. Colorean de amarillo-verde o amarillo a rojo cuando están completamente maduros. Eso es después de unos 90 días después de trasplantar, este ají es originario del estado mexicano de Tabasco.',
          img.value = '',
          especie.value = 'Capsicum frutescens',
          scoville.value = '30.000 - 70.000',
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají jalapeño verde", "Ácido acético", "Sal"]
          vidaUtil.value = '24 meses '
          caso.value = 7
        break;

      case 8:
          tittle.value ='AJÍ ROJO DULCE',
          contentido.value = `Es una variedad llamada Grossum  de los pimientos de la familia Capsicum frutescens. 
          A diferencia de otras variedades de la especie, esta carece del característico sabor picante y en cambio 
          tiene un sabor más dulce.  
          
          Otras diferencias son que su cuerpo es más carnoso y que su forma no es similar a una vaina como otras variedades
          sino más cuadrada.  

          Es común que tengan colores Verde, Amarillos, Naranjas y Rojos. Esta coloración cambia en base a la maduración de 
          los pimientos, a través de la cual se incrementa su dulzor, así como la cantidad de Vitamina C y de Beta carotenos. 
          Por esta razón, cuanto más verde, menos dulce será su sabor. Este pimiento en estado seco se lo suele utilizar en 
          la elaboración de algunas variedades de pimentón.`,
          img.value = '',
          especie.value = 'Grossum Capsicum frutescens',
          scoville.value = '2.500 - 9.000',
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají jalapeño verde", "Ácido acético", "Sal"]
          vidaUtil.value = '24 meses '
          caso.value = 8
        break;
      
      case 9:
          tittle.value ='AJÍ NAGA JOLOKIA MASH',
          contentido.value = 'El Naga Jolokia es uno de los pimientos más picantes del mundo, Una gota de extracto de este pimiento necesita un millón de gotas de agua para que ya no se perciba como fuerte. ¡Este ají es 125 veces más picante que un jalapeño! Esta pimienta proviene del noreste de la India, particularmente de Assam, Nagaland y Manipur. Bhut Jolokia (o Naga Jolokia, Pimienta Fantasma) es dos veces más picante que el campeón anterior, la Savina Roja, y fue registrado en el Libro Guinness de los Récords como el pimiento más picante del mundo. Las plantas pueden crecer hasta 45-120 cm. Las vainas miden de 5 a 8,5 cm de largo y de 2,5 a 3 cm de ancho. El Bhut Jolokia ama el calor y la humedad, pero con un poco más de cuidado y amor crecerá bien en un clima más fresco. El tiempo de germinación es similar al de los chiles habaneros, por lo que tardará más que otros.',
          img.value = '',
          especie.value = 'Capsicum chinense',
          scoville.value = '800.000 - 1.001.300',
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají Naga jolokia ", "Ácido acético", "Sal"]
          vidaUtil.value = '24 meses '
          caso.value = 9
        break;
      
      case 101:
        tittle.value ='AJÍ CAYENNE ROJO DESPULPADO ',
        contentido.value = `Producto obtenido a partir de la molienda y despulpado de ají cayenne sin presencia de semillas, mezclado con sal y ácido acético de origen natural. Libre de material, colores y sabores no característicos. Este producto está desarrollado a las necesidades del mercado. Este producto es utilizado como ingrediente en preparación de salsas picantes, salsas y aderezos entre otras.`,
        img.value = '',
        especie.value = 'Capsicum annuum',
        scoville.value = '30.000 – 50.000',
        ingredientes.value = ["Mash ají Cayenne Rojo", "Ácido acético", "Sal"]
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 meses'
        caso.value = 101
      break;
      
      case 102:
          tittle.value ='AJÍ AMARILLO PERUANO DESPULPADO',
          contentido.value = `Producto obtenido a partir de la molienda de ají peruano amarillo, despulpado, sin semilla, 
                              mezclado con sal y ácido acético. Libre de material, colores y sabores no característicos.
                              Este producto está desarrollado a las necesidades del mercado.
                              Este producto es utilizado como ingrediente en preparación de salsas picantes, salsas y aderezos entre otras.
                              `,
          img.value = '',
          especie.value = 'Capsicum baccatum.',
          scoville.value = '40.000 – 50.000',
          ingredientes.value = ["Mash ají Amarillo", "Ácido acético", "Sal"]
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 meses'
          caso.value = 102
        break;
      
      case 103:
          tittle.value ='AJÍ HABANERO ROJO DESPULPADO',
          contentido.value = `Producto obtenido a partir de la molienda y despulpado de ají Habanero rojo 
                              sin presencia de semillas, mezclado con sal y ácido acético de origen natural. 
                              Libre de material, colores y sabores no característicos.
                              Este producto está desarrollado a las necesidades del mercado.
                              Este producto es utilizado como ingrediente en preparación de salsas picantes, 
                              salsas y aderezos entre otras.`,          
          img.value = '',
          especie.value = 'Capsicum chinense.',
          scoville.value = '150,000 - 325,000',
          ingredientes.value = ["Mash ají picante rojo", "Ácido acético", "Sal"]
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 meses'
          caso.value = 103
        break;
      
      case 104:
          tittle.value ='AJÍ NAGA JOLOKIA DESPULPADO',
          contentido.value = `Producto obtenido a partir de la molienda de ají picante rojo, despulpado, sin presencia de semillas,
                        mezclado con sal y ácido acético de origen natural. Libre de material, colores y sabores no característicos.
                        Este producto está desarrollado a las necesidades del mercado. Este producto es utilizado como ingrediente en 
                        preparación de salsas picantes, salsas y aderezos entre otras.
                        `,
          img.value = '',
          especie.value = 'Capsicum chinense',
          scoville.value = '800.000 - 1.001.300',
          presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají Naga jolokia ", "Ácido acético", "Sal"]
          vidaUtil.value = '24 meses '
          caso.value = 104
        break;    

      case 105:
        tittle.value ='AJÍ JALAPEÑO DESPULPADO (ROJO - VERDE)',
        contentido.value = `Producto obtenido a partir de la molienda de ají Jalapeño rojo y/o verde, despulpado, 
                            mezclado con sal y ácido acético. Libre de material, colores y sabores no característicos.
                            Este producto está desarrollado a las necesidades del mercado.
                            Este producto es utilizado como ingrediente en preparación de salsas picantes, salsas y aderezos entre otras.
                      `,
        img.value = '',
        especie.value = 'Capsicum Annuum'
        scoville.value = '2.500 – 8.000'
        ingredientes.value = ["Mash ají jalapeño verde", "Ácido acético", "Sal"]
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg'
        vidaUtil.value = '24 Meses'
        caso.value = 105
      break;

      default:
        tittle.value ='AJÍ PICANTE ROJO MASH',
        contentido.value = 'Como todas las variedades de Capsicum Frutescens, la planta tiene un aspecto espeso. La planta puede crecer hasta 150 cm. Las vainas miden unos 4 cm. de largo y tienen un hábito erguido. Colorean de amarillo-verde o amarillo a rojo cuando están completamente maduros. Eso es después de unos 90 días después de trasplantar, este ají es originario del estado mexicano de Tabasco.',
        img.value = '',
        especie.value = 'Capsicum frutescens',
        scoville.value = '30.000 - 70.000',
        presentation.value = 'Tambores por 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 meses '
        caso.value = 4
      break;
    }
  }
</script>

<template>

  <DefaultNavbar
    :action="{
      route: 'https://api.whatsapp.com/send?phone=573125600426&text=Hola&source=&data=',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-85"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <br>  
            <h1 class="text-white">
              {{tittle}}
              <!-- {{content}} -->
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Contenido 
      :tittle="tittle"
      :caso="caso"
      :content="contentido"
      :especie="especie"
      :scoville="scoville"
      :presentation="presentation"
      :vidaUtil="vidaUtil"
    /> 
  </div>
  <DefaultFooter />
</template>
