import React from "react";
import * as ROUTES from "./constants/routes"; // you can add routes here!
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {NavbarContainer} from "./containers/navbar";
import AboutPage from './pages/about';
import BusinessesPage from "./pages/businesses";
import CriteriaPage from "./pages/criteria";
import Home from "./pages/home";


export default function App() {
  return (
    <div>
      <Router>
        <NavbarContainer/>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home/>
          </Route>
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.BUSINESSES} component={BusinessesPage} />
          <Route path={ROUTES.CRITERIA} component={CriteriaPage} />
          {/* Add routes here! */}
        </Switch>
      </Router>
    </div>
  );
}
