import React, { useState } from "react";
import "./ResponseDetail.scss";

function InputForm({ label, placeholder, value, onChange }) {
  return (
    <div>
      <span className="createPass-item-text ">{label}</span>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default function ResponseDetail() {
  const [themeInputValue, setThemeInputValue] = useState("");
  const [otherInputValue, setOtherInputValue] = useState("");

  const handleThemeInputChange = (e) => {
    setThemeInputValue(e.target.value);
  };

  const handleOtherInputChange = (e) => {
    setOtherInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("테마 입력된 값:", themeInputValue);
    console.log("기타 요청사항 입력된 값:", otherInputValue);
    // 서버로 데이터 전송 또는 다른 작업 수행
  };

  return (
    <>
      <div className="ResponseDetail-wrapper">
        <div className="ResponseDetail-container">
          <InputForm
            label="사진 테마"
            placeholder="테마 값을 입력하세요"
            value={themeInputValue}
            onChange={handleThemeInputChange}
          />
          <InputForm
            label="기타 요청사항"
            placeholder="기타 요청사항 값을 입력하세요"
            value={otherInputValue}
            onChange={handleOtherInputChange}
          />
        </div>
      </div>

      <button onClick={handleSubmit}>등록</button>
    </>
  );
}
