<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

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


// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://api.whatsapp.com/send?phone=573125600426&text=Hola,Me encuentro interesado en tus productos.&source=&data=",
      color: "bg-gradient-success",
      label: "Free Download"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color = "text-dark";
  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
console.log('TextDark:' ,textDark.value)
const { type } = useWindowsWidth();
console.log('type:', type.value);
console.log('props from access->', props)
if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);

</script>


<template>
  
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    
    <div :class="
      props.transparent || props.light || props.dark
        ? 'container'
        : 'container-fluid px-0'
    ">
      
      <RouterLink class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3'
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="QTF Quality Tropical Foods SAS, expertos en Aj??"
        data-placement="bottom"
      >
        QTF Quality Tropical Foods SAS
      </RouterLink>
      
      <!-- Vamos aqui -->
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="QTF Quality Tropical Foods SAS, expertos en Aj??"
        data-placement="bottom"
      >
        QTF SAS
      </RouterLink>

      <a :href="action.route" class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"  id = 'icontheme' target="_blank">
        <i class="fab fa-whatsapp" id='icon'></i>
      </a>

      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>

      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">

          <!-- Nuestra Compa??ia -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a v-if="hancho>80"
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center" 
              :class="[
                (props.transparent && textDark.value) || !props.transparent
                  ? 'text-dark font-weight-bolder'
                  : 'text-white font-weight-bolder'
              ]"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md"
                :class="[
                  (props.transparent && textDark.value) || !props.transparent
                    ? 'text-dark font-weight-bolder ms-sm-3'
                    : 'text-white font-weight-bolder ms-sm-3'
                ]"> view_day </i>
                Nuestra Compa????a
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <a v-else
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center text-dark font-weight-bolder"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md text-dark font-weight-bolder ms-sm-3"> view_day </i>
                Nuestra Compa????a
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">

                  <!-- Informacion General -->
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Informaci??n General
                            </h6>
                            <span class="text-sm">Conoce nuestra historia</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        to="/nuestroProceso-QTF"
                      >
                        Proceso de Fabricacion
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        to="/Noticias"
                      >
                        Noticias
                      </RouterLink>
                    </div>
                  </li>

                  <!-- Centros de Distribuci??n -->
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <RouterLink
                            to="/Ubicacion"
                            >
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Centros de Distribuci??n
                              </h6>
                              <span class="text-sm"> ??Donde estamos? </span>
                            </RouterLink>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <!-- Publicaciones -->
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <RouterLink
                            to="/Publicaciones"
                            >
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Publicaciones
                            </h6>
                            </RouterLink>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <!-- Certificaciones -->
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Certificaciones
                            </h6>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        to="/HACPP"
                      >
                        HACCP
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12">

                  <RouterLink
                    class="dropdown-item ps-3 text-dark border-radius-md mt-3 mb-1"
                    :to="{ name: 'presentation' }"
                  >
                    Informaci??n General
                  </RouterLink>

                  <RouterLink
                    class="dropdown-item ps-3 text-dark border-radius-md mb-1"
                    :to="{ name: 'Noticias' }"
                  >
                    Noticias
                  </RouterLink>
                  
                  <RouterLink
                    class="dropdown-item ps-3 text-dark border-radius-md mb-1"
                    :to="{ name: 'Ubicacion' }"
                  >
                    Centros de Distribuci??n
                  </RouterLink>

                  <RouterLink
                    class="dropdown-item ps-3 text-dark border-radius-md mb-1"
                    :to="{ name: 'Noticias' }"
                  >
                    Publicaciones
                  </RouterLink>
                  
                  <RouterLink
                    class="dropdown-item ps-3 text-dark border-radius-md mb-1"
                    :to="{ name: 'presentation' }"
                  >
                    Certificaciones
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          
          <!--Productos-->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a v-if="hancho>80"
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="[
                (props.transparent && textDark.value) || !props.transparent
                  ? 'text-dark font-weight-bolder'
                  : 'text-white font-weight-bolder'
              ]"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md"
                :class="[
                  (props.transparent && textDark.value) || !props.transparent
                    ? 'text-dark font-weight-bolder'
                    : 'text-white font-weight-bolder'
                ]">
                search
              </i>
              Productos
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <a v-else
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center text-dark font-weight-bolder"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md text-dark font-weight-bolder ms-sm-3">
                search
              </i>
              Productos
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-1">
                  <div class="row">
                    <div class="position-relative">
                      
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Nuestros Productos y Sabores
                      </div>

                       <RouterLink
                        :to="{ name: 'Materias' }"
                        class="dropdown-item border-radius-md"
                        >
                          <span>Mash y Pulpas</span>
                        </RouterLink>
                        
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
                        Contactanos
                      </div>
                        <RouterLink
                          :to="{ name: 'contactanos' }"
                          class="dropdown-item border-radius-md"
                        >
                          <i id="material-icons">
                            message
                          </i>
                          <span> Escribenos </span>
                        </RouterLink>
                      <!-- <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Sign In</span>
                      </RouterLink> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- Que es aca tio -->
              <div class="d-lg-none">
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                >
                  Nuestros Productos y Sabores
                </div>
                <RouterLink
                  :to="{ name: 'Materias' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Productos Terminados</span>
                </RouterLink>

                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-1"
                >
                  Contactanos
                </div>

                <RouterLink
                  :to="{ name: 'contactanos' }"
                  class="dropdown-item border-radius-md"
                >
                  <i id="material-icons">
                    message
                  </i>
                  <span> Escribenos </span>
                </RouterLink>
              </div>
            </div>
          </li>
      
          <!-- Recetas -->
          <!-- <RouterLink
            to="/recetas"
            rel="tooltip"
            data-placement="bottom"
          >
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a
                class="nav-link ps-2 d-flex cursor-pointer align-items-center text-dark"
              >
                Recetas
              </a>
            </li>
          </RouterLink> -->

          

        </ul>

        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a :href="action.route" class="btn btn-sm mb-0" :class="action.color" onclick="smoothToPricing('pricing-soft-ui')" id = 'icontheme' target="_blank">
              <i class="fab fa-whatsapp" id='icon'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>


<style>

  #material-icons {
    font-family: 'Material Icons Round';
    font-weight: normal;
    font-style: normal;
    font-size: 12px;  /* Preferred icon size */
    line-height: 2;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  #icon {
    margin-top: 5px;
    font-size: 30px;
  }
  #icontheme {
    width: 55px;
    height: 55px;
    border-radius: 50px;
  }
</style>