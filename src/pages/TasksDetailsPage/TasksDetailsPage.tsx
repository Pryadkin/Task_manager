import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../redux/rootReducer/rootReducerType';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { InputDetails } from '../../components/common/FormsControl';

import s from './TasksDetailsPage.module.scss'

interface IParams {
  id: string
}

export interface IProps {
  isChanged: boolean
}

const maxLength20 = maxLengthCreator(20);

const TasksDetailsPage: React.FC<IProps & InjectedFormProps<{}, IProps>> = props => {
  const {
    handleSubmit,
    isChanged
  } = props;
  const { id } = useParams<IParams>();
  const history = useHistory();
  const tasklist = useSelector((state: IApplicationState) => state.taskReducer.tasklist);

  const goBackHandler = () => {
    history.push('/')
  };

  const saveHandler = () => {
    alert('save')
  };

  // {tasklist && tasklist.filter(task => +id === task.id)
  //   .map(task => task.title)
  // }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <h2>
        {`Задача №${id}`}
      </h2>

      <p>
        Краткое описание
      </p>

      <Field
        name='addTaskPopupInput'
        component={InputDetails}
        validate={[required, maxLength20]}
        className={s.addTaskPopupInput}
      />

      {isChanged
        ?
        <div
          className={s.btn}
          onClick={goBackHandler}
        >
          Вернуться в списку
          </div>
        :
        <div
          className={s.btn}
          onClick={saveHandler}
        >
          Сохранить
        </div>
      }

    </form>
  )
}

export default reduxForm<{}, IProps>({
  form: 'addTaskPopupForm',
})(TasksDetailsPage);