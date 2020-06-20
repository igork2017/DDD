export interface Task {
  title: string;
}

export interface TasksState {
  tasks: Task[];
}

export const CREATE_TASK = "CREATE_TASK";

interface AddNewTask {
  type: typeof CREATE_TASK;
  task: Task;
}

export type TasksActionTypes = AddNewTask;
