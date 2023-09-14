import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating(props) {
  const number = 3;

  function star(number) {
    return (
      <>
        {[...Array(number)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </>
    );
  }

  return (
    <>
      <FontAwesomeIcon icon={faStar} />
      <span className="Rating-text">별점</span>
      {star(number)}
    </>
  );
}
