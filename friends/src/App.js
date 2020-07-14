import React from "react";
import FriendList from "./components/FriendList";
import LogIn from "./components/LogIn";

import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/Friends" component={FriendList} />
          <PrivateRoute path="/AddFriend" component={AddFriend} />
          <Route path="/login" component={LogIn} />
          <Route component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
