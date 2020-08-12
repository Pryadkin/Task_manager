import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Input } from '../common/FormsControl';

import s from './AddTaskPopup.module.scss';
import closeIcon from '../../img/close.png';

const maxLength20 = maxLengthCreator(20);

export interface IProps {
  popupVisibleHandler: () => void
}

const AddTaskPopup: React.FC<IProps & InjectedFormProps<{}, IProps>> = props => {
  const {
    handleSubmit,
    popupVisibleHandler
  } = props;

  return (
    <>
      <div className={s.background} />
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.title}>
          Краткое описание
        </div>

        <Field
          name='addTaskPopupInput'
          component={Input}
          validate={[required, maxLength20]}
          className={s.addTaskPopupInput}
        />

        <div
          className={s.addTaskBtn}
          onClick={handleSubmit}
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

export default reduxForm<{}, IProps>({
  form: 'addTaskPopupForm',
})(AddTaskPopup);