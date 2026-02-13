import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

// reportWebVitals(console.log);