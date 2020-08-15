export interface ITaskReducer {
  tasklist: {
    id: number
    title: string
  }[],
  taskListIsLoading: boolean,
  popupIsVisible: boolean,
  popupDelete: boolean,
  tasksDetailsPage: boolean,
};