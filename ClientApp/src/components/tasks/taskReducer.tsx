export default function taskReducer(state: any = [], action: any) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, {...action.task}];
    default:
      return state;
  }
}
