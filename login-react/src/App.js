import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import LoginRedirect from './pages/LoginRedirect';
import Protected from './pages/Protected';
import Unauthorized from './pages/Unauthorized';
import authRequired from './HOCs/authRequired';

const App = () => {
  if (!process.env.REACT_APP_BACKEND_URL) {
    return <p>
        Please specify your backend url with the environment variable <b>REACT_APP_BACKEND_URL</b>.<br />
        <br />
        For example launch this app with: <b>REACT_APP_BACKEND_URL=http://localhost:1337 yarn start</b>
      </p>;
  }

  return (
    <Router>
        <Switch>
          <Route exact path="/connect/:providerName/redirect" component={LoginRedirect} />
          <Route exact path="/" component={Home} />
          <Route exact path="/protected" component={authRequired(Protected)} />
          <Route exact path="/unauthorized" component={Unauthorized} />
        </Switch>
    </Router>
  );
}

export default App;
