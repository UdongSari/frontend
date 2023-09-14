import { faLayerGroup, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Article.scss";

import { Info } from "./Info";
import { HashTag } from "./HashTag";
import { Button, ButtonGroup } from "./Button";
import Rating from "./Rating";

export const Article = ({ type, color, rating, theme, location, imgUrls }) => {
    return (
        <div className="article-container">
            <div className="article-head">
                <div className="article-title">
                    {color === "orange" && <p style={{ color: "#ff8a00" }}>{type}</p>}
                    {color === "green" && <p style={{ color: "#00c52b" }}>{type}</p>}

                    <h1>사진사 이름</h1>
                    <ButtonGroup>
                        <Button type={`${color}-filled`}>연락하기</Button>
                        <Button type={`${color}-stroke`}>자세히보기</Button>
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

            <div className="article-context">asdf</div>

            <div className="article-img">
                {imgUrls.map((element) => {
                    return <img src={element}></img>;
                })}
            </div>
        </div>
    );
};