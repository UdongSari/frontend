import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/globals.scss";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <AnimatePresence>
                    <App />
                </AnimatePresence>
            </BrowserRouter>
        </Provider>
    </CookiesProvider>
);
