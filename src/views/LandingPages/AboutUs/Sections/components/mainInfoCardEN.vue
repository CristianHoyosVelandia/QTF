<template>
    
  <section>
    <!-- class="pb-5 position-relative bg-gradient-dark mx-n3" -->
    <div class="card box-shadow-xl overflow-hidden mb-5">
      
      <div class="card-header">
        <a class="d-block blur-shadow-image">
          <img :src="srcimg" class="img-fluid border-radius-lg" />
        </a>
      </div>

      
      <div class="card-body text-center">
        <h5 class="font-weight-normal">
          <a href="javascript:;"> {{label}} </a>
        </h5>
        <p class="mb-0" id="justifycontent">
         {{desc1}}
        </p>
        <br>
        <p class="mb-0" id="justifycontent">
          {{desc2}} 
        </p>
        <RouterLink
          :to="{ name: 'contactUS' }"
        >
          <a  type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success">
            Learn More
          </a>
          
        </RouterLink>
      </div>

    </div>

  </section>
</template>


<script setup>
  import { onMounted, ref } from 'vue';


  // variables de los props
  const srcimg = ref(' ');
  const routerLink = ref(' ');
  const label = ref('name');
  const desc1 = ref('');
  const desc2= ref('');

  const props = defineProps({ 
    srcimg:       { default: 'name',         type: String },
    routerLink:   { default: 'hashtag',      type: String },
    label:        { default: 'name',         type: String },
    desc1:        { default: 'name',         type: String },
    desc2:        { default: 'name',         type: String },

  });

  onMounted(() => {
    // console.log('valores de los props:', props);
    srcimg.value      = props.srcimg
    routerLink.value  = props.routerLink
    label.value      =  props.label
    desc1.value      =  props.desc1
    desc2.value      =  props.desc2
  })

</script>
