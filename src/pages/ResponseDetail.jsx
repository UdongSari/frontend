import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResponseDetail.scss";
import { HashTag } from "../components/HashTag";
import { Button } from "../components/Button";
import { DropDown } from "../components/Dropdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";

function InputForm({ label, placeholder, value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value); // 입력 값 업데이트를 부모 컴포넌트로 전달
  };

  return (
    <div>
      <span className="createPass-item-text">{label}</span>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default function ResponseDetail() {
  const navigate = useNavigate();

  const [regionInputValue, setRegionInputValue] = useState("");
  const [themeInputValue, setThemeInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState("");
  const [requestInputValue, setRequestInputValue] = useState("");
  const [start, onStartChange] = useState(new Date());
  const [end, onEndChange] = useState(new Date());

  const [si, setSi] = useState({ index: -1, value: "시" });
  const [gu, setGu] = useState({ index: -1, value: "군 / 구" });
  const [theme, setTheme] = useState({ index: -1, value: "테마" });
  const [sort, setSort] = useState({ index: -1, value: "정렬" });

  // const handleRegionInputChange = (value) => {
  //   setRegionInputValue(value);
  // };

  // const handleThemeInputChange = (value) => {
  //   setThemeInputValue(value);
  // };

  // const handleDateInputChange = (value) => {
  //   setDateInputValue(value);
  // };

  const handlePriceInputChange = (value) => {
    setPriceInputValue(value);
  };

  const handleRequestInputChange = (value) => {
    setRequestInputValue(value);
  };

  const handleSubmit = () => {
    console.log("지역 입력된 값:", si.value + gu.value);
    console.log("테마 입력된 값:", theme.value);
    console.log("날짜 입력된 값:", start, end);
    console.log("금액 입력된 값:", priceInputValue);
    console.log("기타 요청사항 입력된 값:", requestInputValue);
    navigate("/photo/response");
  };

  // 날짜를 원하는 형식으로 포맷하는 함수
  function formatDateToCustomFormat(date) {
    return moment(date).format("YYYY-MM-DD"); // 원하는 형식으로 포맷 지정
  }

  return (
    <>
      <div className="ResponseDetail-wrapper">
        <div className="ResponseDetail-container">
          <span className="region-select-field detailtext">지역</span>
          <div className="region-select-field">
            <DropDown.Container get={si} set={setSi}>
              <DropDown.Item>대구광역시</DropDown.Item>
            </DropDown.Container>

            <DropDown.Container get={gu} set={setGu}>
              <DropDown.Item>중구</DropDown.Item>
              <DropDown.Item>동구</DropDown.Item>
              <DropDown.Item>서구</DropDown.Item>
              <DropDown.Item>남구</DropDown.Item>
              <DropDown.Item>북구</DropDown.Item>
              <DropDown.Item>수성구</DropDown.Item>
              <DropDown.Item>달서구</DropDown.Item>
              <DropDown.Item>달성군</DropDown.Item>
              <DropDown.Item>군위군</DropDown.Item>
            </DropDown.Container>
          </div>

          <div className="theme-select-field">
            <span className="region-select-field detailtext">사진 테마</span>
            <DropDown.Container get={theme} set={setTheme}>
              <DropDown.Item>피팅모델</DropDown.Item>
              <DropDown.Item>댄서</DropDown.Item>
              <DropDown.Item>배우</DropDown.Item>
              <DropDown.Item>프로필</DropDown.Item>
              <DropDown.Item>매거진</DropDown.Item>
              <DropDown.Item>필라테스</DropDown.Item>
              <DropDown.Item>스냅사진</DropDown.Item>
              <DropDown.Item>브랜드</DropDown.Item>
              <DropDown.Item>풍경</DropDown.Item>
            </DropDown.Container>
          </div>

          <span className="region-select-field detailtext">날짜</span>
          <div className="date-select-field">
            <Calendar onChange={onStartChange} value={start} />
            <Calendar onChange={onEndChange} value={end} />
          </div>
          <div className="text-gray-500 mt-4">
            <p>
              시작 날짜: {formatDateToCustomFormat(start)} ~ 종료 날짜:{" "}
              {formatDateToCustomFormat(end)}{" "}
            </p>
          </div>

          <InputForm
            label="금액"
            placeholder="값을 입력하세요"
            value={priceInputValue}
            onChange={handlePriceInputChange}
          />
          <InputForm
            label="기타 요청사항"
            placeholder="값을 입력하세요"
            value={requestInputValue}
            onChange={handleRequestInputChange}
          />
        </div>

        <Button type="primary" onClick={handleSubmit}>
          등록
        </Button>
      </div>
    </>
  );
}
