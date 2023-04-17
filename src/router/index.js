import { createRouter, createWebHistory } from "vue-router";

import PresentationView from "../views/Presentation/PresentationView.vue";
import PresentationViewEN from "../views/Presentation/PresentationViewEN.vue";


// Contactanos
import ContatanosView from "../views/LandingPages/ContactUs/ContactanosView.vue";
import ContactUS from "../views/LandingPages/ContactUs/ContactanosViewEN.vue";

import AuthorView from "../views/LandingPages/Author/AuthorView.vue";

//Materias Primas
import MateriasPrimasView from "../views/LandingPages/AboutUs/MateriasPrimasView.vue";
import MateriasPrimasViewEN from "../views/LandingPages/AboutUs/MateriasPrimasViewEN.vue";


//Vista de Ajis complete
import AjiMashDesc from "../views/LandingPages/AboutUs/TipodeAjis/AjiMashDesc.vue";
import AjiMashDescEN from "../views/LandingPages/AboutUs/TipodeAjis/AjiMashDescEN.vue";



//Procesos
import ProcesosFab from "../layouts/sections/page-sections/features/ProcesosFab.vue";
import ProcesosFabEN from "../layouts/sections/page-sections/features/ProcesosFabEN.vue";

import Noticias    from "../layouts/sections/page-sections/features/Noticias.vue";
import News    from "../layouts/sections/page-sections/features/NoticiasEN.vue";

import Ubicacion    from "../layouts/sections/page-sections/features/Ubicacion.vue";
import ExperiencesCenters    from "../layouts/sections/page-sections/features/UbicacionEN.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/EN/",
      name: "presentationEN",
      component: PresentationViewEN,
    },
    // PATHS PAGES
    {
      path: "/nuestroProceso-QTF",
      name: "procesosFab",
      component: ProcesosFab,
    },

    {
      path: "/EN/ourProcess-QTF",
      name: "ourProcess",
      component: ProcesosFabEN,
    },

    {
      path: "/Noticias",
      name: "Noticias",
      component: Noticias,
    },

    {
      path: "/News",
      name: "News",
      component: News,
    },

    {
      path: "/materias-primas-QTF",
      name: "Materias",
      component: MateriasPrimasView,
    },

    {
      path: "/Raw-materials-QTF",
      name: "Raw-materials",
      component: MateriasPrimasViewEN,
    },

    {
      path: "/nuestrosAjis-QTF/:id",
      name: "NuestrosAjis",
      component: AjiMashDesc,
    },

    {
      path: "/ourChillies-QTF/:id",
      name: "ourChili",
      component: AjiMashDescEN,
    },
    
    // END PATH PAGEs
    {
      path: "/contacto-QTF",
      name: "contactanos",
      component: ContatanosView,
    },

    {
      path: "/contactUs-QTF",
      name: "contactUS",
      component: ContactUS,
    },
    
    {
      path: "/Publicaciones",
      name: "Publicaciones",
      component: Noticias,
    },

    {
      path: "/Ubicacion",
      name: "Ubicacion",
      component: Ubicacion,
    },

    {
      path: "/Location",
      name: "Location",
      component: ExperiencesCenters,
    },

    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
  ],
});

export default router;
