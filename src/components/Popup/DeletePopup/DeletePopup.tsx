import React from 'react';

import s from './DeletePopup.module.scss';
import Button from '../../Button/Button';

const DeletePopup = ({ id, deleteTask }) => {
  return (
    <>
      <div className={s.text}>
        Удалить задачу?
      </div>

      <div className={s.btn}>
        <Button
          text="Удалить"
          onClick={() => deleteTask(id)}
          color="red"
        />
      </div>
    </>
  )
}

export default DeletePopup;