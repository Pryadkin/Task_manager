import { put, takeEvery, call } from 'redux-saga/effects';

import { listAPI } from '../api';

import {
  getList,
  addTask,
  GET_LIST_ASYNC,
  ADD_TASK_ASYNC,
  EDIT_TASK_ASYNC
} from './actions/actions';

import { TAddTaskAsync } from './actions/actionsTypes';

function* getListAsync() {
  try {
    const response = yield call(() => listAPI.getList());
    yield put(getList(response.data.reverse()));
  } catch (error) {
    alert(error);
  }
}

function* addTaskAsync({ payload }: TAddTaskAsync) {
  try {
    const { data } = yield call(() => listAPI.addTask(payload));
    const task = {
      id: data.id,
      title: payload
    };
    yield put(addTask(task));
  } catch (error) {
    alert(error);
  }
}

// function* editTaskAsync(id, task) {
//   try {
//     const { data } = yield call(() => listAPI.editTask(id, task));
//     console.log(data)
//     // yield put(addTask(task));
//   } catch (error) {
//     alert(error);
//   }
// }

export default function* rootSaga() {
  yield takeEvery(GET_LIST_ASYNC, getListAsync)
  yield takeEvery(ADD_TASK_ASYNC, addTaskAsync)
  // yield takeEvery(EDIT_TASK_ASYNC, editTaskAsync)
}
