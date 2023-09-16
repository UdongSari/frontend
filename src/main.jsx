import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/globals.scss";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import rootReducer from "./rootReducer.jsx"; // rootReducer의 실제 경로에 따라 수정

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer); // rootReducer를 사용하여 스토어 생성
console.log("redux 확인 " + JSON.stringify(store.getState()));

ReactDOM.createRoot(document.getElementById("root")).render(
    <CookiesProvider>
        <BrowserRouter>
            <Provider store={store}>
                <AnimatePresence>
                    <App />
                </AnimatePresence>
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
);
