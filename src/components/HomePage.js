import React from "react";
import { Route, Redirect } from "react-router-dom";

const HomePage = () => {
  return (
    <Route exact path="/" render={() => (
      <Redirect to="/jobs" />
    )} />
  );
}

export default HomePage;

