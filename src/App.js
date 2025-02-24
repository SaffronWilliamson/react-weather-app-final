import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      Weather app
      <footer>
        This project was coded by{' '}
        <a
          href="https://www.linkedin.com/in/saffron-williamson/"
          target="_blank"
          rel="noreferrer"
        >
          Saffron Williamson
        </a>
        , open sourced on{' '}
        <a
          href="https://github.com/SaffronWilliamson/react-weather-app-final"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{' '}
        <a
          href="https://react-weather-app-final.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
