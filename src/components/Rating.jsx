import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as sfaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as rfaStar } from "@fortawesome/free-regular-svg-icons";

import "./Rating.scss";

export default function Rating(props) {
  const number = 3;

  function star(number) {
    return (
      <div className="Rating__stars-container">
        <div className="Rating__stars">
          {[...Array(number)].map((_, index) => (
            <FontAwesomeIcon className="star" key={index} icon={sfaStar} />
          ))}
          {[...Array(5 - number)].map((_, index) => (
            <FontAwesomeIcon
              className="star"
              key={number + index}
              icon={rfaStar}
            />
          ))}
        </div>
        <span className="Rating__stars-text">{number}/5</span>
      </div>
    );
  }

  return (
    <div className="Rating-wrapper">
      <div className="Bstar">
        <FontAwesomeIcon icon={sfaStar} />
      </div>
      <span className="Rating-text">별점</span>
      {star(number)}
    </div>
  );
}
