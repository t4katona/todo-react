import React from "react";
import { TaskCategory } from "../task-category/TaskCategory";

export const TaskBoard = () => {
  return (
    <div className="gap-y-4 flex justify-between items-start flex-col md:flex-board md:flex-row md:gap-x-4">
      <TaskCategory category="toDo" />
      <TaskCategory category="inProgress" />
      <TaskCategory category="completed" />
      <TaskCategory category="onHold" />
    </div>
  );
};
