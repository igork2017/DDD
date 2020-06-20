import {Task, CREATE_TASK} from "./types";
import {AppThunkAction} from "../";

interface addTask {
  type: typeof CREATE_TASK;
  task: Task;
}

type KnownAction = addTask;

export const actionTasks = {
  addNewTask: (task: Task): AppThunkAction<KnownAction> => (dispatch: any) =>
    dispatch({
      type: CREATE_TASK,
      task: task,
    }),
};
