import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';


import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';
import LocationsPage from './pages/LocationsPage';
import NotFoundPage from './pages/NotFoundPage';
import configureStore, { history } from './configureStore';


function App() {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/addresses"} component={AddressPage} />
          <Route path={"/locations"} component={LocationsPage} />
          <Route exact path={"/404"} component={NotFoundPage} />
          <Redirect from={"*"} to={"/404"} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
