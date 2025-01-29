import { useState } from "react";
import { ModalContext } from "../context/ModalContext";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentModal, setCurrentModal] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
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
