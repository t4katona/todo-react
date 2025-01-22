import { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "../interfaces/Task.interfaces";
import { taskManager } from "../taskManager";
// context

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskID: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// provider
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const mainTaskManager = taskManager;
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    mainTaskManager.createTask(task);
    setTasks([...mainTaskManager.getAllTasks()]);
  };

  const deleteTask = (taskID: string) => {
    mainTaskManager.deleteTask(taskID);
    setTasks([...mainTaskManager.getAllTasks()]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// hook
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("Something went wrong with the TaskProvider");
  return context;
};
