import React from "react";
import Rating from "../components/Rating";
import TableDetail__item from "../components/TableDetail__item";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const List = {
  Table: () => {
    return (
      <div className="List-Table" style={{ width: "330px" }}>
        <Rating />
        <Rating />
        <TableDetail__item
          icons={faStar.iconName}
          types="지역"
          texts="대구광역시 수성구 범어동"
        />
      </div>
    );
  },
  TableDetail: () => {
    return (
      <div className="List-Table" style={{ width: "330px" }}>
        <TableDetail__item
          icons={faStar.iconName}
          types="시간"
          texts="1시간 ~"
        />
        <TableDetail__item
          icons="faStar"
          types="연락처"
          texts="010-1234-1234"
        />
        <TableDetail__item icons="faStar" types="가격" texts="~ 50,000 원" />
      </div>
    );
  },
};
