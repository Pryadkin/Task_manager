import { combineReducers } from 'redux';
import { taskReducer } from '../taskReducer/taskReducer';

export const rootReducer = combineReducers({
  taskReducer,
})