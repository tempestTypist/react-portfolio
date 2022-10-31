import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Routes>
        <Route exact path="/" component={<App />} />
      </Routes> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);