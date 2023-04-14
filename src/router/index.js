import { createRouter, createWebHistory } from "vue-router";

import PresentationView from "../views/Presentation/PresentationView.vue";
// Contactanos
import ContatanosView from "../views/LandingPages/ContactUs/ContactanosView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";

//Materias Primas
import MateriasPrimasView from "../views/LandingPages/AboutUs/MateriasPrimasView.vue";

//Vista de Ajis complete
import AjiMashDesc from "../views/LandingPages/AboutUs/TipodeAjis/AjiMashDesc.vue";


//Procesos
import ProcesosFab from "../layouts/sections/page-sections/features/ProcesosFab.vue";
import Noticias    from "../layouts/sections/page-sections/features/Noticias.vue";
import Ubicacion    from "../layouts/sections/page-sections/features/Ubicacion.vue";
import RecetasView from '../views/Recetas/RecetasView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    // PATHS PAGES
    {
      path: "/recetas",
      name: "recetas",
      component: RecetasView,
    },
    {
      path: "/nuestroProceso-QTF",
      name: "procesosFab",
      component: ProcesosFab,
    },

    {
      path: "/materias-primas-QTF",
      name: "Materias",
      component: MateriasPrimasView,
    },

    {
      path: "/nuestrosAjisMash-QTF/:id",
      name: "NuestrosAjis",
      component: AjiMashDesc,
    },
    
    // END PATH PAGEs
    {
      path: "/contacto-QTF",
      name: "contactanos",
      component: ContatanosView,
    },
    {
      path: "/Noticias",
      name: "Noticias",
      component: Noticias,
    },
    {
      path: "/Publicaciones",
      name: "Publicaciones",
      component: Noticias,
    },
    {
      path: "/HACPP",
      name: "Certificaciones-HACPP",
      component: Noticias,
    },
    {
      path: "/Ubicacion",
      name: "Ubicacion",
      component: Ubicacion,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
  ],
});

export default router;
