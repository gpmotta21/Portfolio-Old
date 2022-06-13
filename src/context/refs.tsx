import { createContext, useContext, useRef } from "react";

type Ref = React.RefObject<HTMLDivElement>;

interface IRefs {
  currSegment: string;
  setCurrSegment: (segment: string) => void;
}

export const refsCtx = createContext<IRefs>({} as IRefs);
export const useRefsCtx = () => useContext(refsCtx);
