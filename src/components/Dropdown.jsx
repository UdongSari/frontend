import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./DropDown.scss";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

export const DropDown = {
  Container: ({ children, get, set }) => {
    const wrapperRef = useRef();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((open) => !open);
    };

    // 하위 Item 컴포넌트에 click 이벤트 리스너 추가
    useEffect(() => {
      const items = document.querySelectorAll(".dropdown-item");
      for (let idx = 0; idx < items.length; idx++) {
        items[idx].addEventListener("click", () => {
          console.log(idx, items[idx].innerHTML);
          set({ index: idx, value: items[idx].innerHTML });
          setOpen(false);
        });
      }
    }, [open]);

    // DropDown 열릴때 하단 borderRadius 0px 로 설정
    useLayoutEffect(() => {
      if (open) {
        wrapperRef.current.style.borderBottomLeftRadius = "0px";
        wrapperRef.current.style.borderBottomRightRadius = "0px";
      } else {
        wrapperRef.current.style.borderBottomLeftRadius = "15px";
        wrapperRef.current.style.borderBottomRightRadius = "15px";
      }
    }, [open]);

    return (
      <div ref={wrapperRef} className="dropdown-wrapper" onClick={handleClick}>
        <div className="dropdown-container">{get.value}</div>
        <div className="dropdown-icon">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {open && <div className="dropdown-items">{children}</div>}
      </div>
    );
  },
  Item: ({ children }) => {
    return <div className="dropdown-item">{children}</div>;
  },
};
