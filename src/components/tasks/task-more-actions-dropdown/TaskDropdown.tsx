import React from "react";
import { Button } from "../../button/Button";
import { useTaskContext } from "../../../context/TaskContext";

export const TaskDropdown = ({ id }: { id: string }) => {
  const { deleteTask } = useTaskContext();
  return (
    <ul className="bg-white w-min border-mainWidth border-solid border-primary rounded absolute right-0 z-10">
      <li>
        <Button type="button" variant="text" icon="edit">
          Edit
        </Button>
      </li>
      <li>
        <Button type="button" variant="text" icon="move">
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
