export interface ITaskReducer {
  tasklist: {
    id: number
    title: string
  }[],
  popupIsVisible: boolean,
  popupDelete: boolean,
  tasksDetailsPage: boolean,
};