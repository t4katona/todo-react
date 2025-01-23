import React from "react";
import { useTaskContext } from "../../../context/TaskContext";

export const TaskHeader = ({ categoryName }: { categoryName: string }) => {
  const { tasks } = useTaskContext();
  const numberOfTasks: number = tasks.filter(
    (task) => categoryName === task.category
  ).length;
  return (
    <div className="flex justify-between items-center border-mainWidth border-solid border-primary rounded p-2 mb-4">
      <h3 className="font-medium">{categoryName}</h3>
      <p className="w-min px-2 py-1 bg-secondary-backgroundColor rounded">
        {numberOfTasks}
      </p>
    </div>
  );
};
