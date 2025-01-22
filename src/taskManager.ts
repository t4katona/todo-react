import { Task } from "./interfaces/Task.interfaces";

class TaskManager {
  tasks: Task[] = [];

  createTask(task: Task): void {
    console.log("nadlwndkl");

    this.tasks.push(task);
    console.log("tasks: ", this.tasks);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(taskID: string): void {
    this.tasks = this.tasks.filter(({ id }) => id !== taskID);
  }
}

export const taskManager = new TaskManager();
