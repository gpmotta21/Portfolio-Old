import { useCallback, useEffect, useState } from "react";

export const useCheckNavCollision = () => {
  const [detected, setDetected] = useState<boolean>(false);

  const scroll = useCallback(() => {
    const pageY = window.scrollY;

    if (pageY > 300) setDetected(true);
    else setDetected(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return detected;
};
