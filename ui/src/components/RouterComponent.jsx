import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {ConnectedRouter} from "connected-react-router";

import LocationsPage from "../pages/LocationsPage";
import {history} from "../configureStore";
import HomePage from "../pages/HomePage";
import AddressPage from "../pages/AddressPage";
import TournamentPage from "../pages/TournamentPage";
import NotFoundPage from "../pages/NotFoundPage";
import NewLocationsPage from "../pages/NewLocationsPage";

class RouterComponent extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/addresses"} component={AddressPage} />
          <Route path={"/locations/new"} component={NewLocationsPage} />
          <Route path={"/locations"} component={LocationsPage} />
          <Route path={"/tournaments/:id"} component={TournamentPage} />
          <Route exact path={"/404"} component={NotFoundPage} />
          <Redirect from={"*"} to={"/404"} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default RouterComponent;
