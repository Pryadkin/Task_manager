import React from 'react';

import s from './ContainerPopup.module.scss';
import { ReactComponent as ReactCloseIcon } from '../../../img/close.svg';

/**
 * Container with className "containerCSSTransition" was created for CSSTransition.
 */

const ContainerPopup = ({ children, close }) => {
  return (
    <div className="containerCSSTransition">
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
    </div>
  )
}

export default ContainerPopup;