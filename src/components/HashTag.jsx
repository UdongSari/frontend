import { useLayoutEffect, useRef } from "react";
import "./HashTag.scss";

export const HashTag = {
    Group: ({ children, get, set, ...rest }) => {
        return (
            <div className="hashtag-group" {...rest}>
                {children}
            </div>
        );
    },
    Item: ({ children, active, ...rest }) => {
        const itemRef = useRef();
        useLayoutEffect(() => {
            if (active) itemRef.current.classList.add("hashtag-active");
            else itemRef.current.classList.remove("hashtag-active");
        }, [active]);

        return (
            <div ref={itemRef} className="hashtag-item" {...rest}>
                <span># </span>
                <span>{children}</span>
            </div>
        );
    },
};
