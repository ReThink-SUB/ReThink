import React, {useEffect, useState} from "react";
import * as ROUTES from "./constants/routes"; // you can add routes here!
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Team from './pages/team';
import Businesses from "./pages/businesses";

export default function App() {
  // fetch profiles json
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch("./profiles.json")
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              setData(data);
          })
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.TEAM} render={(...routerProps) => <Team {...routerProps} profiles={data}/>} />
        <Route path={ROUTES.BUSINESSES} component={Businesses} />
      </Switch>
    </Router>
  );
}
