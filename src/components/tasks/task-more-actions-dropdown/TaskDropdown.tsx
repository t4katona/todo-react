import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../button/Button";
import { useTaskContext } from "../../../context/TaskContext";
import { useModalToggle } from "../../../context/ModalContext";

export const TaskDropdown = ({ id }: { id: string }) => {
  const { deleteTask } = useTaskContext();
  const { openModal } = useModalToggle();

  // handle click outside of dropdown
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  if (!isOpen) return null;
  return (
    <ul
      className="bg-white w-fit border-mainWidth border-solid border-primary rounded absolute right-3 top-14 z-10"
      ref={dropdownRef}
    >
      <li>
        <Button
          type="button"
          variant="text"
          icon="edit"
          onClick={() => {
            openModal("edit-task", id);
          }}
          className="w-full hover:bg-secondary-hoverColor py-3 px-6"
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
          className="w-full hover:bg-secondary-hoverColor py-3 px-6"
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
          className="w-full hover:bg-secondary-hoverColor py-3 px-6 text-red-600"
        >
          Delete
        </Button>
      </li>
    </ul>
  );
};
