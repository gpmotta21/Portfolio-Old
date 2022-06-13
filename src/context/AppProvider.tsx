import { ReactNode, useRef, useState } from "react";
import { refsCtx } from "./refs";
import { successMessageCtx } from "./successMessage";

interface AppContextProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppContextProps) => {
  const [currSegment, setCurrSegment] = useState<string>("introduction"),
    [successMessage, setSuccessMessage] = useState<string | boolean>(false);

  return (
    <refsCtx.Provider value={{ currSegment, setCurrSegment }}>
      <successMessageCtx.Provider value={{ successMessage, setSuccessMessage }}>{children}</successMessageCtx.Provider>
    </refsCtx.Provider>
  );
};
