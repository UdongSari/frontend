import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Photo from "../src/pages/Photo";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import Request from "../src/pages/Request";
import Response from "../src/pages/Response";
import Chat from "./pages/Chat";
import RequestDetail from "../src/pages/RequestDetail";

import { NavBar } from "./components/Navbar";
import { ChatHistory } from "./pages/ChatHistory";

export default function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/photo/request" element={<Request />} />
                <Route path="/photo/request/detail" element={<RequestDetail />} />
                <Route path="/photo/response" element={<Response />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/chat" element={<Chat />}>
                    <Route path=":id" element={<ChatHistory />}></Route>
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}
