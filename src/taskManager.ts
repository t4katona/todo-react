import { Task } from "./interfaces/Task.interfaces";
import { Store } from "./store";

class TaskManager extends Store {
  tasks: Task[] = [];
  constructor() {
    super("tasks");
    this.tasks = this.loadData();
  }

  createTask(task: Task): void {
    this.tasks.push(task);
    this.save(this.tasks);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(taskID: string): void {
    this.tasks = this.tasks.filter(({ id }) => id !== taskID);
    this.save(this.tasks);
  }
}

export const taskManager = new TaskManager();
