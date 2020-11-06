import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import withAuth  from "../hocs/WithAuth";
import HomePage from "../components/HomePage";
import { removeError } from "../store/actions/errors";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import JobTimeline from "../components/JobTimeline";
import JobPreview from "../containers/JobPreview";
import JobPostForm from "../components/JobPostForm";
import RequestForm from "../components/RequestForm";
import About from "../components/About";
import Blog from "../components/Blog";
import Dashboard from "./Dashboard";

 
const Main = props => {
  const { authUser, errors, removeError } = props;
  return (
    <Switch>
      <Route exact path="/signin" render={props => {
          return (
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              buttonText="Log in"
              heading="Welcome Back."
              {...props}
            />
          );
        }}
      />
      <Route exact path="/signup" render={props => {
          return (
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              signUp
              buttonText="Sign me up!"
              heading="Join KeyaJob today."
              {...props}
            />
          );
        }}
      />
      <Route exact path="/request/new" component={RequestForm} />
      <Route exact path="/jobs/new" component={withAuth(JobPostForm)} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/jobs" component={JobTimeline} />
      <Route exact path="/jobs/:id" component={JobPreview} />
      <Route exact path="/request/new" component={RequestForm} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/user/:userId/dashboard" component={Dashboard} />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));