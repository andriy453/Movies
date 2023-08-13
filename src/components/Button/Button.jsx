import { Children } from 'react';
import css from './Button.module.css';

const Button = () => {
  return (
    <>
      <button className={css.button}>{Children}</button>
    </>
  );
};

export default Button;
