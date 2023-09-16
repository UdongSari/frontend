import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HOST } from "../utils/host";

import "./Chat.scss";

import { NavAside } from "../components/Navbar";
import axios from "axios";

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [recentChat, setRecentChat] = useState("최근 채팅");
  const navigate = useNavigate();

  const handleChatItemClick = (roomId) => {
    console.log(roomId);
    navigate(`/chat/${roomId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/user/joinRoom/1`);
        setChatRooms(response.data);
        console.log(response.data);
        setRecentChat(chatRooms[0].roomId);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="chat-page">
      <NavAside.Container>
        <NavAside.Item
          name="김대건"
          recentChat={recentChat}
          imgSrc="https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
          onClick={() => {
            console.log("Clicked!");
            handleChatItemClick(chatRooms[0].roomId);
          }}
        />
      </NavAside.Container>
      <Outlet></Outlet>
    </main>
  );
}
