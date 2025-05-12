import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './product';
import ProductCard from './productCard';
import Card1 from './card1';
import { Card2,Card3 } from './card1';
import Routerex from './routerex'
import Counter from './Counter'
import OnOff from './OnOff'; 
import NameChanger from './NameChanger'
import DelayedAlert from './DelayedAlert';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Routerex/>
    <OnOff/>
    <Counter/>
    <NameChanger/>
    <DelayedAlert/>
        
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
