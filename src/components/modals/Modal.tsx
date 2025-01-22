import React from "react";

import { ModalOverlay } from "./ModalOverlay";
import { useModalToggle } from "../../context/ModalContext";
import { CreateTaskForm } from "./forms/CreateTaskForm";
import { ModalHeader } from "./ModalHeader";

interface ModalContent {
  header: JSX.Element;
  body: JSX.Element;
}

const modalContent: Record<string, ModalContent> = {
  "create-new-task": {
    header: <ModalHeader text="Create new task" />,
    body: <CreateTaskForm />,
  },
  "edit-task": {
    header: <ModalHeader text="Edit task" />,
    body: <CreateTaskForm />,
  },
  "change-category": {
    header: <ModalHeader text="Change category" />,
    body: <CreateTaskForm />,
  },
};

export const Modal = () => {
  const { currentModal, showModal } = useModalToggle();
  const modal = modalContent[currentModal];
  console.log(modal);

  return (
    <>
      {showModal && modal && (
        <ModalOverlay>
          <div className="z-20 relative left-1/2 -translate-x-1/2 w-full h-auto bg-white p-4 rounded">
            {modal.header}
            {modal.body}
          </div>
        </ModalOverlay>
      )}
    </>
  );
};
