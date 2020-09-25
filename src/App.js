import React from 'react';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-content">
            <a
              className="App-link"
              href="http://www.reddit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit
            </a>
        </div>
        <div className="center-content">
          <a
            className="App-link"
            href="http://www.inet.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inet
          </a>
        </div>
        <div className="right-content">
          <a
            className="App-link"
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </div>
      </header>
      <div className="content">
        <Clock/>
        <a
            className="App-link-content"
            href="http://www.netflix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            netflix
          </a>
          <Welcome name='Jokk'/>
      </div>
      <div className="bottom">
        <p>Bottom</p>
      </div>
    </div>
  );
}

export default App;
