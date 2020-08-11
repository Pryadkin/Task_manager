import React from 'react';
import styles from './FormsControl.module.scss';

interface IFormControl {
  input: string,
  meta: {
    touched: string,
    error: string
  }
}

// const FormControl: React.FC<IFormControl> = ({ input, meta, ...props }) => {
//   const isError = meta.touched && meta.error;

//   return (

//   )
// };

export const Input: React.FC<IFormControl> = (props) => {

  // const isError = meta.touched && meta.error;
  console.log(props)

  return (
    // <div className={[styles.formControl, isError ? styles.error : null].join(' ')}>
    <div >
      <div>
        <input {...props} />
      </div>
      {/* {isError && <span>{meta.error}</span>} */}
    </div>
  )
};