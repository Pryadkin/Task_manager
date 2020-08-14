import React from 'react';
import Button from '../Button/Button';

import s from './Header.module.scss';

const Header = ({ visibleHandler }) => {

  return (
    <div className={s.container}>
      <h2 className={s.title}>
        Список задач
      </h2>

      <Button
        text="Добавить"
        onClick={visibleHandler}
        color="green"
      />
    </div>
  )
}

export default Header;