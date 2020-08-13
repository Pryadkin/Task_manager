import React from 'react';
import { useForm } from 'react-hook-form';

import s from './AddTaskPopup.module.scss';
import closeIcon from '../../img/close.png';


export interface IProps {
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
        <div className={s.title}>
          Краткое описание
        </div>


        <input
          name="addTask"
          className={s.addTaskPopupInput}
          type="text"
          ref={register({
            maxLength: 20,
            required: true
          })}
        />

        {
          errors.addTask?.type === "required" &&
          "Your input is required"
        }
        {
          errors.addTask?.type === "maxLength" &&
          "Your input exceed maxLength"
        }

        <div
          className={s.addTaskBtn}
          onClick={onSubmit}
        >
          add task
        </div>


        <img
          className={s.closeIcon}
          onClick={popupVisibleHandler}
          src={closeIcon}
          alt="close"
        />

      </form>
    </>
  )
}

export default AddTaskPopup;