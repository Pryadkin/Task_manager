import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { IApplicationState } from '../../redux/rootReducer/rootReducerType';
import { addTaskAsync, deletTaskAsync, changeVisibilityPopup } from '../../redux/actions/actions';

import s from './TasksPage.module.scss';
import AddTaskPopup from '../../components/AddTaskPopup/AddTaskPopup';

const TasksPage = () => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);
  const popupIsVisible = useSelector((state: IApplicationState) => state.taskReducer.popupIsVisible);

  const onAddTask = (title: string) => {
    console.log(title)
    dispatch(addTaskAsync(title));
    dispatch(changeVisibilityPopup());
  };

  const popupVisibleHandler = () => {
    dispatch(changeVisibilityPopup())
  };

  const deleteTask = (id: number) => {
    dispatch(deletTaskAsync(id))
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
        ?
        <AddTaskPopup
          onAddTask={onAddTask}
          popupVisibleHandler={popupVisibleHandler}
        />
        : null
      }

      {tasklist
        ?
        <TaskList
          tasklist={tasklist}
          deleteTask={deleteTask}
        />
        : null
      }
    </>
  )
}

export default TasksPage;