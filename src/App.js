import './style/App.scss';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Home , AddProject, ProjectDetails} from "./components";
import { useSelector, useDispatch } from "react-redux";
import { updatePage,setCurrentProject} from "./redux/actions";

function App() {
  const page = useSelector(state => state.project.page);
  const currentProject = useSelector(state=>state.project.currentProject);
  const dispatch = useDispatch();
  var porjectClass="";
  var addClass="";
  var HomeElement;

  if(Object.keys(currentProject).length === 0 && currentProject.constructor === Object){
    HomeElement = <Home/>;
  }
  else{
    HomeElement = <ProjectDetails/>
  }

  if(page==="home"){
    porjectClass  = "selected";
    addClass="";
  }
  else{
    porjectClass  = "";
    addClass="selected";
  }

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
            <h3 className={porjectClass} onClick={()=>{
              dispatch(updatePage("home"));
              dispatch(setCurrentProject({}));
            }}>
              Projects  <i className="fas fa-boxes"></i>
            </h3>
          </Link>
          <Link to="/addproject">
            <h3 className={addClass} onClick={()=>dispatch(updatePage("addProduct"))}>
              Add Project  <i className="fas fa-plus-square"></i>
            </h3>
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            {HomeElement}
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
