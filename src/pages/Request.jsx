import React, { useState } from "react";
import {
  faCamera,
  faFilter,
  faPhotoFilm,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import { Article } from "../components/Article";
import { Info } from "../components/Info";
import { DropDown } from "../components/Dropdown";
import { HashTag } from "../components/HashTag";
import Rating from "../components/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Request() {
  const [si, setSi] = useState({ index: -1, value: "시" });
  const [gu, setGu] = useState({ index: -1, value: "군 / 구" });
  const [dong, setDong] = useState({ index: -1, value: "동" });

  const [theme, setTheme] = useState({ index: -1 });
  const [rating, setRating] = useState();

  const [sort, setSort] = useState({ index: -1, value: "정렬" });

  return (
    <>
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

            <DropDown.Container get={dong} set={setDong}>
              <DropDown.Item>동</DropDown.Item>
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

      <Article
        type="찍어주세요"
        rating={5}
        theme={["테마", "긴테마"]}
        location="대구광역시 수성구 범어동"
        imgUrls={[
          "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg",
          "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
          "https://st2.depositphotos.com/2222024/5609/i/450/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg",
          "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=16x9&q=h_720,w_1280,c_fill",
        ]}
        description={
          "안녕하세요, 스냅사진을 사랑하는 스냅러버입니다! 제 나이는 25세이며, 제 직업은 패션 블로거입니다.\n 스냅사진을 찍는 것을 취미로 즐기며 패션 스타일링에도 관심을 가지고 있어요.\n제 스냅사진 컬렉션과 패션 스타일링 팁은 제 인스타그램 계정인 @snaplover_photos 에서 확인하실 수 있습니다.\n여러분도 저와 함께 멋진 순간을 스냅사진으로 찍어주세요!"
        }
      />

      <Article
        type="찍어주세요"
        rating={5}
        theme={["테마", "긴테마"]}
        location="대구광역시 수성구 범어동"
        imgUrls={[
          "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg",
          "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
          "https://st2.depositphotos.com/2222024/5609/i/450/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg",
          "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=16x9&q=h_720,w_1280,c_fill",
        ]}
        description={"요구사항"}
      />
    </>
  );
}
