import React from "react";
import logo from "./hassan-avatar.png";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>🚀 ℌassan 𝔑azar 🚀</p>
        <a
          className="App-link"
          href="https://github.com/hassenasse"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/hassan-nazar-a53059a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
};

export default App;
