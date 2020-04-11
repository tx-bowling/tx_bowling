import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/addresses">
          <AddressPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
