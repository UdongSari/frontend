import React from "react";
import { Outlet } from "react-router-dom";

import "./Chat.scss";

import { NavAside } from "../components/Navbar";

export default function Chat() {
    return (
        <main className="chat-page">
            <NavAside.Container>
                <NavAside.Item
                    name="김대건"
                    recentChat="최근 대화 내용"
                    imgSrc="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
                />
                <NavAside.Item
                    name="김대건"
                    recentChat="최근 대화 내용"
                    imgSrc="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
                />
                <NavAside.Item
                    name="김대건"
                    recentChat="최근 대화 내용"
                    imgSrc="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
                />
            </NavAside.Container>
            <Outlet></Outlet>
        </main>
    );
}
