import style from './BtnResetFilters.module.css';
import { useDispatch } from 'react-redux';
import { VscDebugRestart } from 'react-icons/vsc';
import { getAllPrograms, resetFilters } from '../../Redux/actions';

const BtnResetFilters = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
    <VscDebugRestart
      onClick={() => {
        dispatch(getAllPrograms());
        dispatch(resetFilters());
      }}
      className={style.reset}
    />
    </div>
  );
};

export default BtnResetFilters;