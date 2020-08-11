import {
  ADD_TASK,
  POPUP_IS_VISIBLE
} from '../actions/actions';

export type TAddTask = {
  type: typeof ADD_TASK
  payload: string
};

export type TChangeVisibilityPopup = {
  type: typeof POPUP_IS_VISIBLE
};
