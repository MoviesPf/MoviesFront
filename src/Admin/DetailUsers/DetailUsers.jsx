import style from './DetailUsers.module.css';
import { resetUserById, deleteUser, getUsersAdmin } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { AiFillCloseCircle } from 'react-icons/ai';

const DetailUsers = () => {
  const user = useSelector((select) => select.userById);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(resetUserById());
      dispatch(getUsersAdmin())
    };
  }, []);

  const handleState = (change) => {
    if (change === 'yes') {
      dispatch(deleteUser(user.id));
    }

    setModal(false);
  };

  return (
    <div className={style.container}>
      {user.name ? (
        <div className={style.content}>
          <span className={style.name}>
            <span>Detail of</span> {user.name}
          </span>
          <img src={user.avatar} className={style.avatar} />
          <span className={style.id}>
            <span className={style.resal}>ID: </span>
            {user.id}
          </span>
          <span className={style.nickname}>
            <span className={style.resal}>Nickname: </span>
            {user.nickname}
          </span>
          <span className={style.email}>
            <span className={style.resal}>Email: </span>
            {user.email}
          </span>
          <span className={style.Reviews}>
            <span className={style.resal}>Total reviews: </span>
            {user?.Reviews ? user?.Reviews.length : 0}
          </span>
          <span className={style.banned}>
            <span className={style.resal}>Status: </span>
            {user.banned ? 'Banned' : 'Active'}
          </span>

          <div
            onClick={() => setModal(true)}
            className={user?.banned ? style.activate : style.ban}
          >
            {user?.banned ? 'Activate  ' : 'Ban'}
          </div>

          {modal ? (
            user.banned ? (
              <div className={style.modal}>
                <div className={style.modalCont}>
                  <div className={style.text}>
                    Do you want to unban the user
                    <span className={style.resal}> {user.nickname}</span>?
                  </div>
                  <div className={style.optionCont}>
                    <div
                      onClick={() => handleState('yes')}
                      className={style.option}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() => handleState('no')}
                      className={style.option}
                    >
                      No
                    </div>
                  </div>
                  <AiFillCloseCircle
                    onClick={() => setModal(false)}
                    className={style.close}
                  />
                </div>
              </div>
            ) : (
              <div className={style.modal}>
                <div className={style.modalCont}>
                  <div className={style.text}>
                    Do you want to ban the user
                    <span className={style.resal}> {user.nickname}</span>?
                  </div>
                  <div className={style.optionCont}>
                    <div
                      onClick={() => handleState('yes')}
                      className={style.option}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() => handleState('no')}
                      className={style.option}
                    >
                      No
                    </div>
                  </div>
                  <AiFillCloseCircle
                    onClick={() => setModal(false)}
                    className={style.close}
                  />
                </div>
              </div>
            )
          ) : (
            ''
          )}
        </div>
      ) : (
        <GreenLoading />
      )}
    </div>
  );
};

export default DetailUsers;
