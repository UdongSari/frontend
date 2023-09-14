import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Button = ({ type, children, width, height, ...rest }) => {
  if (type === "undefined") throw new Error("Button type prop 은 필수입니다");
  else if (type === "primary") {
    return (
      <button
        className="btn-primary btn-default"
        style={{ width: width, height: height }}
        {...rest}
      >
        {children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className="btn-secondary btn-default"
        style={{ width: width, height: height }}
        {...rest}
      >
        {children}
      </button>
    );
  } else if (type === "orange-filled") {
    return (
      <button
        className="btn-orange-filled btn-default"
        style={{ width: width, height: height }}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export const InstaBtn = () => {
  return (
    <>
      <button
        className="btn-primary btn-default"
        style={{ width: "35px", height: "35px" }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </button>
    </>
  );
};

export const FacebookBtn = () => {
  return (
    <>
      <button
        className="btn-primary btn-default"
        style={{ width: "35px", height: "35px" }}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </button>
    </>
  );
};
