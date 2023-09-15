import { useSelector } from 'react-redux';
import style from './DetailUsers.module.css';

const DetailUsers = () => {
  const user = useSelector(select => select.userId) 
  return (
    <div className={style.container}>
      <h1>Detail of {user.name}</h1>
      <h1>{user.id}</h1>
      <h1>{user.nickname}</h1>
      <h1>{user.email}</h1>
      <h1>{user.Reviews}</h1>
      <h1>{user.banned}</h1>
      <h1>{user.avatar}</h1>
    </div>
  );
};

export default DetailUsers;
