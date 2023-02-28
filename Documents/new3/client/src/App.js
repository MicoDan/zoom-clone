import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Username from "./components/Username";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";

function App() {

  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact>
          <Username />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/password" exact>
          <Password />
        </Route>
        <Route path="/reset" exact>
          <Reset />
        </Route>
        <Route path="/recover" exact>
          <Recovery />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
