<script setup>
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

defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  position: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card card-profile">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-12">
        <a :href="profile.link" target="blank">
          <div class="p-2 pe-md-0">
            <img
              class="UbicationCardComponentImg align-items-center"
              :src="image"
              :alt="profile.name"
            />
          <h5 class="mb-0 textUbicationComponent">{{ profile.name }}</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>

  .textUbicationComponent {
    text-align: center;
  }
  .UbicationCardComponentImg {
    margin: 5%;
    width: 90%;
    border-radius: 25px;
    position: relative;
  }
</style>