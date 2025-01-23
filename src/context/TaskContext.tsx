import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Task } from "../interfaces/Task.interfaces";
import { taskManager } from "../taskManager";
// context

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskID: string) => void;
  findAllTasks: () => void;
  updateTask: (
    taskID: string,
    taskName: string,
    taskDescription: string
  ) => void;
  findTask: (taskID: string) => Task;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// provider
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const mainTaskManager = taskManager;
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    mainTaskManager.createTask(task);
    setTasks([...mainTaskManager.getAllTasks()]);
  };

  const deleteTask = (taskID: string): void => {
    mainTaskManager.deleteTask(taskID);
    setTasks([...mainTaskManager.getAllTasks()]);
  };

  const findTask = (taskID: string): Task => {
    return mainTaskManager.findTask(taskID);
  };

  const findAllTasks = (): Task[] => {
    return mainTaskManager.getAllTasks();
  };

  const updateTask = (
    taskID: string,
    taskName: string,
    taskDescription: string
  ): void => {
    mainTaskManager.editTask(taskID, taskName, taskDescription);
  };

  // use effect
  useEffect(() => {
    if (tasks.length === 0) {
      setTasks(mainTaskManager.loadData());
    }
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        findAllTasks,
        updateTask,
        findTask,
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
