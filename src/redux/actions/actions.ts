import {
  TAddTask,
  TChangeVisibilityPopup,
} from './actionsTypes';

export const ADD_TASK = 'ADD_TASK';
export const POPUP_IS_VISIBLE = 'POPUP_IS_VISIBLE';

export const addTask = (task: string): TAddTask => ({
  type: ADD_TASK,
  payload: task
});

export const changeVisibilityPopup = (): TChangeVisibilityPopup => ({
  type: POPUP_IS_VISIBLE
})


