import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiatePayment, selectDonationOption } from "../../Redux/actions";
import { NavBar } from "../../Components/NavBar/NavBar";
import css from "./Donations.module.css";

const Donations = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const [sandboxInitPoint, setSandboxInitPoint] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleOptionSelect = (amount) => {
    dispatch(selectDonationOption(amount));
  };

  const handleDonation = async () => {
    if (selectedOption) {
      const donationData = {
        title: "Donation",
        price: selectedOption,
        quantity: 1,
      };

      try {
        const response = await dispatch(initiatePayment(donationData));

        if (response && response.sandbox_init_point) {
          setSandboxInitPoint(response.sandbox_init_point);
        } else {
          console.error("URL de redirección no válida");
        }
      } catch (error) {
        console.error("Error al iniciar el pago:", error);
      }
    }
  };

  // obtengo el mensaje de éxito de los query params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successMsg = urlParams.get("message");

    // muestro el mensaje de éxito si está presente
    if (successMsg) {
      console.log("Mensaje de éxito recibido:", successMsg);
      setSuccessMessage(successMsg);
    }
  }, []);

  useEffect(() => {
    if (sandboxInitPoint) {
      console.log("Redirigiendo al sandboxInitPoint:", sandboxInitPoint);
      window.location.href = sandboxInitPoint;
    }
  }, [sandboxInitPoint]);

  return (
    <div className={css.section}>
      <NavBar />
      <div className={css.txt}>
        <h1>Help us keep the service free!</h1>
      </div>
      <div className={css.content}>
        <div className={css.img}></div>
        <h2>Make your donation</h2>

        <div className={css.cards}>
          <div className={css.card}>
            <label>
              <input
                type="radio"
                name="donationOption"
                value={10}
                checked={selectedOption === 10}
                onChange={() => handleOptionSelect(10)}
              />
              <h2>10$</h2>
            </label>
          </div>

          <div className={css.card}>
            <label>
              <input
                type="radio"
                name="donationOption"
                value={30}
                checked={selectedOption === 30}
                onChange={() => handleOptionSelect(30)}
              />
              <h2>30$</h2>
            </label>
          </div>

          <div className={css.card}>
            <label>
              <input
                type="radio"
                name="donationOption"
                value={50}
                checked={selectedOption === 50}
                onChange={() => handleOptionSelect(50)}
              />
              <h2>50$</h2>
            </label>
          </div>
          
        </div>
        <button onClick={handleDonation}>Donate</button>
      </div>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Donations;
