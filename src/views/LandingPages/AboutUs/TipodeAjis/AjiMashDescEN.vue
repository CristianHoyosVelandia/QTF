<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import {useRoute} from "vue-router";
  //example components
  import DefaultNavbar from "../../../../examples/navbars/NavbarDefault.vue";
  import DefaultFooter from "../../../../examples/footers/FooterDefault.vue";
  //image
  import bg0  from "@/assets/img/chilop2.jpg";
  //dep
  import Typed from "typed.js";
  //sections
  import Contenido from "./sections/contenidoEN.vue";

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
        tittle.value = 'RED CHILLIES (Jalapeño)',
        contentido.value = `The jalapeño is one of the most famous chili peppers, it has a red or green presentation. 
                            Most jalapeños are mild, but there are much hotter species. This chili pepper is named after 
                            the Mexican city of Jalapa. The thick fruit wall is difficult to dry and therefore when ripe 
                            they are often dried and smoked over hardwood. This product is called chipotle. 
                            The jalapeño has a unique flavor. Jalapenos can be used fresh in dips or cut into rings for nachos, 
                            and are also delicious in soups, stews, and pizza. They are often stuffed with meat or cheese. 
                            When green, the jalapeño is good to eat and will be a bit sweeter when red.`,
        img.value = '',
        especie.value = 'Capsicum Annuum',
        scoville.value = '2.500 – 8.000',
        ingredientes.value = ["Mash ají jalapeño Rojo", "Acetic acid", "Salt"]
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 months.'
        caso.value = 1
        break;
      case 2:
        tittle.value = "Green Chillies (Jalapeño)",
        contentido.value = `The jalapeño is one of the most famous chili peppers, it has a red or green presentation. 
                            Most jalapeños are mild, but there are much hotter species. This chili pepper is named after 
                            the Mexican city of Jalapa. The thick fruit wall is difficult to dry and therefore when ripe 
                            they are often dried and smoked over hardwood. This product is called chipotle. 
                            The jalapeño has a unique flavor. Jalapenos can be used fresh in dips or cut into rings for nachos, 
                            and are also delicious in soups, stews, and pizza. They are often stuffed with meat or cheese. 
                            When green, the jalapeño is good to eat and will be a bit sweeter when red.`,
        img.value = ''
        especie.value = 'Capsicum Annuum'
        scoville.value = '2.500 – 8.000'
        ingredientes.value = ["Mash ají jalapeño verde", "Acetic acid", "Salt"]
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg'
        vidaUtil.value = '24 Months'
        caso.value = 2
        break;

      case 3:
        
        tittle.value ='Red Chillies (Cayenne) ',
        contentido.value = `Cayenne peppers are a group of tapered peppers, 10 to 25 cm long, usually slender, mostly red in color. 
                            Usually a moderately hot chili pepper, often with a curved tip and slightly wavy skin, hanging from the Shrub, 
                            chiles originated in South America, where they have been under cultivation since prehistoric times. 
                            The long viability of the seed facilitated the rapid spread of the plant through the tropics and subtropics 
                            by the Spanish and Portuguese. Cayenne is used for making sauces, cooking spices, table seasoning, pickles, 
                            ketchups, and smoked foods.`,
        img.value = '',
        especie.value = 'Capsicum annuum',
        scoville.value = '30.000 – 50.000',
        ingredientes.value = ["Mash ají Cayenne Rojo", "Acetic acid", "Salt"]
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 months'
        caso.value = 3
        break;

      case 4:
        
        tittle.value ='Red Hot Chili Mash',
        contentido.value = `Like all varieties of Capsicum Frutescens, the plant has a bushy appearance. 
                            The plant can grow up to 150 cm. The pods measure about 4 cm. long and have an upright habit. 
                            They color from yellow-green or yellow to red when fully ripe. 
                            That's after about 90 days after transplanting, 
                            this chili pepper is native to the Mexican state of Tabasco.`,
        img.value = '',
        especie.value = 'Capsicum frutescens',
        scoville.value = '30.000 - 70.000',
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 months '
        caso.value = 4
        break;

      case 5:
        
          tittle.value ='Peruvian Yellow Chili Pepper',
          contentido.value = `Peruvian Yellow Chili Pepper is a variety of Capsicum native to South and Central America where it has been cultivated for over 7,000 years. 
                              It is considered the most consumed chili pepper in Peru and an irreplaceable ingredient 
                              in the national cuisine. This chili pepper is cultivated on the Peruvian coast, 
                              mountains and jungle up to about 1500 meters above sea level in warm climates 
                              with temperatures between 16 and 24ºC. 
                              It has an average size of 10 to 15 centimeters long, 2 to 3.5 cm wide and an 
                              elongated conical shape, although one of its subtypes, the pacae chili pepper or 
                              inca chili pepper can reach up to 22 or 25 centimeters and be thicker.`,
          img.value = '',
          especie.value = 'Capsicum baccatum.',
          scoville.value = '40.000 – 50.000',
          ingredientes.value = ["Mash ají Amarillo Peruano", "Acetic acid", "Salt"]
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 months'
          caso.value = 5
        break;

      case 6:
        
          tittle.value ='Habanero peppers',
          contentido.value = `The habanero pepper is the most famous pepper in the world. This pepper is extremely hot, 40 times hotter than a jalapeño, 
                              and very popular in Mexico, South America, and the Caribbean. The Habanero has a growing season of 90-100 days and loves 
                              warm environmental conditions. The pods are wrinkled, 5 cm long and 2.5 cm in diameter, and green to red in color.`,
          img.value = '',
          especie.value = 'Capsicum chinense.',
          scoville.value = '150,000 - 325,000',
          ingredientes.value = ["Mash ají picante rojo", "Acetic acid", "Salt"]
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 months'
          caso.value = 6
        break;
      
      case 7:
          tittle.value ='Red Hot Chili Mash',
          contentido.value = `Like all varieties of Capsicum Frutescens, the plant has a bushy appearance. The plant can grow up to 150 cm. 
                              The pods measure about 4 cm. long and have an upright habit. They color from yellow-green or yellow to red 
                              when fully ripe. That's after about 90 days after transplanting, this chili pepper is native to the Mexican 
                              state of Tabasco.`,
          img.value = '',
          especie.value = 'Capsicum frutescens',
          scoville.value = '30.000 - 70.000',
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají jalapeño verde", "Acetic acid", "Salt"]
          vidaUtil.value = '24 months '
          caso.value = 7
        break;

      case 8:
          tittle.value ='Sweet Red Chili',
          contentido.value = `It is a variety called Grossum of the peppers of the Capsicum frutescens family.
           Unlike other varieties of the species, this one lacks the characteristic spicy flavor and instead
           it tastes sweeter.
          
           Other differences are that its body is more fleshy and that its shape is not similar to a pod like other varieties.
           but more square.

           It is common for them to have Green, Yellow, Orange and Red colors. This coloration changes based on the maturation of
           peppers, through which its sweetness is increased, as well as the amount of Vitamin C and Beta carotene.
           For this reason, the more green, the less sweet its taste will be. This pepper in a dry state is usually used in
           the elaboration of some varieties of paprika.`,
          img.value = '',
          especie.value = 'Grossum Capsicum frutescens',
          scoville.value = '2.500 - 9.000',
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají jalapeño verde", "Acetic acid", "Salt"]
          vidaUtil.value = '24 months '
          caso.value = 8
        break;
      
      case 9:
          tittle.value ='Chili Naga Jolokia',
          contentido.value = `The Naga Jolokia is one of the hottest peppers in the world. A drop of extract from this pepper needs 
                              a million drops of water so that it is no longer perceived as strong. This chili is 125 times hotter 
                              than a jalapeno! This pepper comes from northeast India, particularly Assam, Nagaland, and Manipur. 
                              Bhut Jolokia (or Naga Jolokia, Ghost Pepper) is twice as hot as the previous champion, 
                              the Red Savina, and was recorded in the Guinness Book of Records as the hottest pepper in the world. 
                              The plants can grow up to 45-120 cm. The pods are 5-8.5 cm long and 2.5-3 cm wide. 
                              The Bhut Jolokia loves heat and humidity, 
                              but with a little more care and love it will do well in a cooler climate. 
                              The germination time is similar to habanero peppers, so it will take longer than others.`,
          img.value = '',
          especie.value = 'Capsicum chinense',
          scoville.value = '800.000 - 1.001.300',
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají Naga jolokia ", "Acetic acid", "Salt"]
          vidaUtil.value = '24 months '
          caso.value = 9
        break;
      
      case 101:
        tittle.value ='Pulped Red Chillies (Cayenne)',
        contentido.value = `Product obtained from the grinding and pulping of cayenne pepper without the presence of seeds, mixed with salt and acetic acid of natural origin. Free of uncharacteristic material, colors and flavors. This product is developed to market needs. This product is used as an ingredient in the preparation of spicy sauces, sauces and dressings, among others.`,
        img.value = '',
        especie.value = 'Capsicum annuum',
        scoville.value = '30.000 – 50.000',
        ingredientes.value = ["Mash ají Cayenne Rojo", "Acetic acid", "Salt"]
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 months'
        caso.value = 101
      break;
      
      case 102:
          tittle.value ='Pulped Peruvian Yellow Chili',
          contentido.value = `Product obtained from the grinding of yellow Peruvian chili, pulped, seedless,
                               mixed with salt and acetic acid. Free of uncharacteristic material, colors and flavors.
                               This product is developed to market needs.
                               This product is used as an ingredient in the preparation of spicy sauces, sauces and dressings, among others.
                              `,
          img.value = '',
          especie.value = 'Capsicum baccatum.',
          scoville.value = '40.000 – 50.000',
          ingredientes.value = ["Mash ají Amarillo", "Acetic acid", "Salt"]
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 months'
          caso.value = 102
        break;
      
      case 103:
          tittle.value ='Pulped Red Habanero Pepper',
          contentido.value = `Product obtained from the grinding and pulping of red Habanero peppers
                               without the presence of seeds, mixed with salt and acetic acid of natural origin.
                               Free of uncharacteristic material, colors and flavors.
                               This product is developed to market needs.
                               This product is used as an ingredient in the preparation of hot sauces,
                               sauces and dressings among others.`,          
          img.value = '',
          especie.value = 'Capsicum chinense.',
          scoville.value = '150,000 - 325,000',
          ingredientes.value = ["Mash ají picante rojo", "Acetic acid", "Salt"]
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          vidaUtil.value = '24 months'
          caso.value = 103
        break;
      
      case 104:
          tittle.value ='Pulped Naga Jolokia Chili Pepper',
          contentido.value = `Product obtained from the grinding of red chili peppers, pulped, without the presence of seeds,
                         mixed with salt and acetic acid of natural origin. Free of uncharacteristic material, colors and flavors.
                         This product is developed to market needs. This product is used as an ingredient in
                         preparation of hot sauces, sauces and dressings among others.
                        `,
          img.value = '',
          especie.value = 'Capsicum chinense',
          scoville.value = '800.000 - 1.001.300',
          presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
          ingredientes.value = ["Mash ají Naga jolokia ", "Acetic acid", "Salt"]
          vidaUtil.value = '24 months '
          caso.value = 104
        break;    

      case 105:
        tittle.value ='Pulped Jalapeño Pepper (Red - Green)',
        contentido.value = `Product obtained from the grinding of red and/or green Jalapeño peppers, pulped,
                             mixed with salt and acetic acid. Free of uncharacteristic material, colors and flavors.
                             This product is developed to market needs.
                             This product is used as an ingredient in the preparation of spicy sauces, sauces and dressings, among others.
                      `,
        img.value = '',
        especie.value = 'Capsicum Annuum'
        scoville.value = '2.500 – 8.000'
        ingredientes.value = ["Mash ají jalapeño verde", "Acetic acid", "Salt"]
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg'
        vidaUtil.value = '24 Months'
        caso.value = 105
      break;

      default:
        tittle.value ='AJÍ PICANTE ROJO MASH',
        contentido.value = 'Como todas las variedades de Capsicum Frutescens, la planta tiene un aspecto espeso. La planta puede crecer hasta 150 cm. Las vainas miden unos 4 cm. de largo y tienen un hábito erguido. Colorean de amarillo-verde o amarillo a rojo cuando están completamente maduros. Eso es después de unos 90 días después de trasplantar, este ají es originario del estado mexicano de Tabasco.',
        img.value = '',
        especie.value = 'Capsicum frutescens',
        scoville.value = '30.000 - 70.000',
        presentation.value = 'Drums by 20 kg, 50 kg, 200 kg, 220 kg.',
        vidaUtil.value = '24 months '
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
