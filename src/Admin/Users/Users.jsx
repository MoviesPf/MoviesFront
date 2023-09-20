import { useDispatch, useSelector } from 'react-redux';
import style from './Users.module.css';
import { useNavigate } from 'react-router-dom';
import { getUserById, getUsersAdmin } from '../../Redux/actions';
import { useEffect } from 'react';
import { FaUsers, FaUsersSlash, FaRankingStar } from 'react-icons/fa6'
import { BiSolidDonateHeart } from 'react-icons/bi'

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((select) => select.allUsers);
  console.log(user);
  const info = useSelector((select) => select.usersInfo)
  console.log(info)

  const handlerClick = (id) => {
    dispatch(getUserById(id));
    navigate(`detail/${id}`);
  };

  useEffect(() => {
    dispatch(getUsersAdmin())

    // return () => {}

  }, [user, dispatch]);

  return (
    <div className={style.container}>

      <div className={style.containTitle}>
        <h1 className={style.titlePrincipal}>users administration</h1>
        <p className={style.text}>This will be your central tool to manage and supervise user information on our platform efficiently. From here, you will be able to access key functions, manage permissions, and monitor user activity. Let's start maximizing the user experience and optimizing the service!</p>
      </div>

      <h1 className={style.titleTable}>Total information related to users </h1>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.info}>
            <FaUsers className={style.icon} />
            <span className={style.infoTitle}>{info?.total}</span>
          </div>
          <span className={style.cardTitle}>TOTAL USERS</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <FaUsersSlash className={style.icon} />
            <span className={style.infoTitle}>{info?.totalBanned}</span>
          </div>
          <span className={style.cardTitle}>TOTAL BANNED</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <BiSolidDonateHeart className={style.icon} />
            <span className={style.infoTitle}>{info?.totalDonators}</span>
          </div>
          <span className={style.cardTitle}>TOTAL DONATORS</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <FaRankingStar className={style.icon} />
            <span className={style.infoTitle}>{info?.totalReviews}</span>
          </div>
          <span className={style.cardTitle}>TOTAL REVIEWS</span>
        </div>
      </div>

      <h1 className={style.titleTable}>All registered users on our website</h1>
      <div className={style.containTable}>
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
