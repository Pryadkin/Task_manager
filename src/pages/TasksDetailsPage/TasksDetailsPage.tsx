import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../redux/rootReducer/rootReducerType';
import FormTaskDetails from '../../components/FormTaskDetails/FormTaskDetails';
import { editTaskAsync } from '../../redux/actions/actions';

interface IParams {
  id: string
}

const TasksDetailsPage = () => {
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState('');

  const { id } = useParams<IParams>();
  const history = useHistory();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);

  const goBackHandler = () => {
    history.push('/')
  };

  const onAddTask = (task: string) => {
    history.push('/');
    dispatch(editTaskAsync(+id, task));
  };

  useEffect(() => {
    tasklist && tasklist.filter(task => +id === task.id)
      .forEach(task => {
        setTaskValue(task.title)
      }
      )
  }, [id, tasklist])

  return (
    <FormTaskDetails
      id={+id}
      goBackHandler={goBackHandler}
      taskValue={taskValue}
      onAddTask={onAddTask}
    />
  )
}

export default TasksDetailsPage;