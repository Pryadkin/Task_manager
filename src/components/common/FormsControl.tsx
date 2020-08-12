import React from 'react';
import styles from './FormsControl.module.scss';

interface IFormControl {
  input: string,
  meta: {
    touched: string,
    error: string
  }
}

export const Input: React.FC<IFormControl> = ({ input, meta, ...restProps }) => {
  const isError = meta.touched && meta.error;

  return (
    <div className={[styles.formControl, isError ? styles.error : null].join(' ')}>
      <div>
        <input {...input} {...restProps} />
      </div>
      {isError && <span>{meta.error}</span>}
    </div>
  )
};

export const InputDetails: React.FC<IFormControl> = ({ input, meta, ...restProps }) => {
  const isError = meta.touched && meta.error;

  return (
    <div className={[styles.formControl, isError ? styles.error : null].join(' ')}>
      <div>
        <input {...input} {...restProps} />
      </div>
      {isError && <span>{meta.error}</span>}
    </div>
  )
};