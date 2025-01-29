import React, { useState } from "react";
import { Button } from "../../button/Button";
import { TaskDropdown } from "../task-more-actions-dropdown/TaskDropdown";

interface TaskCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
}

const setColors = (category: string): string => {
  switch (category) {
    case "toDo":
      return "border-tasks-todo-border bg-tasks-todo-bg";
    case "inProgress":
      return "border-tasks-inprogress-border bg-tasks-inprogress-bg";
    case "completed":
      return "border-tasks-completed-border bg-tasks-completed-bg";
    case "onHold":
      return "border-tasks-onhold-border bg-tasks-onhold-bg";
    default:
      return "border-gray-200 bg-gray-50";
  }
};

export const TaskCard = ({
  id,
  name,
  description,
  category,
}: TaskCardProps) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  return (
    <li
      className={`w-full border border-solid rounded py-4 px-2 mb-2 relative ${setColors(
        category
      )} `}
    >
      <header className="w-full flex justify-between items-center mb-4">
        <h3 className="max-w-full w-full text-pretty">{name}</h3>
        <Button
          type="button"
          variant="text"
          icon="more"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />
        {toggleDropdown && <TaskDropdown id={id} />}
      </header>
      <p className="text-sm">{description}</p>
    </li>
  );
};
