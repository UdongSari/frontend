import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as sfaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as rfaStar } from "@fortawesome/free-regular-svg-icons";

import "./Rating.scss";

export default function Rating({ number }) {
    return (
        <div className="Rating__stars-container">
            <div className="Rating__stars">
                {[...Array(number)].map((_, index) => (
                    <FontAwesomeIcon className="star" key={index} icon={sfaStar} />
                ))}
                {[...Array(5 - number)].map((_, index) => (
                    <FontAwesomeIcon className="star" key={number + index} icon={rfaStar} />
                ))}
            </div>
            <span className="Rating__stars-text">{number}/5</span>
        </div>
    );
}
