import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';
import App from './App';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router history={history}>
      <App />
    </Router>
  </BrowserRouter>
);
