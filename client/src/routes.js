// core components/views for Admin layout
import HomePage from "views/Home/Home.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const Routes = [
  {
    path: "/home",
    name: "Home",
    icon: Dashboard,
    component: HomePage,
    layout: "/main"
  }
];

export default Routes;
