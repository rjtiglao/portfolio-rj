import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./index.css";

//PAGES
import MainPage from "./views/Home/Home";
import TechnologyPage from "./views/Technology/Technology";
import DevelopmentPage from "./views/Development/Development";
import AboutMePage from "./views/AboutMe/AboutMe";
import ProjectPage from "./views/Projects/Projects";
import FourOhFour from "./views/NotFound/404";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/technology" component={TechnologyPage} />
          <Route exact path="/development" component={DevelopmentPage} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/projects" component={ProjectPage} />
          {/* If user routes to anything other than the routes above, it will route to 404 page */}
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
