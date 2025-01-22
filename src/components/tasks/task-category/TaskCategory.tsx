import React from "react";
import { TaskHeader } from "../task-header/TaskHeader";
import { TaskList } from "../task-list/TaskList";

export const TaskCategory = ({ category }: { category: string }) => {
  return (
    <div className="w-full border-mainWidth border-solid border-primary p-2 rounded">
      <TaskHeader categoryName={category} />
      <TaskList category={category} />
    </div>
  );
};
