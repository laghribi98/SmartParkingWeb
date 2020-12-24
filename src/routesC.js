import Blocs from "views/Blocs.js";
import Places from "views/Places.js";


var routes = [
    {
      path: "/blocs",
      name: "Gestion Blocs",
    component: Blocs,
      layout: "/admin"
    },
    {
      path: "/places",
      name: "Gestion Places",
    component: Places,
      layout: "/admin"
    }

]
export default routes;