import React, { useState } from "react";
import { Button } from "../../button/Button";
import { TaskDropdown } from "../task-more-actions-dropdown/TaskDropdown";

interface TaskCardProps {
  id: string;
  name: string;
  description: string;
}

export const TaskCard = ({ id, name, description }: TaskCardProps) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  return (
    <li className="w-full border-mainWidth border-solid border-primary rounded py-4 px-2 mb2 relative">
      <header className="w-full flex justify-between align-middle">
        <h3 className="max-w-full mb-4 w-full text-pretty">{name}</h3>
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
