<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "QTF Quality Tropical Foods SAS",
      logo: logoDark,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/CreativeTim/"
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com/creativetim"
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
      },
      {
        icon: '<i class="fab fa-whatsapp text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
      },
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "Nuestra Compañía",
        items: [
          {
            name: "Información General",
            href: "procesosFab"
          },
          {
            name: "Noticias",
            href: "procesosFab"
          },
          { name: "Certificaciones",
            href: "procesosFab" 
          }
        ]
      },
      {
        name: "Productos",
        items: [
          { name: "Productos Terminados", href: "procesosFab" },
          {
            name: "Contactanos",
            href: "procesosFab"
          },
          { name: "Recetas", href: "procesosFab" },
        ]
      },
      {
        name: "Experiencias",
        items: [
          {
            name: "Centros de Experiencia",
            href: "procesosFab"
          },
          {
            name: "Visitas Guiadas",
            href: "procesosFab"
          }
        ]
      }
    ]
  }
});
</script>

<template>
  <footer class="footer pt-4 mt-3" id="color">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-2 ms-auto">
          <center>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </center>
          
          <div >
            <ul class="d-flex flex-row ms-n3 nav" id="centerLinks">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-5 col-4 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <RouterLink class="nav-link" :to="{ name: item.href }">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Todos los derechos Reservados QFT SAS ©
              {{ new Date().getFullYear() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
 /* #color {
  background-color: red;
 } */

 #centerLinks {
  justify-content: center;
 }
</style>