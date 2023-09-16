import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./Chat.scss";

import { NavAside } from "../components/Navbar";
import axios from "axios";

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [recentChat, setRecentChat] = useState("최근 채팅");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/chat/AllRoom");
        setChatRooms(response.data);
        console.log(chatRooms);
        setRecentChat(chatRooms[0].roomId);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, [recentChat]);

  return (
    <main className="chat-page">
      <NavAside.Container>
        <NavAside.Item
          name="김대건"
          recentChat={recentChat}
          imgSrc="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
        />
      </NavAside.Container>
      <Outlet></Outlet>
    </main>
  );
}
