import React from 'react';
import Button from '../Button/Button';

import s from './TaskListHeader.module.scss';

interface IHeader {
  visibleHandler: () => void;
};

const Header: React.FC<IHeader> = ({ visibleHandler }) => {
  return (
    <>
      <div className={s.container}>
        <h2>
          Список задач
        </h2>

        <Button
          text="Добавить"
          onClick={visibleHandler}
          color="green"
        />
      </div>
    </>
  )
}

export default Header;