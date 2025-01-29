import { Task } from "./Task.interfaces";
export interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskID: string) => void;
  updateTask: (
    taskID: string,
    taskName: string,
    taskDescription: string
  ) => void;

  updateCategory: (task: Task, newCategory: string) => void;
}
