import React from "react";
import { Route, Redirect } from "react-router-dom";
import useApplication from "./hooks/useApplicationData";
// import { isLogin } from "../src/helpers/isLogIn";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { state } = useApplication();
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        state.loggedIn && restricted ? (
          // isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
