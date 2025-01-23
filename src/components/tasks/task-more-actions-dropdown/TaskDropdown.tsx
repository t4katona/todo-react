import React from "react";
import { Button } from "../../button/Button";
import { useTaskContext } from "../../../context/TaskContext";
import { useModalToggle } from "../../../context/ModalContext";

export const TaskDropdown = ({ id }: { id: string }) => {
  const { deleteTask } = useTaskContext();
  const { openModal } = useModalToggle();

  return (
    <ul className="bg-white w-fit border-mainWidth border-solid border-primary rounded absolute right-3 top-14 z-10">
      <li>
        <Button
          type="button"
          variant="text"
          icon="edit"
          onClick={() => {
            openModal("edit-task", id);
          }}
        >
          Edit
        </Button>
      </li>
      <li>
        <Button
          type="button"
          variant="text"
          icon="move"
          onClick={() => openModal("change-category", id)}
        >
          Move
        </Button>
      </li>
      <li>
        <Button
          type="button"
          variant="text"
          icon="delete"
          onClick={() => deleteTask(id)}
        >
          Delete
        </Button>
      </li>
    </ul>
  );
};
