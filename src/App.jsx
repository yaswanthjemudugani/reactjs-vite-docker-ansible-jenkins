import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="My-AI-Image.png" className="App-logo" alt="logo" />
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
            href="https://github.com/yaswanthjemudugani"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github Profile
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
