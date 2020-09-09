import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://www.reddit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           reddit
        </a>
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
