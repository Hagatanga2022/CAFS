import StartPage from "../pages/StartPage.vue";
import Bolsistas from "../pages/Bolsistas.vue";
import Computadores from "../pages/Computadores.vue";
import Home from "../pages/Home.vue"
import Projetos from "../pages/Projetos.vue"
import Pesquisa from "../pages/Pesquisa.vue"
import ProjetosConcluidos from "../pages/ProjetosC.vue"
import Perfil from "../pages/Perfil.vue"

const routes = [
  {
    path: "/",
    component: () => import("../layouts/Blank.vue"),
    children: [
      {
        path: '',
        name: "StartPage",
        component: StartPage,
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/Default.vue"),
    children: [
      {
        path: "/bolsistas",
        name: "Bolsistas",
        component: Bolsistas,
      },
      {
        path: "/computadores",
        name: "Computadores",
        component: Computadores,
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/pesquisa",
        name: "Pesquisa",
        component: Pesquisa,
      },
      {
        path: "/projetos",
        name: "Projetos",
        component: Projetos,
      },
      {
        path: "/projetosc",
        name: "ProjetosC",
        component: ProjetosConcluidos,
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
