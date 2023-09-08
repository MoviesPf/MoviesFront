import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiatePayment, selectDonationOption } from '../../Redux/actions';

const Donations = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const [sandboxInitPoint, setSandboxInitPoint] = useState('');

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

  useEffect(() => {
    if (sandboxInitPoint) {
      window.location.href = sandboxInitPoint;
    }
  }, [sandboxInitPoint]);

  return (
    <div>
      <h2>Selecciona una opción de donación:</h2>
      <button onClick={() => handleOptionSelect(10)}>10 pesos</button>
      <button onClick={() => handleOptionSelect(30)}>30 pesos</button>
      <button onClick={() => handleOptionSelect(50)}>50 pesos</button>
      <button onClick={handleDonation}>Donar</button>
    </div>
  );
};

export default Donations;

