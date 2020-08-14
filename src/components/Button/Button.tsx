import React from 'react';

import s from './Button.module.scss';

interface IButton {
  onClick: () => void,
  text: string;
  color: string;
};

const Button: React.FC<IButton> = props => {
  const {
    text,
    onClick,
    color
  } = props;

  return (
    <div
      className={[s.button, s[color]].join(' ')}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Button;