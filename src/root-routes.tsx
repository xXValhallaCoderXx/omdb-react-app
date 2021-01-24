import React from "react";

import { Route, Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { MovieDetail, MovieList, NotFound } from "./pages";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies">
          <MovieList />
        </Route>
        <Route exact path="/movies/:id" component={MovieDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
