import { useEffect } from "react";

const useKeyDown = (code, callback) => {
  useEffect(() => {
    const handleKeydown = (ev) => {
      if (ev.code === code) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
};

export default useKeyDown;
