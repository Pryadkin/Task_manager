import {
  TTask,
  TGetList,
  TGetListAsync,
  TAddTask,
  TAddTaskAsync,
  TChangeVisibilityPopup,
  TChangeVisibilityTasksDetailsPage
} from './actionsTypes';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_ASYNC = 'GET_LIST_ASYNC';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_ASYNC = 'ADD_TASK_ASYNC';
export const EDIT_TASK_ASYNC = 'EDIT_TASK_ASYNC';
export const POPUP_IS_VISIBLE = 'POPUP_IS_VISIBLE';
export const TASK_DETAILS_IS_VISIBLE = 'TASK_DETAILS_IS_VISIBLE';

export const getList = (list: Array<TTask>): TGetList => ({
  type: GET_LIST,
  payload: list
});

export const getListAsync = (): TGetListAsync => ({
  type: GET_LIST_ASYNC
});

export const addTask = (task: TTask): TAddTask => ({
  type: ADD_TASK,
  payload: task
})

export const addTaskAsync = (task: string): TAddTaskAsync => ({
  type: ADD_TASK_ASYNC,
  payload: task
});

// export const editTaskAsync = (task: string): TEditTaskAsync => ({
//   type: EDIT_TASK_ASYNC,
//   payload: task
// });

export const changeVisibilityPopup = (): TChangeVisibilityPopup => ({
  type: POPUP_IS_VISIBLE
})

export const changeVisibilityTasksDetailsPage = (): TChangeVisibilityTasksDetailsPage => ({
  type: TASK_DETAILS_IS_VISIBLE
})


