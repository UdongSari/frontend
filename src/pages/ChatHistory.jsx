import { useParams } from "react-router-dom";
import "./ChatHistroy.scss";

export const ChatHistory = () => {
    const { id } = useParams();

    return (
        <div className="chat-history-section">
            <div className="chat-history-profile"></div>

            <div className="chat-history-content"></div>

            <div className="chat-history-controller"></div>
        </div>
    );
};
