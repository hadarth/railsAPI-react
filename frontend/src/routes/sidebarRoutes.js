// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventsIcon from "@material-ui/icons/Event";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
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
    component: Events
  },
  { redirect: true, path: "/", to: "/app/statistics", navbarName: "Redirect" }
];

export default sidebarRoutes;
