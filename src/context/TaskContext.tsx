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

  const findAllTasks = (): Task[] => {
    return mainTaskManager.getAllTasks();
  };

  // use effect
  useEffect(() => {
    if (tasks.length === 0) {
      setTasks(mainTaskManager.loadData());
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        findAllTasks,
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
