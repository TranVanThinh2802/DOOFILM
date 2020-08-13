import {
  AllFilm,
  Features,
  UserLogin,
  Home,
  MyList,
  Seris,
  Shorsy,
  SlideShow,
  Show,
  About,
  Documents,
  PlayMovie,
  Admin,
  Login,
  ActionFilm,
  Register,
} from '../../containers';

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
    path: "/UserLogin",
    component: UserLogin,
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
    path: "/Film/:id",
    component: PlayMovie,
  },
  {
    path: "/Admin",
    component: Admin,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Action/:id",
    component: ActionFilm,
  },
  {
    path: "/Register",
    component: Register,
  },
];

export default Router;
