import { faCoins, faLayerGroup, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Article.scss";

import { Info } from "./Info";
import { HashTag } from "./HashTag";
import { Button, ButtonGroup } from "./Button";
import Rating from "./Rating";
import axios from "axios";
import { HOST } from "../utils/host";

// 찍어주세요 props : type, theme, location, imgurls, description, price
// 찍어드려요 props : type, rating, theme, location, imgurls, description

export const Article = ({ type, name, rating, theme, location, imgUrls, description, price, si, gu, dong }) => {
    const navigate = useNavigate();
    const [extend, setExtend] = useState(false);

    const handleClick = () => {
        if (type === "찍어주세요") {
            setExtend((extend) => !extend);
        } else if (type === "찍어드려요") {
            navigate(description);
        }
    };

    const contact = () => {
        axios
            .post(`${HOST}/api/v1/user/grapher/search`, {
                // id: id,
                // si: si,
                // gu: gu,
                // dong: dong,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        return 1;
    };

    return (
        <div className="article-container">
            <div className="article-head">
                <div className="article-title">
                    <p style={{ color: "#ff8a00" }}>{type}</p>

                    <h1>{name}</h1>
                    <ButtonGroup>
                        <Button type="orange-filled" onClick={contact}>
                            연락하기
                        </Button>
                        <Button type="orange-stroke" onClick={handleClick}>
                            자세히보기
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="article-info">
                    {type === "찍어드려요" && (
                        <>
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
                        </>
                    )}

                    {type === "찍어주세요" && (
                        <>
                            <Info title="가격" icon={faCoins}>
                                {price}
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
                        </>
                    )}
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
