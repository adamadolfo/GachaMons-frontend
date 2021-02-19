import './App.css';
import PacksPage from "./components/PacksPage"
import PackDetails from './components/PackDetails'
import AboutPage from './components/AboutPage'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/about' component={AboutPage} />
          <Route path='/details' component={PackDetails} />
          <Route exact path="/" component={PacksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
