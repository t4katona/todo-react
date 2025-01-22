import { createContext, useState, useContext } from "react";

interface ModalContextType {
  currentModal: string;
  showModal: boolean;
  openModal: (modalName: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentModal, setCurrentModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (modalName: string): void => {
    setCurrentModal(modalName);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setCurrentModal("");
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ currentModal, showModal, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalToggle = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Something went wrong with the ModalProvider");
  return context;
};
