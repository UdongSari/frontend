import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

export default function TableDetail__item(props) {
  const [icon, setIcon] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setIcon(props.icons);
    setType(props.types);
    setText(props.texts);
  }, []);

  return (
    <div className="Rating-wrapper">
      <div className="Bstar">
        {props.icons}
        <FontAwesomeIcon icon={props.icons} />
      </div>
      <span className="Rating-text">{type}</span>
      {text}
    </div>
  );
}
