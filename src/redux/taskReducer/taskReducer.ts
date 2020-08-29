import { Reducer } from 'react';
import { ITaskReducer } from './taskReducerTypes';

import {
  CHANGE_TASK_LIST_LOADING,
  GET_LIST,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  POPUP_IS_VISIBLE,
  POPUP_DELETE,
  TASK_DETAILS_IS_VISIBLE
} from '../actions/actions';

const initialState: ITaskReducer = {
  tasklist: [],
  taskListIsLoading: false,
  popupIsVisible: false,
  popupDelete: false,
  tasksDetailsPage: false
};

interface IAction {
  type: string,
  payload: any
}

export const taskReducer: Reducer<ITaskReducer, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_LIST_LOADING:
      return {
        ...state,
        taskListIsLoading: !state.taskListIsLoading
      };
    case GET_LIST:
      return {
        ...state,
        tasklist: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasklist: [
          ...state.tasklist,
          action.payload
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
    case POPUP_DELETE:
      return {
        ...state,
        popupDelete: !state.popupDelete
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