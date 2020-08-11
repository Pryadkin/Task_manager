import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import { taskReducer } from '../taskReducer/taskReducer';

export const rootReducer = combineReducers({
  taskReducer,
  form: reducerForm
})