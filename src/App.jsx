import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="ReactJS.png" className="App-logo" alt="logo" />
        <p>
          Source Code taken from GitHub Codespaces for ReactJS Application <span className="heart">Using DevOps Deployments</span><br />
          This ReactJS App is deployed using Docker + Ansible Deployment and triggered via Jenkins CI/CD.
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.verticurl.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Company
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
