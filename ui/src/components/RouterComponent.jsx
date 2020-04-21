import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {ConnectedRouter} from "connected-react-router";

import LocationsPage from "../pages/LocationsPage";
import {history} from "../configureStore";
import HomePage from "../pages/HomePage";
import TournamentPage from "../pages/TournamentPage";
import CreateTournamentPage from "../pages/CreateTournamentPage";
import NotFoundPage from "../pages/NotFoundPage";
import NewLocationsPage from "../pages/NewLocationsPage";

class RouterComponent extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/locations/new"} component={NewLocationsPage} />
          <Route exact path={"/locations"} component={LocationsPage} />
          <Route exact path={"/tournaments/new"} component={CreateTournamentPage} />
          <Route exact path={"/tournaments/:id"} component={TournamentPage} />
          <Route exact path={"/404"} component={NotFoundPage} />
          <Redirect from={"*"} to={"/404"} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default RouterComponent;
