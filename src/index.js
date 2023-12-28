import React from "react";
import App from "./app";
import { render } from "react-dom/client";
import './index.css'
import ReactDOM from 'react-dom';

const element = <App />;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);