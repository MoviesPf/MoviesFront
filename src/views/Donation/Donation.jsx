import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { initiatePayment, selectDonationOption } from '../../Redux/actions';
import { NavBar } from '../../Components/NavBar/NavBar';
import css from './Donations.module.css';

const Donations = () => {
  const user = JSON.parse(localStorage.getItem('userStorage'));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedOption = useSelector((state) => state.selectedOption);
  const [sandboxInitPoint, setSandboxInitPoint] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleOptionSelect = (amount) => {
    dispatch(selectDonationOption(amount));
  };

  const handleDonation = async () => {
    if (selectedOption) {
      const donationData = {
        userId: user.id,
        title: 'Donation',
        price: selectedOption,
        quantity: 1
      };

      try {
        const response = await dispatch(initiatePayment(donationData));

        if (response && response.sandbox_init_point) {
          setSandboxInitPoint(response.sandbox_init_point);
        } else {
          console.error('URL de redirección no válida');
        }
      } catch (error) {
        console.error('Error al iniciar el pago:', error);
      }
    }
  };

  // obtengo el mensaje de éxito de los query params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successMsg = urlParams.get('message');

    // muestro el mensaje de éxito si está presente
    if (successMsg) {
      console.log('Mensaje de éxito recibido:', successMsg);
      setSuccessMessage(successMsg);
    }
  }, []);

  useEffect(() => {
    if (sandboxInitPoint) {
      console.log('Redirigiendo al sandboxInitPoint:', sandboxInitPoint);
      window.location.href = sandboxInitPoint;
    }
  }, [sandboxInitPoint]);

  return (
    <div className={css.section}>
      <NavBar />
      <div className={css.txt}>
        <h1 className={css.title}>Help us keep the service free!</h1>
      </div>
      {user.id ? (
        <div className={css.content}>
          <h2 className={css.subtitle}>Make your donation</h2>

          <div className={css.cards}>
            <div className={css.card}>
              <input
                type='radio'
                name='donationOption'
                className={css.chckMark}
                value={10}
                checked={selectedOption === 10}
                onChange={() => handleOptionSelect(10)}
              />
              <h2 className={css.monto}>10$</h2>
            </div>

            <div className={css.card}>
              <label>
                <input
                  type='radio'
                  name='donationOption'
                  className={css.chckMark}
                  value={30}
                  checked={selectedOption === 30}
                  onChange={() => handleOptionSelect(30)}
                />
                <h2 className={css.monto}>30$</h2>
              </label>
            </div>

            <div className={css.card}>
              <label>
                <input
                  type='radio'
                  name='donationOption'
                  className={css.chckMark}
                  value={50}
                  checked={selectedOption === 50}
                  onChange={() => handleOptionSelect(50)}
                />
                <h2 className={css.monto}>50$</h2>
              </label>
            </div>
          </div>
          <button className={css.btnDono} onClick={handleDonation}>
            Donate
          </button>
        </div>
      ) : (
        <div className={css.content}>
          <h2 className={css.subtitle}>Sign in to donate!!</h2>
          <div className={css.cards}>
            <div className={css.card}>
              <label>
                <h2 className={css.monto}>10$</h2>
              </label>
            </div>

            <div className={css.card}>
              <label>
                <h2 className={css.monto}>30$</h2>
              </label>
            </div>

            <div className={css.card}>
              <label>
                <h2 className={css.monto}>50$</h2>
              </label>
            </div>
          </div>

          <div className={css.noLoginMessage}>
            <div className={css.buttons}>
              <button
                className={css.btnDono}
                onClick={() => navigate('/login')}
              >
                Sign in
              </button>
              <button
                className={css.btnDono}
                onClick={() => navigate('/signin')}
              >
                Create Acount
              </button>
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <div className={css.donationSuccess}>
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Donations;
