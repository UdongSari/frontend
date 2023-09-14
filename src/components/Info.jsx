import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.scss";

export const Info = ({ icon, title, children }) => {
    return (
        <div className="info-container">
            <div className="info-icon">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            <div className="info-title">{title}</div>
            <div className="info-content">{children}</div>
        </div>
    );
};
