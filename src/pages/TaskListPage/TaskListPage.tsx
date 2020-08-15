import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import TaskListHeader from '../../components/Header/TaskListHeader';
import ListIsEmpty from '../../components/ListIsEmpty/ListIsEmpty';
import ContainerPopup from '../../components/Popup/ContainerPopup/ContainerPopup';
import AddTaskPopup from '../../components/Popup/AddTaskPopup/AddTaskPopup';
import DeletePopup from '../../components/Popup/DeletePopup/DeletePopup';
import Preloader from '../../components/Preloader/Preloader';
import {
  getListAsync,
  addTaskAsync,
  deleteTaskAsync,
  changeVisibilityPopup,
  popupDeleteVisibility
} from '../../redux/actions/actions';

import { IApplicationState } from '../../redux/rootReducer/rootReducerType';

const TaskListPage = () => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);
  const popupIsVisible = useSelector((state: IApplicationState) => state.taskReducer.popupIsVisible);
  const popupDelete = useSelector((state: IApplicationState) => state.taskReducer.popupDelete);
  const taskListIsLoading = useSelector((state: IApplicationState) => state.taskReducer.taskListIsLoading);
  const [reqOnServer, getRegOnServer] = useState(false);
  const [taskId, setTaskId] = useState<number>();

  // Загрузка данных с сервера происходит только один раз при открытии планировщика задач.
  useEffect(() => {
    if (tasklist.length === 0) {
      if (!reqOnServer) {
        getRegOnServer(true);
        dispatch(getListAsync());
      }
    }
  }, [tasklist, reqOnServer, dispatch])

  const onAddTask = (title: string) => {
    dispatch(addTaskAsync(title));
    dispatch(changeVisibilityPopup());
  };

  const popupVisibleHandler = () => {
    dispatch(changeVisibilityPopup());
  };

  const deleteTask = (id: number) => {
    dispatch(deleteTaskAsync(id));
    dispatch(popupDeleteVisibility());
  };

  const deletePopupHandler = (id: number | undefined) => {
    dispatch(popupDeleteVisibility());
    id && setTaskId(id);
  };

  return (
    <>
      <header>
        <TaskListHeader visibleHandler={popupVisibleHandler} />
      </header>

      <main>
        {tasklist.length > 0
          ?
          <TaskList
            tasklist={tasklist}
            deletePopup={deletePopupHandler}
          />
          :
          <ListIsEmpty />
        }

        {/* Preloader */}
        {taskListIsLoading
          ? <Preloader />
          : null
        }
      </main>

      {/* Всплывающие окна */}
      {popupIsVisible
        ?
        <ContainerPopup close={popupVisibleHandler}>
          <AddTaskPopup
            onAddTask={onAddTask}
            popupVisibleHandler={popupVisibleHandler}
          />
        </ContainerPopup>
        : null
      }

      {popupDelete
        ?
        <ContainerPopup close={deletePopupHandler}>
          <DeletePopup
            id={taskId}
            deleteTask={deleteTask}
          />
        </ContainerPopup>
        :
        null
      }
    </>
  )
}

export default TaskListPage;




