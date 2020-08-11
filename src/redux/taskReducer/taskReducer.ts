// import { usersAPI, profileAPI } from "../api/api";
import { Reducer } from 'redux';
import { ITaskReducer } from './taskReducerTypes';

import {
  ADD_TASK,
  POPUP_IS_VISIBLE
} from '../actions/actions';


const initialState = {
  tasklist: [
    'Задача 1',
    'Задача 2',
    'Задача 3',
    'Задача 4',
  ],
  popupIsVisible: false
};

export const taskReducer: Reducer<ITaskReducer> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasklist: [action.payload, ...state.tasklist]
      };
    case POPUP_IS_VISIBLE:
      return {
        ...state,
        popupIsVisible: !state.popupIsVisible
      }
    default:
      return state;
  }
}





export default taskReducer;