import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="My-AI-Image.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces for ReactJS Application <span className="heart">Using DevOps Deployments</span>
          This ReactJS App is deployed using Docker + Ansible Deployment and triggered via Jenkins CI/CD.
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
