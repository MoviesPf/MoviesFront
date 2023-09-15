import { useDispatch, useSelector } from 'react-redux';
import style from './Users.module.css';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../Redux/actions';
import { useEffect } from 'react';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((select) => select.allUsers);
  console.log(user);

  const handlerClick = (id) => {
    dispatch(getUserById(id));
    navigate(`detail/${id}`);
  };

  // useEffect(() => {
    
  
  // }, []);

  return (
    <div className={style.container}>
      <h1 className={style.titleTable}>All registered users on our website</h1>

      <div className={style.contain}>
        <span className={style.title}>ID</span>
        <span className={style.title}>NAME</span>
        <span className={style.title}>NICKNAME</span>
        <span className={style.title}>EMAIL</span>
        <span className={style.title}>REVIEWS</span>
        <span className={style.title}>BANNED</span>
      </div>

      {user?.map((user, i) => {
        return (
          <div
            onClick={() => handlerClick(user.id)}
            key={i}
            className={style.contain}
          >
            <span className={style.content}>{user.id}</span>
            <span className={style.content}>{user.name}</span>
            <span className={style.content}>{user.nickname}</span>
            <span className={style.content}>{user.email}</span>
            <span className={style.content}>{user.Reviews.length}</span>
            <span className={style.content}>{user.banned ? 'si' : 'no'}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
