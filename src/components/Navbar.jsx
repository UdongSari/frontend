import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";

import { Button } from "./Button";

export const NavBar = ({ login }) => {
  const navigate = useNavigate();

  return (
    <nav className="nav-wrapper">
      <ul className="nav-container">
        <li>
          <Link to="/">UdongSari</Link>
        </li>

        <li>
          <Link to="/photo/response">찍어드려요</Link>
        </li>
        <li>
          <Link to="/photo/request">찍어주세요</Link>
        </li>
        <li>
          <Link to="/chat">채팅</Link>
        </li>

        <li style={{ flexGrow: "1" }} />

        <li>
          <Button type="orange-filled" onClick={() => navigate("/auth/signin")}>
            로그인
          </Button>
        </li>

        <li>
          <Button type="orange-stroke" onClick={() => navigate("/auth/signup")}>
            회원가입
          </Button>
        </li>
      </ul>
    </nav>
  );
};
