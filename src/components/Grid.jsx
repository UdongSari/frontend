import React from "react";
import "./Grid.scss";

const Grid = () => {
  const dataItems = [
    {
      imagePath: "이미지 경로 1",
      imageTitle: "제목 1",
      imageDescription: "설명 1",
    },
    {
      imagePath: "이미지 경로 2",
      imageTitle: "제목 2",
      imageDescription: "설명 2",
    },
    {
      imagePath: "이미지 경로 2",
      imageTitle: "제목 2",
      imageDescription: "설명 2",
    },
    {
      imagePath: "이미지 경로 2",
      imageTitle: "제목 2",
      imageDescription: "설명 2",
    },
    {
      imagePath: "이미지 경로 2",
      imageTitle: "제목 2",
      imageDescription: "설명 2",
    },
    {
      imagePath: "이미지 경로 2",
      imageTitle: "제목 2",
      imageDescription: "설명 2",
    },
    // 나머지 데이터 아이템들도 추가하세요.
  ];

  return (
    <div className="Grid-container">
      {dataItems.map((dataItem, index) => (
        <div key={index} className="Grid-item">
          <img src={dataItem.imagePath} alt={dataItem.imageTitle} />
          <h2>{dataItem.imageTitle}</h2>
          <p>{dataItem.imageDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
