import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightArrowLeft,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./ChatHistroy.scss";
import axios from "axios";

import { History } from "../components/History";
import { array } from "prop-types";

export const ChatHistory = () => {
  const { id } = useParams();
  const inputRef = useRef();
  const [history, setHistory] = useState([
    {
      type: "send",
      content: "보낸 대화",
    },
    {
      type: "recieve",
      content: "보낸 대화",
    },
  ]);

  const userName = "GUN";
  function filterDataByUserName(data, userName, roomId) {
    const filteredData = [];
    data.map((element) => {
      filteredData.push({
        type:
          userName === element.sender &&
          element.type === "TALK" &&
          roomId == chatRooms[1]
            ? "send"
            : "receive",
        content: element.message,
      });
    });
    return filteredData;
  }

  const [chatRooms, setChatRooms] = useState([]);

  // WebSocket 연결 생성
  const socket = new WebSocket("ws://localhost:8080/ws/chat");

  axios
    .get("http://localhost:8080/chat/")
    .then((response) => {
      // 요청 성공 시 데이터 처리
      const data = response.data;
      const filteredData = filterDataByUserName(data, userName);
      setHistory(filteredData);
      console.log("CHAT 을 가져옵니다.", filteredData);
    })
    .catch((error) => {
      // 요청 실패 시 에러 처리
      console.error("GET 요청 실패:", error);
    });

  // 연결이 열릴 때 실행되는 이벤트 핸들러
  // WebSocket 연결이 열렸을 때
  socket.addEventListener("open", (event) => {
    console.log("WebSocket 연결이 열렸습니다.");
    // 메시지를 서버로 보내기
    sendMessage(JSON.stringify(message));
  });

  // 메시지 수신 시 실행되는 이벤트 핸들러
  socket.addEventListener("message", (event) => {
    console.log("서버로부터 메시지 수신:", event.data);
  });

  // 에러 발생 시 실행되는 이벤트 핸들러
  socket.addEventListener("error", (event) => {
    console.error("WebSocket 오류:", event);
  });

  // 연결이 닫힐 때 실행되는 이벤트 핸들러
  socket.addEventListener("close", (event) => {
    console.log("WebSocket 연결이 닫혔습니다.");
  });

  const message = {
    type: "TALK",
    roomId: chatRooms[1],
    sender: "이수현",
    message: "리액트에서 전송 두번째",
    time: "0",
  };

  const imgSrc =
    "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg";
  const name = "김대건";
  const description = "회원 설명";

  function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
      // WebSocket이 연결되어 있고 열려 있는 경우
      console.log("메시지 전송:", message);
      socket.send(message);
      //   sendMessage(JSON.stringify(message));
    } else {
      console.error("WebSocket 연결이 열려있지 않습니다.");
    }
  }

  const createRoom = async () => {
    try {
      const response = await fetch("http://localhost:8080/chat/createRoom", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      const responseData = await response.json();
      console.log("방 생성 응답 데이터:", responseData);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  // 방 만들기 함수 호출
  createRoom();

  const handleClick = () => {
    //보내기
    setHistory([
      ...history,
      {
        type: "send",
        content: inputRef.current.value,
      },
    ]);
    sendMessage(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="chat-history-section">
      <div className="chat-history-profile">
        <div
          className="nav-aside-item"
          style={{
            paddingLeft: "20px",
            borderRadius: "0px",
          }}
        >
          <div className="nav-aside-item__img">
            <img src={imgSrc} alt="" width="60px" height="60px" />
          </div>

          <div className="nav-aside-item__text">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="chat-history-content">
        {history.map((element, index) => {
          return <History type={element.type}>{element.content}</History>;
        })}
      </div>

      <div className="chat-history-controller">
        <input type="text" className="chat-input" ref={inputRef} />
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
