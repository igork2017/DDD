import {TasksState, TasksActionTypes} from "./types";

const initialState: TasksState = {
  tasks: [],
};

export function tasksReducer(
  state: TasksState = initialState,
  action: TasksActionTypes
): TasksState {
  switch (action.type) {
    case "CREATE_TASK":
      return {
        tasks: [...state.tasks, action.task],
      };
    default:
      return state;
  }
}
