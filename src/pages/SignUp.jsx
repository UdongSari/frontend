import { useEffect, useState } from "react";
import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TextBlock = () => {
  return (
    <div style={{ paddingLeft: "1.8rem" }}>
      <strong className="login-title">Sign Up</strong>
      <div className="txt">
        회원가입 후 우동사리를 더욱 편리하게 사용해보세요!
      </div>
    </div>
  );
};

const Input = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value, () => {});
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className="input-container">
      <input
        id="id"
        type="text"
        placeholder="User email"
        className="input__item"
      />
      <input
        id="pw"
        type="password"
        placeholder="Password"
        className="input__item"
      />
      <input id="name" type="text" placeholder="Name" className="input__item" />
      <input id="age" type="text" placeholder="Age" className="input__item" />
      <input
        id="phone"
        type="text"
        placeholder="User Phone number"
        className="input__item"
      />
      {/* <input
        type="radio"
        value="사진가"
        checked={selectedOption === "사진가"}
        onChange={handleOptionChange}
      />
      저는 사진가입니다.
      <input
        type="radio"
        value="이용자"
        checked={selectedOption === "이용자"}
        onChange={handleOptionChange}
      />
      저는 이용자입니다. */}
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
    const nameValue = document.getElementById("name").value;
    const ageValue = document.getElementById("age").value;
    const phoneValue = document.getElementById("phone").value;
    const typeValue = "사진가?";

    const data = {
      username: idValue,
      password: pwValue,
      name: nameValue,
      age: ageValue,
      phoneNumber: phoneValue,
      roles: typeValue === "사진가" ? "ROLE_USER2" : "ROLE_USER", // 조건에 따라 역할 설정
    };

    console.log("서버야 받아라~~");
    console.log(data);

    // 서버로 회원가입 요청
    axios
      .post("http://13.125.37.219:8080/signup", {
        //백엔드랑 동일해야함
        username: idValue,
        password: pwValue,
        name: nameValue,
        age: ageValue,
        phoneNumber: phoneValue,
        roles: typeValue === "사진가" ? "ROLE_USER2" : "ROLE_USER", // 조건에 따라 역할 설정
      })
      //성공시 then 실행
      .then(function (response) {
        console.log(response.data);
        navigate("/home"); // 자동으로 페이지 이동
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
        <Link to="/auth/signIn" className="link-style">
          로그인
        </Link>
      </div>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="Login" style={{ marginTop: "100px" }}>
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
