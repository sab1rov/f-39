import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import './assets/scss/sections/normalize.scss'

ReactDOM.createRoot(document.querySelector(".wrapper")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
