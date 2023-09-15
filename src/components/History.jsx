import "./History.scss";

export const History = ({ type, children }) => {
    return (
        <div className={`chat-history-item chat-${type}`}>
            <span>{children}</span>
        </div>
    );
};
