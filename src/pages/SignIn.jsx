import "./SignIn.scss";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { setLogin, setLogout, counter } from "../modules/counter";

import { SignInThunk } from "../store/auth-slice";

export default function SignIn() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const handleIdChange = (event) => {
        const newValue = event.target.value;
        setIdValue(newValue);
        console.log("ID:" + newValue);
    };

    const handlePwChange = (event) => {
        setPwValue(event.target.value);
        console.log("PW:" + event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault(); // 이벤트의 기본 동작(새로고침) 막기
        dispatch(SignInThunk({ id: idValue, pw: pwValue }));
    };

    return (
        <div className="Login">
            <form className="input-outer" style={{ paddingLeft: "1.8rem" }}>
                <TextBlock />
                <br />
                <br />
                <Input handleIdChange={handleIdChange} handlePwChange={handlePwChange} />
                <br />
                <LoginBtn idValue={idValue} pwValue={pwValue} handleLogin={handleLogin} />
            </form>
        </div>
    );
}

const Input = ({ handleIdChange, handlePwChange }) => {
    return (
        <div className="input-container">
            <input id="id" type="text" placeholder="User name" onChange={handleIdChange} />
            <input id="pw" type="password" placeholder="Password" onChange={handlePwChange} />
        </div>
    );
};

const TextBlock = () => {
    return (
        <div>
            <strong className="login-title">Log In</strong>
            <div className="txt">로그인 후 우동사리를 더욱 편리하게 사용해보세요!</div>
        </div>
    );
};

const LoginBtn = ({ idValue, pwValue, handleLogin }) => {
    return (
        <div className="login-btn-container">
            <button className="login-btn" onClick={handleLogin}>
                로그인
            </button>
            <div className="small-txt">
                아직 계정이 없으신가요?{" "}
                <Link to="/auth/signUp" className="link-style">
                    회원가입
                </Link>
            </div>
        </div>
    );
};
