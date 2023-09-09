import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiatePayment, selectDonationOption } from '../../Redux/actions';

const Donations = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const [sandboxInitPoint, setSandboxInitPoint] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleOptionSelect = (amount) => {
    dispatch(selectDonationOption(amount));
  };

  const handleDonation = async () => {
    if (selectedOption) {
      const donationData = {
        title: 'Donation',
        price: selectedOption,
        quantity: 1,
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
    <div>
      <h2>Selecciona una opción de donación:</h2>
      <label>
        <input
          type="radio"
          name="donationOption"
          value={10}
          checked={selectedOption === 10}
          onChange={() => handleOptionSelect(10)}
        />
        $10
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="donationOption"
          value={30}
          checked={selectedOption === 30}
          onChange={() => handleOptionSelect(30)}
        />
        $30
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="donationOption"
          value={50}
          checked={selectedOption === 50}
          onChange={() => handleOptionSelect(50)}
        />
        $50
      </label>
      <br />

      <button onClick={handleDonation}>Donar</button>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Donations;
