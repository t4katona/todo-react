import React from "react";
import { TaskCard } from "../task-card/TaskCard";
import { useTaskContext } from "../../../context/TaskContext";

export const TaskList = ({ category }: { category: string }) => {
  const { tasks } = useTaskContext();
  const filteredTask = tasks.filter((task) => task.category === category);

  // loop throuh the categories and list the 'category' specified tasks.
  return (
    <ul>
      {filteredTask.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          category={task.category}
        />
      ))}

      {}
    </ul>
  );
};
