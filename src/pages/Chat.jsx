import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HOST } from "../utils/host";
import "./Chat.scss";

import { NavAside } from "../components/Navbar";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [recentChat, setRecentChat] = useState("최근 채팅");
  const navigate = useNavigate();

  const { status, token } = useSelector((state) => state.auth.signin);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleChatItemClick = (roomId) => {
    console.log(roomId);
    navigate(`/chat/${roomId}`);
  };

  useEffect(() => {
    setCookie("token", token);
    console.log("Cookies", cookies);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/user/searchMyRoom`, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        console.log(response.data);
        if (response.data[0] == null) {
          const response = await axios.get(`${HOST}/api/v1/user/joinRoom/1`, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
        } else {
          console.log(response.data);
          const chatRoomIds = response.data[0].chatRoomId;
          console.log(chatRoomIds);
          setChatRooms(chatRoomIds);
          setRecentChat(chatRoomIds);
        }
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
            handleChatItemClick(chatRooms);
          }}
        />
      </NavAside.Container>
      <Outlet></Outlet>
    </main>
  );
}
