export interface ITaskReducer {
  tasklist: {
    id: number
    title: string
  }[],
  popupIsVisible: boolean,
  tasksDetailsPage: boolean,
};