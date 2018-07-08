// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventsIcon from "@material-ui/icons/Event";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import AttachMoney from "@material-ui/icons/MonetizationOn";
import Group from "@material-ui/icons/Group";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views
import Events from '../events';
import Statistics from '../statistics';

const sidebarRoutes = [
  {
    path: "/app/statistics",
    sidebarName: "Statistics",
    navbarName: "eventec.io UI",
    icon: DashboardIcon,
    component: Statistics
  },
  {
    path: "/app/myevents",
    sidebarName: "My Events",
    navbarName: "My Events",
    icon: EventsIcon,
    component: Events,
    exact: true,
  },
  {
    path: "/app/budget",
    sidebarName: "Budgets",
    navbarName: "Budgets",
    icon: AttachMoney,
    component: Events,
    exact: true,
  },
  {
    path: "/app/team",
    sidebarName: "Team",
    navbarName: "Team",
    icon: Group,
    component: Events,
    exact: true,
  },
  { redirect: true, path: "/", to: "/app/routes-no-match-page", navbarName: "Redirect" }
];

export default sidebarRoutes;
