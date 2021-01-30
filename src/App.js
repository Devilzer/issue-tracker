import './style/App.scss';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Home ,AddProject } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>
            ProjectHub <i className="fas fa-project-diagram"></i>
          </h1>
        </div>
        <div className="nav-bar">
          <Link to="/">
            <h3>
              Projects  <i className="fas fa-boxes"></i>
            </h3>
          </Link>
          <Link to="/addproject">
            <h3>
              Add Project  <i className="fas fa-plus-square"></i>
            </h3>
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addproject">
            <AddProject/>
          </Route>
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
