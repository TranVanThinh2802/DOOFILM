import AllFilm from "../../containers/AllFilm";
import Features from "../../containers/Features";
import Film from "../../containers/Film";
import Home from "../../containers/Home";
import MyList from "../../containers/MyList";
import Seris from "../../containers/Seris";
import Shorsy from "../../containers/Shorsy";
import Show from "../../containers/Show";
import About from "../../containers/About";
import Documents from "../../containers/Documents";
import PlayMovie from "../../containers/PlayMovie";
import Admin from "../../containers/Admin";
import { Route } from "react-router-dom";
import Add from "../../containers/Add";
import Remove from "../../containers/Remove";
import Fix from "../../containers/Fix";
import Login from "../../containers/Login";
import ListFilm from "../../containers/ListFilm";

const Router = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/all-film",
    component: AllFilm,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
  },
  {
    path: "/Features",
    component: Features,
  },
  {
    path: "/Film",
    component: Film,
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/MyList",
    component: MyList,
  },
  {
    path: "/Seris",
    component: Seris,
  },
  {
    path: "/Shorsy",
    component: Shorsy,
  },
  {
    path: "/Show",
    component: Show,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Documents",
    component: Documents,
  },
  {
    path: "/PlayMovie",
    component: PlayMovie,
  },
  {
    path: "/Admin",
    component: Admin,
    routes: [
        {
            path: "/",
            exact: true,
            component: Admin,
          },
      {
        path: "/Admin/Add/:id",
        exact: true,
        component: Add,
      },
      {
        path: "/Admin/Add",
        exact: true,
        component: Add,
      },
      {
        path: "/AdMin/Remove/:id",
        exact: true,
        component: Remove,
      },
      {
        path: "/AdMin/Fix/:id",
        exact: true,
        component: Fix,
      },
      {
        path: "/AdMin/ListFilm/:id",
        exact: true,
        component: ListFilm,
      },
    ],
  },
  {
    path: "/Login",
    component: Login,
  },
];

export default Router;
