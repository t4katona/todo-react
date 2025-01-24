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

  editTask(taskID: string, taskName: string, taskDescription: string): void {
    const task = this.tasks.find((task) => taskID === task.id);
    if (task) {
      task.name = taskName;
      task.description = taskDescription;
    }
    this.save(this.tasks);
  }

  findTask(taskID: string): Task {
    const task = this.tasks.find((task) => taskID === task.id);
    if (!task) {
      throw new Error(`Task with ID ${taskID} not found`);
    }
    return task;
  }

  updateCategory(task: Task, newCategory: string): void {
    task.category = newCategory;
    this.save(this.tasks);
  }
}

export const taskManager = new TaskManager();
