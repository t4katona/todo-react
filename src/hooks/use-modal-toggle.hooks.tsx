import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModalToggle = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Something went wrong with the ModalProvider");
  return context;
};
