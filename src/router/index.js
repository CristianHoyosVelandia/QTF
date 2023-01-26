import { createRouter, createWebHistory } from "vue-router";

import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
// Contactanos
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import ContatanosView from "../views/LandingPages/ContactUs/ContactanosView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";

//Materias Primas
import MateriasPrimasView from "../views/LandingPages/AboutUs/MateriasPrimasView.vue";
import ajimashJalaPeñoRojoMash from "../views/LandingPages/AboutUs/TipodeAjis/ajimashJalaPeñoRojoMash.vue";

//Vista de Ajis complete
import AjiMashDesc from "../views/LandingPages/AboutUs/TipodeAjis/AjiMashDesc.vue";


//Procesos
import ProcesosFab from "../layouts/sections/page-sections/features/ProcesosFab.vue";
import Noticias    from "../layouts/sections/page-sections/features/Noticias.vue";
import Ubicacion    from "../layouts/sections/page-sections/features/Ubicacion.vue";




import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
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
      path: "/nuestroProceso-QFT",
      name: "procesosFab",
      component: ProcesosFab,
    },

    {
      path: "/materias-primas-QFT",
      name: "Materias",
      component: MateriasPrimasView,
    },
    {
      path: "/nuestrosAjisJRM-QFT",
      name: "ajimashJalaPeñoRojoMash",
      component: ajimashJalaPeñoRojoMash,
    },

    {
      path: "/nuestrosAjisMash-QFT/:id",
      name: "NuestrosAjis",
      component: AjiMashDesc,
    },
    
    // END PATH PAGEs
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },

    {
      path: "/contacto-QFT",
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
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
  ],
});

export default router;
