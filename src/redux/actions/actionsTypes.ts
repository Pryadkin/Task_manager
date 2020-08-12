import {
  GET_LIST,
  GET_LIST_ASYNC,
  ADD_TASK,
  EDIT_TASK_ASYNC,
  POPUP_IS_VISIBLE,
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
  // payload: {
  //   id: number,
  //   title: string
  // }
};

export type TAddTask = {
  type: typeof ADD_TASK
  payload: TTask
};

export type TAddTaskAsync = {
  type: typeof ADD_TASK_ASYNC
  payload: string
};

export type TEditTaskAsync = {
  type: typeof EDIT_TASK_ASYNC
  payload: string
};

export type TChangeVisibilityPopup = {
  type: typeof POPUP_IS_VISIBLE
};

export type TChangeVisibilityTasksDetailsPage = {
  type: typeof TASK_DETAILS_IS_VISIBLE
};
