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
        <p>paragraph under header</p>
      </div>
    </div>
  );
}

export default App;
