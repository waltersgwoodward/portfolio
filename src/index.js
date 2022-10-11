import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App.js';

if (process.env.NODE_ENV === "production") {
    console.log = function () { };
}

ReactDOM.render(<App />, document.getElementById('root'));