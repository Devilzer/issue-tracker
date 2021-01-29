import './style/App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>
          ProjectHub <i className="fas fa-project-diagram"></i>
        </h1>
      </div>
      <div className="nav-bar">
        <h3>
          Projects  <i className="fas fa-boxes"></i>
        </h3>
        <h3>
          Add Project  <i className="fas fa-plus-square"></i>
        </h3>
      </div>
    </div>
  );
}

export default App;
