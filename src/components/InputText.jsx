import React, { useState } from "react";
import "../pages/ResponseDetail.scss";

export default function InputText({ label, placeholder, value, onChange }) {
  const [themeInputValue, setThemeInputValue] = useState("");

  const handleThemeInputChange = (e) => {
    setThemeInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("테마 입력된 값:", themeInputValue);
    // 서버로 데이터 전송 또는 다른 작업 수행
  };

  return (
    <>
      <InputText
        label="사진 테마"
        placeholder=""
        value={themeInputValue}
        onChange={handleThemeInputChange}
      />
    </>
  );
}
