import React from 'react';
import Clock from './components/Clock';
import RouteTest from './components/RouteTest';
import './App.css';
import Location from './components/Location';

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
            href="https://www.webhallen.com/" //webhallen!
            target="_blank" 
            rel="noopener noreferrer"
          >
            Webhallen
          </a>
        </div>
      </header>
      <div className="content">
        <Clock/>
      </div>
      <div className="bottom">
        <RouteTest/>
      </div>
    </div>
  );
}

export default App;
