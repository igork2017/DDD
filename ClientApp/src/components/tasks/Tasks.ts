import {Action, Reducer} from "redux";
import {AppThunkAction} from "./";

export interface TasksState {
  isLoading: boolean;
  tasks: Task[];
  dispatch: any;
}

export interface Task {
  title: string;
}

export interface TasksAction {
  type: "CREATE_TASK";
  task: Task;
}
export function createTask(task: any) {
  return {type: "CREATE_TASK", task};
}

const unloadedState: TasksState = {tasks: [], isLoading: false, dispatch: null};
type KnownAction = TasksAction;

export const reducer: Reducer<TasksState> = (
  state: TasksState | undefined,
  incomingAction: Action
): TasksState => {
  if (state === undefined) {
    return unloadedState;
  }
  const action = incomingAction as KnownAction;
  const tasks = state.tasks;
  tasks.push(action.task);
  switch (action.type) {
    case "CREATE_TASK":
      return {
        isLoading: true,
        tasks: tasks,
        dispatch: null,
      };
    default:
      return state;
  }
};
