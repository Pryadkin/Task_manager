import React from 'react';

import s from './ListIsEmpty.module.scss';

const ListIsEmpty = () => {
  return (
    <div className={s.message}>
      Задач нет.
    </div>
  )
}

export default ListIsEmpty;