import React from 'react';

import s from './ContainerPopup.module.scss';
import { ReactComponent as ReactCloseIcon } from '../../../img/close.svg';

const ContainerPopup = ({ children, close }) => {
  return (
    <>
      <div className={s.popup}>
        {children}

        <div className={s.closeIconWrapper}>
          <ReactCloseIcon
            className={s.closeIcon}
            onClick={close}
            title="Закрыть"
          />
        </div>
      </div>

      <div className={s.background} />
    </>
  )
}

export default ContainerPopup;