import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, settoggle) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                settoggle(false)
            }
        }
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [ref]);
}
export default useOutsideAlerter