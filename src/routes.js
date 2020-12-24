/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Parametre from "views/Parametre.js";
import Parking from "views/Parking.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Blocs from "views/Blocs";
import Places from "views/Places";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/parking",
    name: "Parking",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Parking,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Reservations clients",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Paiements",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Statistiques",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Abonnements",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/paramtre",
    name: "Parametre",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Parametre,
    layout: "/admin"
  },
  {
    path: "/blocs",
    name: "Gestion Blocs",
  component: Blocs,
    layout: "/admin",
    invisible:true
  },
  {
    path: "/places",
    name: "Gestion Places",
  component: Places,
    layout: "/admin",
    invisible:true
  }
 
];


export default routes;

