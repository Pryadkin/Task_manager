import { put, takeEvery, call } from 'redux-saga/effects';

import { listAPI } from '../api';

import {
  getList,
  addTask,
  editTask,
  deleteTask,
  taskListLoading,
  GET_LIST_ASYNC,
  ADD_TASK_ASYNC,
  EDIT_TASK_ASYNC,
  DELETE_TASK_ASYNC
} from './actions/actions';

import { TAddTaskAsync, TEditTaskAsync, TDeleteTaskAsync } from './actions/actionsTypes';

function* getListAsync() {
  try {
    yield put(taskListLoading());

    const { data, success, error } = yield call(() => listAPI.getList());

    if (success) {
      yield put(taskListLoading());
      yield put(getList(data.reverse()));
    }

    if (error) {
      yield put(taskListLoading());
      console.error(error)
    }

  } catch (error) {
    console.error(error);
  }
}

function* addTaskAsync({ payload }: TAddTaskAsync) {
  try {
    yield put(taskListLoading());

    const { id, success, error } = yield call(() => listAPI.addTask(payload));

    if (success) {
      yield put(taskListLoading());
      yield put(addTask(id, payload));
    }

    if (error) {
      yield put(taskListLoading());
      console.error(error);
    }

  } catch (error) {
    console.error(error);
  }
}

function* editTaskAsync({ payload }: TEditTaskAsync) {
  const { id, title } = payload;
  try {
    yield put(taskListLoading());

    const { success, error } = yield call(() => listAPI.editTask(id, title));

    if (success) {
      yield put(taskListLoading());
      yield put(editTask(id, title));
    };

    if (error) {
      yield put(taskListLoading());
      console.error(error);
    };

  } catch (error) {
    console.error(error);
  }
}

function* deleteTaskAsync({ payload }: TDeleteTaskAsync) {
  try {
    yield put(taskListLoading());

    const { success, error } = yield call(() => listAPI.deleteTask(payload));

    if (success) {
      yield put(taskListLoading());
      yield put(deleteTask(payload));
    };

    if (error) {
      yield put(taskListLoading());
      console.error(error);
    };

  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_LIST_ASYNC, getListAsync)
  yield takeEvery(ADD_TASK_ASYNC, addTaskAsync)
  yield takeEvery(EDIT_TASK_ASYNC, editTaskAsync)
  yield takeEvery(DELETE_TASK_ASYNC, deleteTaskAsync)
}
