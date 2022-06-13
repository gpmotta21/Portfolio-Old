import { useCallback, useEffect, useState } from "react";

type Ref = React.RefObject<HTMLElement>;
const ELEMENT_HEIGHT = 600;

// This hook will return the current segment of the page based on its ID.
export default function useCaptureSegment(refs: Ref[]) {
  const [segment, setSegment] = useState<string>("");

  const capture = useCallback(() => {
    if (refs) {
      refs.forEach((ref) => {
        const { offsetHeight, offsetTop } = ref.current as HTMLElement,
          pageY = window.scrollY,
          isVisibleFromTop = pageY > offsetTop - ELEMENT_HEIGHT,
          isVisibleFromBottom = pageY <= offsetTop - ELEMENT_HEIGHT + offsetHeight;

        if (isVisibleFromTop && isVisibleFromBottom) {
          setSegment(ref?.current?.id || "");
        }
      });
    }
  }, [refs]);

  useEffect(() => {
    capture();

    window.addEventListener("scroll", capture);

    return () => window.removeEventListener("scroll", capture);
  }, []);

  return segment;
}
