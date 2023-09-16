import { useState } from "react";
import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TextBlock = () => {
    return (
        <div style={{ paddingLeft: "1.8rem" }}>
            <strong className="login-title">Sign Up</strong>
            <div className="txt">회원가입 후 우동사리를 더욱 편리하게 사용해보세요!</div>
        </div>
    );
};

const Input = () => {
    return (
        <div className="input-container">
            <input id="id" type="text" placeholder="User name" />
            <input id="pw" type="password" placeholder="Password" />
        </div>
    );
};

const LoginBtn = () => {
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault(); // 이벤트의 기본 동작(새로고침) 막기

        // 변수에 인풋값 저장
        const idValue = document.getElementById("id").value;
        const pwValue = document.getElementById("pw").value;
        // const data = {
        //     id: idValue,
        //     pw: pwValue,
        // };

        // 서버로 회원가입 요청
        axios
            .post("http://13.125.37.219:8080/signup", {
                id: idValue,
                password: pwValue,
            })
            //성공시 then 실행
            .then(function (response) {
                console.log(response.data);
                navigate("/signup/complete"); // 자동으로 페이지 이동
            })
            //실패 시 catch 실행
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="login-btn-container">
            <button className="login-btn" onClick={handleSignup}>
                회원가입
            </button>
            <div className="small-txt">
                이미 계정이 있으신가요?{" "}
                <Link to="/login" className="link-style">
                    로그인
                </Link>
            </div>
        </div>
    );
};

const SignUp = () => {
    return (
        <div className="Login">
            <form className="input-outer">
                <TextBlock />
                <br />
                <br />
                <Input />
                <br />
                <LoginBtn />
            </form>
        </div>
    );
};

export default SignUp;
