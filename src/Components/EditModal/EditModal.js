import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close-white.svg";
import "./EditModal.scss";

function EditModal({ coin, show, setShow, onClose }) {
  const [coinAmount, setCoinAmount] = useState(coin.coin_amount * 1); // Multiply by 1 to remove any trailing zeros
  const [validCoinAmount, setValidCoinAmount] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (event) => {
    if (event.target.value === 0) {
        setCoinAmount(0);
    }
    setCoinAmount(event.target.value);
  }

  const handleCancel = () => {
    setShow(false);
    setCoinAmount(coin.coin_amount * 1); // Multiply by 1 to remove any trailing zeros
  }

  if (show === false) {
    return null;
  }

  const updateAmount = () => {
    if (coinAmount <= 0) {
      setValidCoinAmount("error");
      return;
    }
    
    setValidCoinAmount(true);
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
      return;
    }

    const headers = {
      "Authorization": `Bearer ${jwtToken}`,
    };

    const updatedCoinAmount = {coin_amount : coinAmount}

    axios
      .put(`${API_URL}/portfolio/${coin.coin_id}`, updatedCoinAmount, {headers})
      .then((response) => {
        if (response.status === 200) {
          window.location.reload(); // Refresh the page to update the user's portfolio on screen
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  };

  return (
    <div className="edit-modal" onClick={() => onClose()}>
      <div className="edit-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="edit-modal__close" onClick={() => handleCancel()}>
          <img src={closeIcon} alt="close icon" />
        </button>
        <div className="edit-modal__top-container">
          <div className="edit-modal__header">
            <h1 className="edit-modal__header-title">
              Update your <strong>{coin.coin_name}</strong> holdings?
            </h1>
          </div>
          <div className="edit-modal__body">
            <p className="edit-modal__body-p">
              Please enter the updated amount of your
              <strong> {coin.coin_name}</strong>.
            </p>
            <div className="edit-modal__input-group">
              <label className="edit-modal__label" htmlFor="coinAmount">
                Amount of {coin.coin_name}
              </label>
              <input
                className={`edit-modal__input ${
                  validCoinAmount === "error" ? "edit-modal__input--error" : ""
                }`}
                type="number" // Use number input type to only allow numbers or a decimal
                min={0}
                id="coinAmount"
                name="coinAmount"
                placeholder="0"
                onChange={handleChange}
                value={coinAmount}
              ></input>
            </div>
            <div
              className={`edit-modal__error ${
                validCoinAmount === "error" ? "edit-modal__error--show" : ""
              }`}
            >
              <h3 className="edit-modal__error-message">
                {`${coinAmount <= 0 ? "Invalid amount" : ""}`}
              </h3>
            </div>
          </div>
        </div>
        <div className="edit-modal__footer">
          <button className="edit-modal__cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
          <button className="edit-modal__edit" onClick={() => updateAmount()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
