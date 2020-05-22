import AllFilm from '../../containers/AllFilm'
import Features from '../../containers/Features'
import Film from '../../containers/Film'
import Home from '../../containers/Home'
import MyList from '../../containers/MyList'
import Seris from '../../containers/Seris'
import Shorsy from '../../containers/Shorsy'
import Show from '../../containers/Show'
import About from '../../containers/About'
import Documents from '../../containers/Documents'


const Router = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/all-film",
      component: AllFilm
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
        component: Features
    },
    {
        path: "/Film",
        component: Film
    },
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/MyList",
        component: MyList
    },
    {
        path: "/Seris",
        component: Seris
    },
    {
        path: "/Shorsy",
        component: Shorsy
    },
    {
        path: "/Show",
        component: Show
    },
    {
        path: "/About",
        component: About
    },
    {
        path: "/Documents",
        component: Documents
    }

  ];

  export default Router;