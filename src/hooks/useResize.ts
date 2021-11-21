import { RefObject, useEffect, useState } from "react";

export const useResize = <T extends HTMLElement>(elemRef: RefObject<T>) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const targetElement = elemRef.current;

    const handleResize = () => {
      setSize({
        width: targetElement?.offsetHeight ?? window.innerWidth,
        height: targetElement?.offsetHeight ?? window.innerHeight,
      });
    };

    handleResize();
    targetElement?.addEventListener("resize", handleResize);

    return () => targetElement?.removeEventListener("resize", handleResize);
  }, [elemRef]);

  return size;
};
