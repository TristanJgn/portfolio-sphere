import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close-white.svg";
import "./EditModal.scss";

function EditModal({ coin, show, setShow, onClose }) {
  const [coinAmount, setCoinAmount] = useState(coin.coin_amount);

  const handleChange = (event) => {
    if (event.target.value === 0) {
        setCoinAmount(0);
    }
    setCoinAmount(event.target.value);
  }

  const handleCancel = () => {
    setShow(false);
    setCoinAmount(coin.coin_amount);
  }

  if (show === false) {
    return null;
  }

  const updateAmount = () => {
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
      return;
    }

    const headers = {
      "Authorization": `Bearer ${jwtToken}`,
    };

    const updatedCoinAmount = {coin_amount : coinAmount}

    axios
      .put(`http://localhost:8080/portfolio/${coin.coin_id}`, updatedCoinAmount, {headers})
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
        <button className="edit-modal__close" onClick={() => onClose()}>
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
                className="edit-modal__input"
                type="text"
                id="coinAmount"
                name="coinAmount"
                placeholder="0"
                onChange={handleChange}
                value={coinAmount}
              ></input>
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
