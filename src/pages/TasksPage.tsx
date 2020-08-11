import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { InjectedFormProps } from 'redux-form';
import TaskList from '../components/TaskList/TaskList';
import { IApplicationState } from '../redux/rootReducer/rootReducerType';
import { addTask, changeVisibilityPopup } from '../redux/actions/actions';

import s from './TasksPage.module.scss';
import AddTaskPopupFormRedux from '../components/AddTaskPopup/AddTaskPopup';

// export interface IUser {
//   addTaskPopupInput: string
// }

const TasksPage = () => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);
  const popupIsVisible = useSelector((state: IApplicationState) => state.taskReducer.popupIsVisible);

  const onAddTask = (value: any) => {
    console.log(value)
    dispatch(addTask(value.addTaskPopupInput));
    dispatch(changeVisibilityPopup());
  };

  const popupVisibleHandler = () => {
    dispatch(changeVisibilityPopup())
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>
          Список заданий
        </h2>
        <div
          className={s.button}
          onClick={popupVisibleHandler}
        >
          Добавить
        </div>
      </div>

      {popupIsVisible
        ? <AddTaskPopupFormRedux onSubmit={onAddTask} />
        : null
      }


      {tasklist
        ? <TaskList tasklist={tasklist} />
        : null
      }
    </>
  )
}

export default TasksPage;