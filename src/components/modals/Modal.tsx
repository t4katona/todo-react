import { useModalManager } from "../../hooks/useModalManager.hooks";
import { ModalOverlay } from "./ModalOverlay";

export const Modal = () => {
  const { currentModal, showModal } = useModalManager();
  return (
    <>
      {showModal && (
        <ModalOverlay>
          <div className="z-20 relative left-1/2 -translate-x-1/2 w-full h-auto bg-white p-4 rounded">
            <h1>Create a new task</h1>
            <button>Close</button>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};
