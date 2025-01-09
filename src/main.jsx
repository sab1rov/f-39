import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/main.scss";
import App from "./App.jsx";


ReactDOM.createRoot(document.querySelector(".wrapper")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
