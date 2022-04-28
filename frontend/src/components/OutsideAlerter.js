import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, action) {
    useEffect(() => {
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        };
    }, [ref, action]);
}

export default function OutsideAlerter(props)
{
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.outsideAction);

    return <div ref={wrapperRef}>{props.children}</div>
}