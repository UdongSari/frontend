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
import { HOST } from "../utils/host";
import { History } from "../components/History";
import { array } from "prop-types";

import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";

export const ChatHistory = () => {
  useEffect(() => {
    console.log("component mount");
  }, []);

  const [socketOpened, setSocketOpened] = useState(false);
  const [clicked, setClicked] = useState(false);
  function handleButtonClick() {
    setClicked(!clicked);
  }
  const { id } = useParams();
  const params = useParams();
  console.log(params);
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

  const userName = "이수현";
  function filterDataByUserName(data, userName, roomId) {
    const filteredData = [];
    data.map((element) => {
      filteredData.push({
        type:
          userName === element.sender && element.type === "TALK"
            ? "send"
            : "receive",
        content: element.message,
      });
    });
    return filteredData;
  }

  const [chatRooms, setChatRooms] = useState([]);
  const [previousData, setPreviousData] = useState([]);
  const [socket, setSocket] = useState(null);

  const { status, token } = useSelector((state) => state.auth.signin);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  setCookie("token", token);
  console.log("Cookies", cookies);
  axios
    .get(`${HOST}/api/v1/user/joinRoom/1`, {
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    })
    .then((response) => {
      // 요청 성공 시 데이터 처리
      console.log("data");
      console.log(response.data);

      const newData = response.data.chatList;
      const filteredData = filterDataByUserName(newData, userName, id);
      console.log("CHAT 을 가져옵니다.", filteredData);
      setHistory(filteredData);
    })
    .catch((error) => {
      // 요청 실패 시 에러 처리
      console.error("GET 요청 실패:", error);
    });

  //   useEffect(() => {
  //     if (socket) {
  //       // WebSocket 연결이 열렸을 때
  //       socket.addEventListener("open", (event) => {
  //         console.log("WebSocket 연결이 열렸습니다.");
  //         setSocketOpened(true);
  //       });

  //       // 에러 발생 시
  //       socket.addEventListener("error", (event) => {
  //         console.error("WebSocket 오류:", event);
  //       });

  //       // 연결이 닫힐 때
  //       socket.addEventListener("close", (event) => {
  //         console.log("WebSocket 연결이 닫혔습니다.");
  //         setSocketOpened(false);
  //       });
  //     }
  //   }, [socket]);

  // ...

  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 WebSocket 연결을 열기
    const newSocket = new WebSocket(`ws://${HOST}/ws/chat`);
    setSocket(newSocket);

    // 컴포넌트가 언마운트될 때 WebSocket 연결 닫기
    return () => {
      if (newSocket) {
        newSocket.close();
        console.log("WebSocket 연결이 닫혔습니다.");
      }
    };
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 WebSocket 연결 열기
    const socket = new WebSocket(`ws://${HOST}/ws/chat`);

    socket.addEventListener("open", (event) => {
      console.log("WebSocket 연결이 열렸습니다.");
      setSocket(socket);
      setSocketOpened(true);
    });

    socket.addEventListener("error", (event) => {
      console.error("WebSocket 오류:", event);
    });

    return () => {
      // 컴포넌트가 언마운트될 때 WebSocket 연결 닫기
      if (socket) {
        socket.close();
        setSocketOpened(false);
        console.log("WebSocket 연결이 닫혔습니다.");
      }
    };
  }, []);

  //무한 렌더링 발생함
  useEffect(() => {
    if (socketOpened) {
      axios
        .get(`ws://${HOST}/ws/chat`)
        .then((response) => {
          // 요청 성공 시 데이터 처리
          const data = response.data;
          const filteredData = filterDataByUserName(data, userName, id);
          setHistory(filteredData);
          console.log("CHAT 을 가져옵니다.", filteredData);
        })
        .catch((error) => {
          // 요청 실패 시 에러 처리
          console.error("GET 요청 실패:", error);
        });
    }
  }, [clicked, socketOpened]);

  const imgSrc =
    "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg";
  const name = "김대건";
  const description = "회원 설명";

  function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
      // WebSocket이 연결되어 있고 열려 있는 경우
      const Dummymessage = {
        type: "TALK",
        roomId: id,
        sender: "이수현",
        message: message, // 매개변수로 받은 메시지 사용
        time: "0",
      };
      socket.send(JSON.stringify(Dummymessage));
      console.log(Dummymessage);
    } else {
      console.error("WebSocket 연결이 열려있지 않습니다.");
    }
  }

  //   const createRoom = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/chat/createRoom", {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({}),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
  //       }
  //       const responseData = await response.json();
  //       console.log("방 생성 응답 데이터:", responseData);
  //     } catch (error) {
  //       console.error("오류 발생:", error);
  //     }
  //   };

  // 방 만들기 함수 호출
  //   createRoom();

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
    handleButtonClick();

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
