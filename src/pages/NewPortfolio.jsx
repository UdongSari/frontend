import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResponseDetail.scss";
import { HashTag } from "../components/HashTag";
import { Button } from "../components/Button";
import { DropDown } from "../components/Dropdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import { IMAGE_API } from "../utils/host";
import { useDispatch } from "react-redux";

import { useCookies } from "react-cookie";
import { HOST } from "../utils/host";

function InputForm({ ref, label, placeholder }) {
    return (
        <div>
            <span className="createPass-item-text">{label}</span>
            <input ref={ref} className="input" type="text" placeholder={placeholder} />
        </div>
    );
}

export default function NewPortFolio() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const priceRef = useRef();
    const introductionRef = useRef();

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const fileInput = useRef([]);

    const [si, setSi] = useState({ index: -1, value: "시" });
    const [gu, setGu] = useState({ index: -1, value: "군 / 구" });
    const [start, onStartChange] = useState(new Date());
    const [end, onEndChange] = useState(new Date());
    const [theme, setTheme] = useState({ index: -1, value: "테마" });
    const [imageURL, setImageURL] = useState([]);

    const onImageUpload = (event) => {
        fetch(IMAGE_API)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result);

                const form = new FormData();
                form.append("file", event.target.files[0]);

                fetch(result.url, {
                    method: "POST",
                    body: form,
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((result) => {
                        setImageURL([
                            ...imageURL,
                            {
                                imageTitle: "",
                                imagePath: result.result.variants[0],
                            },
                        ]);
                    });
            });
    };

    const handleSubmit = () => {
        if (!cookies.token) {
            alert("다시 로그인 해 주세요");
            navigate("/auth/login");
        } else {
            fetch(`${HOST}/api/v1/user/post/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.token}`,
                },
                body: JSON.stringify({
                    intro: introductionRef.current.value,
                    price: Number(priceRef.current.value),
                    portfolioList: imageURL,
                    regionList: [
                        {
                            si: si.value,
                            gu: gu.value,
                        },
                    ],
                    themaList: [
                        {
                            themaName: theme.value,
                        },
                    ],
                    startDate: start.toString(),
                    endDate: end.toString(),
                }),
            });
        }

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

                    <span className="createPass-item-text">금액</span>
                    <input ref={priceRef} className="input" type="text" placeholder="값을 입력하세요" />

                    <span className="createPass-item-text">기타 요청사항</span>
                    <input ref={introductionRef} className="input" type="text" placeholder="값을 입력하세요" />

                    <span className="region-select-field detailtext">샘플 이미지 업로드</span>
                    <div className="image-upload-ui">
                        <input
                            onChange={onImageUpload}
                            ref={(el) => (fileInput.current[0] = el)}
                            type="file"
                            className="input__image"
                            accept="image/*"
                        />
                        <input
                            onChange={onImageUpload}
                            ref={(el) => (fileInput.current[1] = el)}
                            type="file"
                            className="input__image"
                            accept="image/*"
                        />
                        <input
                            onChange={onImageUpload}
                            ref={(el) => (fileInput.current[2] = el)}
                            type="file"
                            className="input__image"
                            accept="image/*"
                        />
                        <input
                            onChange={onImageUpload}
                            ref={(el) => (fileInput.current[3] = el)}
                            type="file"
                            className="input__image"
                            accept="image/*"
                        />
                    </div>
                </div>

                <Button type="orange-filled" onClick={handleSubmit}>
                    등록
                </Button>
            </div>
        </>
    );
}
