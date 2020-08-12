// import { usersAPI, profileAPI } from "../api/api";
import { Reducer } from 'redux';
import { ITaskReducer } from './taskReducerTypes';

import {
  GET_LIST,
  ADD_TASK,
  POPUP_IS_VISIBLE,
  TASK_DETAILS_IS_VISIBLE
} from '../actions/actions';

const initialState = {
  tasklist: [],
  popupIsVisible: false,
  tasksDetailsPage: false
};

export const taskReducer: Reducer<ITaskReducer> = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        tasklist: action.payload
      };
    case ADD_TASK:
      console.log(action.payload)
      return {
        ...state,
        tasklist: [action.payload, ...state.tasklist]
      };
    case POPUP_IS_VISIBLE:
      return {
        ...state,
        popupIsVisible: !state.popupIsVisible
      };
    case TASK_DETAILS_IS_VISIBLE:
      return {
        ...state,
        tasksDetailsPage: !state.tasksDetailsPage
      }
    default:
      return state;
  }
}





export default taskReducer;