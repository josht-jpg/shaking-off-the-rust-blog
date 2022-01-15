import { MutableRefObject, useEffect } from "react";

const useOutsideAlerter = (
  ref: MutableRefObject<HTMLDivElement>,
  action: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        action();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
};

export default useOutsideAlerter;
