import React, { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

import s from './FormTaskDetails.module.scss';

export interface IProps {
  id: number,
  taskValue: string,
  goBackHandler: () => void,
  onAddTask: (task: string) => void,
};

interface ITaskForm {
  task: string
};

const FormTaskDetails: React.FC<IProps> = props => {
  const {
    goBackHandler,
    onAddTask,
    taskValue
  } = props;

  const { register, handleSubmit, errors } = useForm<ITaskForm>();
  const [taskChanged, setTaskChanged] = useState(true);

  const onSubmit = handleSubmit((data) => {
    onAddTask(data.task);
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (taskValue !== e.target.value) {
      setTaskChanged(false)
    } else {
      setTaskChanged(true)
    }
  };

  return (
    <form
      className={s.form}
      onSubmit={onSubmit}
    >
      <label htmlFor="task" className={s.title}>
        Краткое описание
      </label>
      <input
        className={s.input}
        name="task"
        onChange={changeHandler}
        defaultValue={taskValue}
        type="text"
        ref={register({
          maxLength: 20,
          required: true
        })}
      />

      {
        errors.task?.type === "required" &&
        <div className={s.warning}>
          Заголовок не может быть пустым
        </div>
      }

      {
        errors.task?.type === "maxLength" &&
        <div className={s.warning}>
          Описание не должно превышать 40 символов
        </div>
      }

      <div className={s.btn}>
        {taskChanged
          ?
          <Button
            text="Вернуться в списку"
            onClick={goBackHandler}
            color="blue"
          />
          :
          <Button
            text="Сохранить"
            onClick={onSubmit}
            color="green"
          />
        }
      </div>
    </form>
  )
}

export default FormTaskDetails;