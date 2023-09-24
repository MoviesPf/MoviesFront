import { useState, useEffect } from 'react';
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { Portrait } from '../../Components/Portrait/Portrait';
import { Carrusel } from '../../Components/Carrusel/Carrusel';
import { BtnStart } from '../../Components/Buttons/BtnStart';
import { Filters } from '../../Components/Filters/Filters';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import { Cards } from '../../Components/Cards/Cards';
import Paginate from '../../Components/Paginate/Paginate';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrograms, getUserPlaylists } from '../../Redux/actions';
import styled from 'styled-components';
import css from './Home.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const LineHR = styled.hr`
  border: 0;
  height: 2px;
  margin-top: 0;
  margin-bottom: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(0, 128, 0),
    rgba(0, 0, 0, 0)
  );
`;

export const Home = () => {
  const dispatch = useDispatch();
  const userInState = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem('userStorage'));

  const programs = useSelector((state) => state.programs);
  const type = useSelector((state) => state.type);
  const limit = useSelector((state) => state.totalPages);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);

  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [userStorage, setUserStorage] = useLocalStorage('userStorage', {});

  useEffect(() => {
    if (programs.length === 0) {
      dispatch(getAllPrograms());
    }
  }, [dispatch]);

  useEffect(() => {
    if (userInState.id) {
      setUserStorage(userInState);
      user?.id ? dispatch(getUserPlaylists(user.id)) : null;
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successMsg = urlParams.get('message');
    
    // Muestro el mensaje de éxito si está presente
    if (successMsg) {
      console.log('Mensaje de éxito recibido:', successMsg);
      setSuccessMessage(successMsg);
      setUserStorage({
        ...user,
        donator: true,
      });
      openModal(); // Abre el modal cuando hay un mensaje de éxito
    }
  }, []);

  return (
    <div className={css.background}>
      <span id='start' />
      <NavBar />
      {programs.length === 0 ? (
        <GreenLoading />
      ) : (
        <div className={css.content}>
          <Portrait
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />
          <Filters />

          <LineHR />
          <h1 className={css.subTitle}>Latest Releases</h1>
          <LineHR />

          <Carrusel
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />

          <LineHR />
          <div id='programs' className={css.subTitle}>
            All Programs
          </div>
          <LineHR />

          <BtnStart />
          <Cards
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
            total={
              filteredPrograms.data ? filteredPrograms.total : programs.total
            }
          />

          <Paginate
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
            limit={limit}
            type={type}
            filters={filteredPrograms.data ? 'filters' : 'all'}
          />

          <Footer />
          <div>
            {isModalOpen && (
              <div className={css.modalOverlay}>
                <div className={css.modal}>
                  <button onClick={closeModal} className={css.closeButton}>
                    X
                  </button>
                  <div className={css.logo}>
                    <BiSolidCameraMovie />
                    <h1>GreenScreen</h1>
                  </div>
                  <div className={css.modalContent}>
                    <span>{successMessage}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
