import './App.css';
import PacksPage from "./components/PacksPage"
import NavBar from "./components/NavBar"
import About from './components/About'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='about' component={About} />
          <Route exact path="/" component={PacksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
