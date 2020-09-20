import React from 'react';
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
              reddit
            </a>
        </div>
        <div className="center-content">
          <p>Center</p>
        </div>
        <div className="right-content">
          <p>Right</p>
        </div>
      </header>
      <div className="content">
        <p>content</p>
      </div>
      <div className="bottom">
        <p>Bottom</p>
      </div>
    </div>
  );
}

export default App;
