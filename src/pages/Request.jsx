import React, { useEffect, useState } from "react";
import { faCamera, faFilter, faPhotoFilm, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { Article } from "../components/Article";
import { Info } from "../components/Info";
import { DropDown } from "../components/Dropdown";
import { HashTag } from "../components/HashTag";
import { Button, ButtonAdd } from "../components/Button";
import Rating from "../components/Rating";
import { Loader } from "../components/Loader";

import "./Request.scss";
import { RequestFetchThunk } from "../store/request-slice";
import { useNavigate } from "react-router-dom";

export default function Request() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const [si, setSi] = useState({ index: 0, value: "대구광역시" });
    const [gu, setGu] = useState({ index: -1, value: "군 / 구" });

    const [theme, setTheme] = useState({ index: -1, value: "테마" });
    const [rating, setRating] = useState({ index: -1, value: "별점" });

    const [sort, setSort] = useState({ index: -1, value: "정렬" });

    // Fetch
    const { status, data } = useSelector((state) => state.request);

    useEffect(() => {
        if (!cookies.token) {
            alert("다시 로그인 해 주세요");
            navigate("/auth/signin");
        } else {
            if (gu.value === "군 / 구") {
                dispatch(RequestFetchThunk(si.value, null, cookies.token));
            } else {
                dispatch(RequestFetchThunk(si.value, gu.value, cookies.token));
            }
        }
    }, [si, gu]);

    useEffect(() => {
        console.log(status, data);
    }, []);

    return (
        <>
            <div className="btn-add-container">
                <ButtonAdd link="/photo/response/detail"></ButtonAdd>
            </div>

            <div className="controller-container" style={{ marginTop: "100px" }}>
                <Info icon={faSliders} title={"위치"}>
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
                </Info>

                <Info icon={faSliders} title={"테마"}>
                    <HashTag.Group>
                        <HashTag.Item>인물</HashTag.Item>
                        <HashTag.Item>풍경</HashTag.Item>
                        <HashTag.Item>스포츠</HashTag.Item>
                        <HashTag.Item>스냅</HashTag.Item>
                        <HashTag.Item>인물</HashTag.Item>
                        <HashTag.Item>풍경</HashTag.Item>
                        <HashTag.Item>스포츠</HashTag.Item>
                        <HashTag.Item>스냅</HashTag.Item>
                    </HashTag.Group>
                </Info>

                <Info icon={faSliders} title={"별점"}>
                    <Rating number={5}></Rating>
                </Info>

                <div className="controller-title ">
                    <h1 className="controller-request">
                        <span>
                            <FontAwesomeIcon icon={faPhotoFilm} />
                        </span>
                        찍어주세요
                    </h1>

                    <DropDown.Container get={sort} set={setSort}>
                        <DropDown.Item>기본순</DropDown.Item>
                        <DropDown.Item>등록순</DropDown.Item>
                        <DropDown.Item>별점순</DropDown.Item>
                    </DropDown.Container>
                </div>
            </div>

            {data ? (
                data.map((element, index) => {
                    return (
                        <Article
                            type="찍어주세요"
                            name={element.userName}
                            price={`${element.price} 원`}
                            theme={element.themaList.map((el) => el.themaName)}
                            location={`${element.regionList[0].si} ${element.regionList[0].gu}`}
                            imgUrls={element.portfolioList.map((el) => el.imagePath)}
                            description={element.intro}
                        />
                    );
                })
            ) : (
                <Loader />
            )}
        </>
    );
}
