// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views
import DashboardPage from '../events';

const sidebarRoutes = [
  {
    path: "/app/statistics",
    sidebarName: "Statistics",
    navbarName: "eventec.io UI",
    icon: DashboardIcon,
    component: DashboardPage
  },
  {
    path: "/app/stam",
    sidebarName: "stam",
    navbarName: "stam title",
    icon: DashboardIcon,
    component: DashboardPage
  },
  { redirect: true, path: "/", to: "/app/statistics", navbarName: "Redirect" }
];

export default sidebarRoutes;
