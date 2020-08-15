import {
  GET_LIST,
  GET_LIST_ASYNC,
  ADD_TASK,
  EDIT_TASK,
  EDIT_TASK_ASYNC,
  DELETE_TASK,
  DELETE_TASK_ASYNC,
  POPUP_IS_VISIBLE,
  POPUP_DELETE,
  TASK_DETAILS_IS_VISIBLE,
  ADD_TASK_ASYNC
} from '../actions/actions';

export type TTask = {
  id: number,
  title: string
}

export type TGetList = {
  type: typeof GET_LIST
  payload: any
};

export type TGetListAsync = {
  type: typeof GET_LIST_ASYNC
};

export type TAddTask = {
  type: typeof ADD_TASK
  payload: {
    id: number,
    title: string
  }
};

export type TAddTaskAsync = {
  type: typeof ADD_TASK_ASYNC
  payload: string
};

export type TEditTask = {
  type: typeof EDIT_TASK
  payload: {
    id: number,
    title: string
  }
};

export type TEditTaskAsync = {
  type: typeof EDIT_TASK_ASYNC
  payload: {
    id: number,
    title: string
  }
};

export type IDeleteTask = {
  type: typeof DELETE_TASK
  payload: number
};

export type TDeleteTaskAsync = {
  type: typeof DELETE_TASK_ASYNC
  payload: number
};

export type TChangeVisibilityPopup = {
  type: typeof POPUP_IS_VISIBLE
};

export type TPopupDeleteVisibility = {
  type: typeof POPUP_DELETE
};

export type TChangeVisibilityTasksDetailsPage = {
  type: typeof TASK_DETAILS_IS_VISIBLE
};
