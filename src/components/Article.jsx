import { faLayerGroup, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Article.scss";

import { Info } from "./Info";
import { HashTag } from "./HashTag";
import { Button, ButtonGroup } from "./Button";
import Rating from "./Rating";

export const Article = ({ type, rating, theme, location, imgUrls, description }) => {
    const navigate = useNavigate();
    const [extend, setExtend] = useState(false);

    const handleClick = () => {
        if (type === "찍어주세요") {
            setExtend((extend) => !extend);
        } else if (type === "찍어드려요") {
            navigate(description);
        }
    };

    return (
        <div className="article-container">
            <div className="article-head">
                <div className="article-title">
                    <p style={{ color: "#ff8a00" }}>{type}</p>

                    <h1>사진사 이름</h1>
                    <ButtonGroup>
                        <Button type="orange-filled">연락하기</Button>
                        <Button type="orange-stroke" onClick={handleClick}>
                            자세히보기
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="article-info">
                    <Info title="별점" icon={faStar}>
                        <Rating number={rating} />
                    </Info>
                    <Info title="테마" icon={faLayerGroup}>
                        <HashTag.Group>
                            {theme.map((element) => {
                                return <HashTag.Item>{element}</HashTag.Item>;
                            })}
                        </HashTag.Group>
                    </Info>
                    <Info title="지역" icon={faLocationDot}>
                        {location}
                    </Info>
                </div>
            </div>

            {extend && <div className="article-context">{description}</div>}

            <div className="article-img">
                {imgUrls.map((element) => {
                    return <img src={element}></img>;
                })}
            </div>
        </div>
    );
};
