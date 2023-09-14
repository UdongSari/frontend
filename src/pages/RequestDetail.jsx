import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { List } from "../components/List";

export default function RequestDetail() {
  const [photographer, setPhotographer] = useState("000 Portfolio ");
  return (
    <>
      <div className="RequestDetail-wrapper">
        <div className="IdCard">
          <span className="IdCard__title-Bold">{photographer}</span>
          <div className="Profile" />
          <div className="IdCard__btns">
            <div className="Button" />
            <div className="facebookBtn" />
            <div className="instaBtn" />
          </div>

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
