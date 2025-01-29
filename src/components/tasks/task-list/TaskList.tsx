import { TaskCard } from "../task-card/TaskCard";
import { useTaskState } from "../../../hooks/use-task-state.hooks";
export const TaskList = ({ category }: { category: string }) => {
  const tasks = useTaskState((state) => state.tasks);
  const filteredTask = tasks.filter((task) => task.category === category);

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
