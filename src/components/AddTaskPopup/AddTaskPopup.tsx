import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

import s from './AddTaskPopup.module.scss';
import { ReactComponent as ReactCloseIcon } from '../../img/close.svg';

interface IProps {
  onAddTask: (addTask: string) => void,
  popupVisibleHandler: () => void
}

interface ITaskForm {
  addTask: string
};

const AddTaskPopup: React.FC<IProps> = props => {
  const {
    onAddTask,
    popupVisibleHandler
  } = props;

  const { register, handleSubmit, errors } = useForm<ITaskForm>();

  const onSubmit = handleSubmit((data) => {
    onAddTask(data.addTask);
  });

  return (
    <>
      <div className={s.background} />
      <form
        className={s.form}
        onSubmit={onSubmit}
      >
        <label htmlFor="addTask" className={s.title}>
          Краткое описание
        </label>

        <input
          id="addTask"
          name="addTask"
          className={s.input}
          type="text"
          ref={register({
            maxLength: 40,
            required: true
          })}
        />

        {
          errors.addTask?.type === "required" &&
          <span className={s.warning}>
            Заголовок не может быть пустым
          </span>
        }

        {
          errors.addTask?.type === "maxLength" &&
          <span className={s.warning}>
            Описание не должно превышать 40 символов
          </span>
        }

        <div className={s.btn}>
          <Button
            text="Создать"
            onClick={onSubmit}
            color="green"
          />
        </div>
      </form>

      <ReactCloseIcon
        className={s.closeIcon}
        onClick={popupVisibleHandler}
        title="Закрыть"
      />
    </>
  )
}

export default AddTaskPopup;