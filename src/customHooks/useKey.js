import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action?.();
      }
    };
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [key, action]);
};
