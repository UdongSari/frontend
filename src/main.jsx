import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/globals.scss";

import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AnimatePresence>
            <App />
        </AnimatePresence>
    </BrowserRouter>
);
