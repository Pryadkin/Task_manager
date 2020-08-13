import React, { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

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
    id,
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
      <h2>
        {`Задача №${id}`}
      </h2>

      <label htmlFor="task">
        Краткое описание
      </label>
      <input
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
        "Your input is required"
      }
      {
        errors.task?.type === "maxLength" &&
        "Your input exceed maxLength"
      }

      {taskChanged
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
          onClick={onSubmit}
        >
          Сохранить
        </div>
      }
    </form>
  )
}

export default FormTaskDetails;