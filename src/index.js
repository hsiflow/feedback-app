import React from 'react';

// import ReactDOM from 'react-dom'; // v18 以前的寫法
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// v18 以前的寫法
// ReactDOM.render(<h1>My App</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
