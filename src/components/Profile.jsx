import React, { useRef, useState } from "react";
import { faLayerGroup, faLocation, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss";
import { Avatar } from "antd";
import { Info } from "./Info";
import { HashTag } from "./HashTag";
import { Button, FacebookBtn, InstaBtn } from "./Button";
import Rating from "./Rating";

export const Profile = {
    Aside: ({ imgSrc, igLink, fbLink }) => {
        return (
            <div className="profile-aside">
                <img className="profile-img" src={imgSrc} alt="" />

                <div className="profile-btn">
                    <Button type="primary">수정하기</Button>
                    <InstaBtn link={igLink} />
                    <FacebookBtn link={fbLink} />
                </div>
            </div>
        );
    },
    Content: ({ title, rating, theme, region, time, phone, price, description }) => {
        return (
            <div className="profile-content">
                <div className="profile-content__heading">{title}</div>
                <div className="profile-content__table">
                    <div className="profile-content__table-item">
                        <Info icon={faStar} title="별점">
                            <Rating number={rating}></Rating>
                        </Info>

                        <Info icon={faLayerGroup} title="테마">
                            <HashTag.Group>
                                {theme.map((element) => {
                                    return <HashTag.Item>{element}</HashTag.Item>;
                                })}
                            </HashTag.Group>
                        </Info>

                        <Info icon={faLocationDot} title="지역">
                            {region}
                        </Info>
                    </div>

                    <div className="profile-content__table-item">
                        <Info icon={faStar} title="시간">
                            {time}
                        </Info>

                        <Info icon={faLayerGroup} title="연락처">
                            {phone}
                        </Info>

                        <Info icon={faLocationDot} title="가격">
                            {price}
                        </Info>
                    </div>
                </div>
                <div className="profile-content__description">{description}</div>
            </div>
        );
    },
    Wrapper: ({ children }) => {
        return <div className="profile-wrapper">{children}</div>;
    },
};

// export default function Profile() {
//     const [file, setFile] = useState(null);
//     const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
//     const fileInput = useRef(null);

//     const onChange = (e) => {
//         if (e.target.files[0]) {
//             setFile(e.target.files[0]);
//         } else {
//             // 업로드 취소할 시
//             setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
//             return;
//         }
//         // 화면에 프로필 사진 표시
//         const reader = new FileReader();
//         reader.onload = () => {
//             if (reader.readyState === 2) {
//                 setImage(reader.result);
//             }
//         };
//         reader.readAsDataURL(e.target.files[0]);
//     };

//     return (
//         <div className="Profile">
//             <Avatar
//                 src={image}
//                 style={{ margin: "20px" }}
//                 size={150}
//                 onClick={() => {
//                     fileInput.current.click();
//                 }}
//             />

//             <input
//                 type="file"
//                 style={{ display: "none" }}
//                 accept="image/jpg,image/png,image/jpeg"
//                 name="profile_img"
//                 onChange={onChange}
//                 ref={fileInput}
//             />
//         </div>
//     );
// }
