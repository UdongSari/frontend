import React, { useState } from "react";
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
      imagePath: "이미지 경로 3",
      imageTitle: "제목 3",
      imageDescription: "설명 3",
    },
    {
      imagePath: "이미지 경로 4",
      imageTitle: "제목 4",
      imageDescription: "설명 4",
    },
    {
      imagePath: "이미지 경로 5",
      imageTitle: "제목 5",
      imageDescription: "설명 5",
    },
    {
      imagePath: "이미지 경로 6",
      imageTitle: "제목 6",
      imageDescription: "설명 6",
    },
    // 나머지 데이터 아이템들도 추가하세요.
  ];

  // 각 항목에 대한 상태를 저장할 배열
  const [clickedItems, setClickedItems] = useState(
    Array(dataItems.length).fill(false)
  );

  const handleClick = (index) => {
    // 클릭된 항목의 상태를 토글
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };

  return (
    <div className="Grid-container">
      {dataItems.map((dataItem, index) => (
        <div
          key={index}
          className={`Grid-item ${clickedItems[index] ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <img src={dataItem.imagePath} alt={dataItem.imageTitle} />
          <div className="flex">
            <h2 className={`text title ${clickedItems[index] ? "active" : ""}`}>
              {dataItem.imageTitle}
            </h2>
            <p className={`text ${clickedItems[index] ? "active" : ""}`}>
              {dataItem.imageDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
