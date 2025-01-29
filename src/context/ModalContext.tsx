import { createContext } from "react";
import { ModalContextType } from "../interfaces/ModalContext.interfaces";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
