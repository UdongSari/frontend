import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Photo from "../src/pages/Photo";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import Request from "../src/pages/Request";
import Response from "../src/pages/Response";

import { NavBar } from "./components/Navbar";

export default function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/photo/request" element={<Request />} />
                <Route path="/photo/response" element={<Response />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}
