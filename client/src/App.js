import React, { components } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//PAGES
import MainPage from "./views/Home/Home";
import FourOhFour from "./views/NotFound/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}

export default App;
