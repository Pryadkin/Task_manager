import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Input } from '../common/FormsControl';

import s from './AddTaskPopup.module.scss';

interface IProps {
  message: string;
}

const maxLength20 = maxLengthCreator(20);

const AddTaskPopup: React.FC<InjectedFormProps> = (props) => {
  const {
    handleSubmit,
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
      </form>
    </>
  )
}

export default reduxForm({
  form: 'addTaskPopupForm',
})(AddTaskPopup);