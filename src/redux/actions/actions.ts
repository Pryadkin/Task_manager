import {
  TTask,
  TTaskListLoading,
  TGetList,
  TGetListAsync,
  TAddTask,
  TAddTaskAsync,
  TEditTask,
  TEditTaskAsync,
  IDeleteTask,
  TDeleteTaskAsync,
  TChangeVisibilityPopup,
  TPopupDeleteVisibility,
  TChangeVisibilityTasksDetailsPage
} from './actionsTypes';

export const CHANGE_TASK_LIST_LOADING = 'CHANGE_TASK_LIST_LOADING';
export const GET_LIST = 'GET_LIST';
export const GET_LIST_ASYNC = 'GET_LIST_ASYNC';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_ASYNC = 'ADD_TASK_ASYNC';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TASK_ASYNC = 'EDIT_TASK_ASYNC';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_ASYNC = 'DELETE_TASK_ASYNC';
export const POPUP_IS_VISIBLE = 'POPUP_IS_VISIBLE';
export const POPUP_DELETE = 'POPUP_DELETE';
export const TASK_DETAILS_IS_VISIBLE = 'TASK_DETAILS_IS_VISIBLE';

export const taskListLoading = (): TTaskListLoading => ({
  type: CHANGE_TASK_LIST_LOADING
});

export const getList = (list: Array<TTask>): TGetList => ({
  type: GET_LIST,
  payload: list
});

export const getListAsync = (): TGetListAsync => ({
  type: GET_LIST_ASYNC
});

export const addTask = (id: number, title: string): TAddTask => ({
  type: ADD_TASK,
  payload: { id, title }
})

export const addTaskAsync = (title: string): TAddTaskAsync => ({
  type: ADD_TASK_ASYNC,
  payload: title
});

export const editTask = (id: number, title: string): TEditTask => ({
  type: EDIT_TASK,
  payload: { id, title }
})


export const editTaskAsync = (id: number, title: string): TEditTaskAsync => ({
  type: EDIT_TASK_ASYNC,
  payload: { id, title }
})

export const deleteTask = (id: number): IDeleteTask => ({
  type: DELETE_TASK,
  payload: id
})

export const deleteTaskAsync = (id: number): TDeleteTaskAsync => ({
  type: DELETE_TASK_ASYNC,
  payload: id
})

export const changeVisibilityPopup = (): TChangeVisibilityPopup => ({
  type: POPUP_IS_VISIBLE
})

export const popupDeleteVisibility = (): TPopupDeleteVisibility => ({
  type: POPUP_DELETE
})

export const changeVisibilityTasksDetailsPage = (): TChangeVisibilityTasksDetailsPage => ({
  type: TASK_DETAILS_IS_VISIBLE
})


