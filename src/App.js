import './App.css';
import React from 'react'
import PacksPage from "./components/PacksPage"
import Teams from './components/Teams'
import AboutPage from './components/AboutPage'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";


function App() {
  const loggedIn = localStorage.getItem("user")
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/about' component={AboutPage} />
          <Route path='/teams' component={Teams} />
          <Route path='/packs-page' component={PacksPage} />
          <Route exact path="/welcome" component={Login} />
          <Route exact path="/">
          {loggedIn ? <Redirect to="/packs-page" /> : <Redirect to="/welcome" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
