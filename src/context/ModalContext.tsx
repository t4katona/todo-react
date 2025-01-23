import { createContext, useState, useContext } from "react";

interface ModalContextType {
  currentModal: string;
  showModal: boolean;
  initTaskID: string;
  openModal: (modalName: string, taskID?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentModal, setCurrentModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [initTaskID, setInitTaskID] = useState<string>("");

  const openModal = (modalName: string, taskID?: string): void => {
    setCurrentModal(modalName);
    setShowModal(true);
    if (taskID) {
      setInitTaskID(taskID);
    }
  };

  const closeModal = (): void => {
    setCurrentModal("");
    setShowModal(false);
    setInitTaskID("");
  };

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        showModal,
        initTaskID,
        openModal,
        closeModal,
      }}
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
