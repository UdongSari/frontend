import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const ButtonGroup = ({ children, ...rest }) => {
    return (
        <div className="btn-group" {...rest}>
            {children}
        </div>
    );
};

export const Button = ({ type, children, width, height, ...rest }) => {
    if (type === "undefined") throw new Error("Button type prop 은 필수입니다");
    else if (type === "primary") {
        return (
            <button className="btn-primary btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    } else if (type === "secondary") {
        return (
            <button className="btn-secondary btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    } else if (type === "orange-filled") {
        return (
            <button className="btn-orange-filled btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    } else if (type === "orange-stroke") {
        return (
            <button className="btn-orange-stroke btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    } else if (type === "green-filled") {
        return (
            <button className="btn-green-filled btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    } else if (type === "green-stroke") {
        return (
            <button className="btn-green-stroke btn-default" style={{ width: width, height: height }} {...rest}>
                {children}
            </button>
        );
    }
};

export const InstaBtn = ({ link }) => {
    return (
        <a className="btn-primary btn-social btn-ig" target="_blank" rel="noreferrer noopener" href={link}>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    );
};

export const FacebookBtn = ({ link }) => {
    return (
        <a className="btn-primary btn-social btn-fb" target="_blank" rel="noreferrer noopener" href={link}>
            <FontAwesomeIcon icon={faFacebook} />
        </a>
    );
};

export const ButtonAdd = ({ link }) => {
    const navigate = useNavigate();
    return (
        <button className="btn-circle btn-add" onClick={navigate(link)}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
};
