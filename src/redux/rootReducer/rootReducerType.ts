import { Store } from 'redux';
import { ITaskReducer } from '../taskReducer/taskReducerTypes';

export interface IApplicationState {
  taskReducer: ITaskReducer
}

export interface IAppProps {
  store: Store<IApplicationState>
}