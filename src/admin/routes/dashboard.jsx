// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import DashboardPage from "./../views/Dashboard/Dashboard.jsx";
import CriarCarta from "../views/Cartas/CriarCarta";
import ListaDeCartas from "../views/Cartas/ListaDeCartas";
import TableList from "./../views/TableList/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/criar-carta",
    sidebarName: "Criar carta",
    navbarName: "Criar carta",
    icon: Person,
    component: CriarCarta
  },
  {
    path: "/lista-de-cartas",
    sidebarName: "Lista de cartas",
    navbarName: "Lista de cartas",
    icon: Person,
    component: ListaDeCartas
  },
  {
    path: "/table",
    sidebarName: "Lista de cartas",
    navbarName: "Lista de cartas",
    icon: "content_paste",
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
