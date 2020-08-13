// import { usersAPI, profileAPI } from "../api/api";
import { Reducer } from 'react';
import { } from 'react-redux';
import { ITaskReducer } from './taskReducerTypes';

import {
  GET_LIST,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  POPUP_IS_VISIBLE,
  TASK_DETAILS_IS_VISIBLE
} from '../actions/actions';

const initialState = {
  tasklist: [],
  popupIsVisible: false,
  tasksDetailsPage: false,
};

interface IAction {
  type: string,
  payload: any
}

export const taskReducer: Reducer<ITaskReducer, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        tasklist: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasklist: [
          action.payload,
          ...state.tasklist
        ]
      };
    case EDIT_TASK:
      return {
        ...state,
        tasklist: [
          action.payload,
          ...state.tasklist.filter(item => item.id !== action.payload.id)
        ].sort((a, b) => b.id - a.id)
      };
    case DELETE_TASK:
      return {
        ...state,
        tasklist: [...state.tasklist.filter(item => item.id !== action.payload)]
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