import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Ping from "./ping/ping";
import Callback from "./Callback/Callback";
import Auth from "./auth/auth";
import history from "./history";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Drone from "./pages/Drone";
import Hurricane from "./pages/BlogPages/Hurricane";
import Tornado from "./pages/BlogPages/Tornado";
import EmergencyForm from "./pages/EmergencyForm/EmergencyForm";
import EmergencyMap from "./pages/EmergencyMap/EmergencyMap";


//Setting up page routing.  Determining which pages are displayed
//depending on users login status
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route path="/blog" render={props => <Blog auth={auth} {...props} />} />
        <Route path="/resource" render={props => <Resource auth={auth} {...props} />} />
        <Route path="/drone" render={props => <Blog auth={auth} {...props} />} />
        <Route path="/hurricane" render={props => <Blog auth={auth} {...props} />} />
        <Route path="/tornado" render={props => <Blog auth={auth} {...props} />} />

        <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Profile auth={auth} {...props} />
            )}
        />
        <Route
          path="/ping"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Ping auth={auth} {...props} />
            )}
        />
        <Route
          path="/EmergencyForm"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <EmergencyForm auth={auth} {...props} />
            )}
        />
        <Route
          path="/EmergencyMap"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <EmergencyMap auth={auth} {...props} />
            )}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
