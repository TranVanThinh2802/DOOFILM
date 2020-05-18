import AllFilm from '../../containers/AllFilm'
import Features from '../../containers/Features'
import Film from '../../containers/Film'
import Home from '../../containers/Home'
import MyList from '../../containers/MyList'
import Seris from '../../containers/Seris'
import Shorsts from '../../containers/Shorsts'
import Shows from '../../containers/Shows'
import About from '../../containers/About'


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
        path: "/features",
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
        path: "Seris",
        component: Seris
    },
    {
        path: "/Shorsts",
        component: Shorsts
    },
    {
        path: "/Shows",
        component: Shows
    },
    {
        path: "/About",
        component: About
    }

  ];

  export default Router;