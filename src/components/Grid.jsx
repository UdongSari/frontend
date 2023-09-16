import React, { useState } from "react";
import "./Grid.scss";

const Grid = ({ dataItems }) => {
    // 각 항목에 대한 상태를 저장할 배열
    const [clickedItems, setClickedItems] = useState(Array(dataItems.length).fill(false));

    const handleClick = (index) => {
        // 클릭된 항목의 상태를 토글
        const newClickedItems = [...clickedItems];
        newClickedItems[index] = !newClickedItems[index];
        setClickedItems(newClickedItems);
    };

    return (
        <div className="Grid-container">
            {dataItems.map((dataItem, index) => (
                <div key={index} className={`Grid-item ${clickedItems[index] ? "active" : ""}`} onClick={() => handleClick(index)}>
                    <img src={dataItem.imagePath} alt={dataItem.imageTitle} />
                    <div className="flex">
                        <h2 className={`text title ${clickedItems[index] ? "active" : ""}`}>{dataItem.imageTitle}</h2>
                        <p className={`text ${clickedItems[index] ? "active" : ""}`}>{dataItem.imageDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Grid;
