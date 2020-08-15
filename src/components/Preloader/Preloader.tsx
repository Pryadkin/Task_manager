import React from 'react';

import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={s.text}>
        Загрузка...
      </div>
    </div>
  )
}

export default Preloader;