import './App.css';
import PacksPage from "./components/PacksPage"
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={PacksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
