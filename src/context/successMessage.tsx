import { createContext, useContext } from "react";

interface ISuccess {
  successMessage: string | boolean;
  setSuccessMessage: (success: string | boolean) => void;
}

export const successMessageCtx = createContext<ISuccess>({} as ISuccess);
export const useSuccessCtx = () => useContext(successMessageCtx);
