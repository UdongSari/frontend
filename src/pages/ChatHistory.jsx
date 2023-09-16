import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faInfo } from "@fortawesome/free-solid-svg-icons";
import "./ChatHistroy.scss";
import axios from "axios";
import { HOST } from "../utils/host";
import { History } from "../components/History";
import { array } from "prop-types";

import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";

export const ChatHistory = () => {
    const { id } = useParams();
    const { status, token } = useSelector((state) => state.auth.signin);
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [clicked, setClicked] = useState(false);
    function handleButtonClick() {
        setClicked(!clicked);
    }

    useEffect(() => {
        console.log("component mount");
        //joinRoom
        // setCookie("token", token);
        // console.log("Cookies", cookies);
    }, []);

    const [messaged, setMessaged] = useState("");
    const [socketOpened, setSocketOpened] = useState(false);
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
        console.log("data");
        console.log(data);
        data.map((element) => {
            filteredData.push({
                type: userName === element.sender && element.type === "TALK" && element.type != "ENTER" ? "send" : "receive",
                content: element.message,
            });
        });
        return filteredData;
    }

    const [chatRooms, setChatRooms] = useState([]);
    const [socket, setSocket] = useState(null);

    const onSocketOpen = () => {
        console.log("socket opened!");
    };

    const imgSrc =
        "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg";
    const name = "김대건";
    const description = "회원 설명";

    function sendMessage(message) {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const Dummymessage = {
                type: "TALK",
                roomId: id,
                sender: "이수현",
                message: message,
                time: "0",
            };
            setMessaged(Dummymessage);
            socket.send(JSON.stringify(Dummymessage));
            console.log("Dummymessage", Dummymessage);
        } else {
            console.error("WebSocket 연결이 열려있지 않습니다.");
        }
    }

    // WebSocket 연결을 열기 위한 함수
    const openWebSocketConnection = () => {
        const socket = new WebSocket(`ws://13.209.95.143:52038/ws/chat`);
        socket.addEventListener("open", () => {
            console.log("WebSocket 연결이 열렸습니다.");
            setSocket(socket); // WebSocket 객체를 state에 저장
            axios
                .get(`${HOST}/api/v1/user/joinRoom/1`, {
                    headers: {
                        Authorization: `Bearer ${cookies.token}`,
                    },
                })
                .then((response) => {
                    // 요청 성공 시 데이터 처리
                    console.log("data", response.data);

                    const newData = response.data.chatList;
                    const filteredData = filterDataByUserName(newData, userName, id);
                    console.log("CHAT 을 가져옵니다.", filteredData);
                    setHistory(filteredData);
                })
                .catch((error) => {
                    // 요청 실패 시 에러 처리
                    console.error("GET 요청 실패:", error);
                });
        });
        socket.addEventListener("error", (event) => {
            console.error("WebSocket 오류:", event);
        });
    };

    // 컴포넌트가 마운트될 때 WebSocket 연결 열기
    useEffect(() => {
        openWebSocketConnection();
    }, []);

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
                    }}>
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
