import { BiUpArrowAlt } from 'react-icons/bi';
import css from './BtnStart.module.css';

export const BtnStart = () => {
  return (
    <a href='#start' className={css.content}>
      <BiUpArrowAlt className={css.icon} />
    </a>
  );
};