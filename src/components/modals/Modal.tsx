import React from "react";

import { ModalOverlay } from "./ModalOverlay";
import { useModalToggle } from "../../context/ModalContext";

export const Modal = () => {
  const { currentModal, showModal, closeModal } = useModalToggle();
  return (
    <>
      {showModal && (
        <ModalOverlay>
          <div className="z-20 relative left-1/2 -translate-x-1/2 w-full h-auto bg-white p-4 rounded">
            <h1>Create a new task</h1>
            <button onClick={closeModal}>Close</button>
          </div>
          {currentModal === "create-new-task" && (
            <h1>new task is on the way</h1>
          )}
        </ModalOverlay>
      )}
    </>
  );
};
