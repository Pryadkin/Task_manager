import { Store } from 'redux';
// import taskReducer from '../taskReducer/taskReducer';
// import { reducer as reducerForm } from 'redux-form';
// import { IDetailState } from './detailsMovieReducer/detailsMovieReducerTypes';
import { ITaskReducer } from '../taskReducer/taskReducerTypes';

export interface IApplicationState {
  taskReducer: ITaskReducer
  form: string
}

export interface IAppProps {
  store: Store<IApplicationState>
}