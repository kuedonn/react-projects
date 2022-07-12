import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
//import Body  from './components/index'
import Weather from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);

