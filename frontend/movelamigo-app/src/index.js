import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';
import CartState from './components/Cart/CartState';


ReactDOM.render(
  <>
    <Router>
      <CartState>
        <App />
      </CartState>
    </Router>
  </>
  ,
  document.getElementById('root')
);
