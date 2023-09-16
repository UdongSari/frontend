import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faSliders } from "@fortawesome/free-solid-svg-icons";

import "./Response.scss";

import { Article } from "../components/Article";
import { Info } from "../components/Info";
import { DropDown } from "../components/Dropdown";
import { HashTag } from "../components/HashTag";
import Rating from "../components/Rating";
import { ButtonAdd } from "../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";

import { ResponseFetchThunk } from "../store/response-slice";
import { Loader } from "../components/Loader";

export default function Response() {
    const dispatch = useDispatch();

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    // Filter Dropdowns
    const [si, setSi] = useState({ index: 0, value: "대구광역시" });
    const [gu, setGu] = useState({ index: -1, value: "군 / 구" });
    const [theme, setTheme] = useState({ index: -1, value: "테마 선택" });
    const [rating, setRating] = useState();
    const [sort, setSort] = useState({ index: -1, value: "정렬" });

    const { status, data } = useSelector((state) => state.response);

    useEffect(() => {
        if (!cookies.token) {
            alert("다시 로그인 해 주세요");
            navigate("/auth/login");
        } else {
            if (gu.value === "군 / 구") {
                dispatch(ResponseFetchThunk(si.value, null, cookies.token));
            } else {
                dispatch(ResponseFetchThunk(si.value, gu.value, cookies.token));
            }
        }
    }, [si, gu]);

    return (
        <>
            <div className="btn-add-container">
                <ButtonAdd link="/portfolio/create"></ButtonAdd>
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
                </Info>

                <Info icon={faSliders} title={"별점"}>
                    <Rating number={5}></Rating>
                </Info>

                <div className="controller-title ">
                    <h1 className="controller-response">
                        <span>
                            <FontAwesomeIcon icon={faCameraRetro} />
                        </span>
                        찍어드려요
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
                            key={index}
                            type="찍어드려요"
                            name={element.grapherName}
                            theme={element.themaList.map((el) => el.themaName)}
                            location={`${element.regionList[0].si} ${element.regionList[0].gu}`}
                            rating={element.stars}
                            imgUrls={element.portfolioList.slice(0, 4).map((el) => el.imagePath)}
                            description={`/photo/request/detail/${element.id}`}
                        />
                    );
                })
            ) : (
                <Loader />
            )}
        </>
    );
}
