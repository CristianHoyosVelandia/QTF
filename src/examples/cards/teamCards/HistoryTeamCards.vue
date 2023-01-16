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
});
</script>

<template>
  <div class="card card-profile">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-6 mt-n4">
        <a :href="profile.link">
          <div class="p-2 pe-md-0">
            <img
              class="w-100 border-radius-md shadow-lg HistoryCardComponentImg"
              :src="image"
              :alt="profile.name"
            />
          </div>
        </a>
      </div>
      <div class="col-lg-9 col-md-8 col-6 my-auto">
        <div class="card-body ps-lg-0">
          <h5 class="mb-0">{{ profile.name }}</h5>
          <h6 :class="`text-${position.color}`">{{ position.name }}</h6>
          <p v-if="hancho>80" class="mb-0 textHistoryComponentc">
            {{ description }}
          </p>
        </div>
      </div>
      <div v-if="hancho<=80" class="col-lg-12 col-md-12 col-12 my-auto">
        <div class="card-body ps-lg-0">
          
          <p class="mb-0 textHistoryComponent">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  .textHistoryComponent {
    text-align: justify;
  }
  .HistoryCardComponentImg {
    min-height: 120px;
    max-height: 270px;

    border-radius: 25px;
    min-width: 150px;
    max-width: 300px;
  }
</style>