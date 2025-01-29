import { Task } from "../interfaces/Task.interfaces";
import { create } from "zustand";
import { TaskContextProps } from "../interfaces/TaskContext.interfaces";
import { persist } from "zustand/middleware";

export const useTaskState = create<TaskContextProps>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task: Task) => {
        set((state) => ({ tasks: [...state.tasks, task] }));
      },
      deleteTask: (taskID: string) => {
        set((state) => ({
          tasks: state.tasks.filter(({ id }) => id !== taskID),
        }));
      },
      updateCategory: (task: Task, newCategory: string) => {
        set((state) => ({
          tasks: state.tasks.map((stateTask) =>
            stateTask.id === task.id ? { ...task, category: newCategory } : task
          ),
        }));
      },

      updateTask: (taskId: string, newName: string, newDescription: string) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, name: newName, description: newDescription }
              : task
          ),
        }));
      },
    }),
    {
      name: "tasks",
    }
  )
);
