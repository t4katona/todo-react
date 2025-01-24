import React from "react";
import { useTaskContext } from "../../../context/TaskContext";

const setCategoryName = (category: string): string => {
  switch (category) {
    case "toDo":
      return "To-Do";
    case "inProgress":
      return "In Progress";
    case "completed":
      return "Completed";
    case "onHold":
      return "On Hold";
    default:
      return "category name";
  }
};

export const TaskHeader = ({ categoryName }: { categoryName: string }) => {
  const { tasks } = useTaskContext();
  const numberOfTasks: number = tasks.filter(
    (task) => categoryName === task.category
  ).length;
  return (
    <div className="flex justify-between items-center border-mainWidth border-solid border-primary rounded p-2 mb-4">
      <h3 className="font-medium">{setCategoryName(categoryName)}</h3>
      <p className="w-min px-2 py-1 bg-secondary-backgroundColor rounded">
        {numberOfTasks}
      </p>
    </div>
  );
};
