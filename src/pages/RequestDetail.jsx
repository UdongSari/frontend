import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { List } from "../components/List";
import "./RequestDetail.scss";
import { Button } from "../components/Button";

export default function RequestDetail() {
  const [photographer, setPhotographer] = useState("000 Portfolio ");
  return (
    <>
      <div className="RequestDetail-wrapper">
        <div className="IdCard">
          <div className="IdCard__Profile">
            <div className="IdCard__ProfileCircle" />

            <div className="IdCard__btns">
              <Button
                type="primary"
                width="119px"
                height="40px"
                children={"수정하기"}
              />
              <Button type="insta" width="119px" height="40px" children={""} />
            </div>
          </div>

          <span className="IdCard__title-Bold">{photographer}</span>
          <List.Table />

          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className="RequestDetail-container">
          <div className="RequestDetail-grid">
            <div className="RequestDetail-grid-activeitem" />
            <div className="RequestDetail-grid-item" />
          </div>
        </div>
      </div>
    </>
  );
}
