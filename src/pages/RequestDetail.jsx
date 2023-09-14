import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { List } from "../components/List";
import "./RequestDetail.scss";
import { Button, InstaBtn, FacebookBtn } from "../components/Button";
import Profile from "../components/Profile";

export default function RequestDetail() {
  const [photographer, setPhotographer] = useState("000 Portfolio ");
  const [IdCard__text, setIdCard__text] = useState(
    "strawberrymoon❤️❤️🍓❤️❤\nstrawberrymoon❤️❤️🍓❤️❤\nstrawberrymoon❤️❤️🍓❤️❤"
  );

  return (
    <>
      <div className="RequestDetail-wrapper">
        <div className="IdCard">
          <div className="IdCard__Profile">
            <div className="IdCard__ProfileCircle">
              <Profile />
            </div>

            <div className="IdCard__btns">
              <Button
                type="primary"
                width="119px"
                height="40px"
                children={"수정하기"}
              />
              <Button type="insta" width="119px" height="40px" children={""} />
              <InstaBtn />
              <FacebookBtn />
            </div>
          </div>

          <div className="IdCard-Container">
            <span className="IdCard__title-Bold">{photographer}</span>
            <List.Table />

            <span className="IdCard__text">
              {" "}
              {IdCard__text.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </span>
          </div>
          <div className="IdCard__slider">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <div className="RequestDetail-container">
            <div className="RequestDetail-grid">
              <div className="RequestDetail-grid-activeitem" />
              <div className="RequestDetail-grid-item" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
