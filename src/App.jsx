import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="My-AI-Image.png" className="App-logo" alt="logo" />
        <p>
          I have taken the source code from GitHub Codespaces for this ReactJS Application.<br />
          The Docker image was built using a custom Dockerfile and deployed via an Ansible role.<br />
          The image was then pushed to AWS ECR using Ansible, and the container was launched from the ECR image using the same Ansible role.<br />
          This deployment pipeline was orchestrated and triggered via Jenkins CI/CD.
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://github.com/yaswanth00369"
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
