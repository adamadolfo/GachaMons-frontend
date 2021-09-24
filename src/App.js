import './App.css';
import React from 'react'
import PacksPage from "./components/PacksPage"
import Teams from './components/Teams'
import AboutPage from './components/AboutPage'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/about' component={AboutPage} />
          <Route path='/details' component={Teams} />
          <Route exact path="/" component={PacksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
