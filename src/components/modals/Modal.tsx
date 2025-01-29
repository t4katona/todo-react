import { ModalOverlay } from "./ModalOverlay";
import { useModalToggle } from "../../hooks/use-modal-toggle.hooks";
import { CreateTaskForm } from "./forms/CreateTaskForm";
import { EditTaskForm } from "./forms/EditTaskForm";
import { MoveTaskForm } from "./forms/MoveTaskForm";
import { ModalHeader } from "./ModalHeader";

interface ModalContent {
  header: JSX.Element;
  body: JSX.Element;
}

export const Modal = () => {
  const { currentModal, showModal, initTaskID } = useModalToggle();

  const modalContent: Record<string, ModalContent> = {
    "create-new-task": {
      header: <ModalHeader text="Create new task" />,
      body: <CreateTaskForm />,
    },
    "edit-task": {
      header: <ModalHeader text="Edit task" />,
      body: <EditTaskForm taskID={initTaskID} />,
    },
    "change-category": {
      header: <ModalHeader text="Change category" />,
      body: <MoveTaskForm taskID={initTaskID} />,
    },
  };

  const modal = modalContent[currentModal];

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
