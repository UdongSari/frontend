import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faInfo } from "@fortawesome/free-solid-svg-icons";
import "./ChatHistroy.scss";

import { History } from "../components/History";

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

    const imgSrc =
        "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg";
    const name = "김대건";
    const description = "회원 설명";

    const handleClick = () => {
        setHistory([
            ...history,
            {
                type: "send",
                content: inputRef.current.value,
            },
        ]);
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
