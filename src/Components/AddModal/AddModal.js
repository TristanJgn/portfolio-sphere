import { useState } from "react";
import closeIcon from "../../assets/icons/close-white.svg";
import "./AddModal.scss";

function AddModal({ coinNames, show, setShow, onClose }) {
  const [coinAmount, setCoinAmount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleAmountChange = (event) => {
    if (event.target.value === 0) {
      setCoinAmount(0);
    }
    setCoinAmount(event.target.value);
  };

  const handleSelectedCoin = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleCancel = () => {
    setShow(false);
    setCoinAmount(0);
  };

  if (show === false) {
    return null;
  }

  return (
    <div className="add-modal" onClick={() => onClose()}>
      <div className="add-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="add-modal__close" onClick={() => onClose()}>
          <img src={closeIcon} alt="close icon" />
        </button>
        <div className="add-modal__top-container">
          <div className="add-modal__header">
            <h1 className="add-modal__header-title">Add to portfolio</h1>
          </div>
          <div className="add-modal__body">
            <div className="add-modal__input-group">
              <label className="add-modal__label" htmlFor="coinName">
                Coin
              </label>
              <select
                className="add-modal__input add-modal__dropdown"
                value={selectedCoin}
                onChange={handleSelectedCoin}
              >
                {coinNames.map((coinName, index) => (
                  <option
                    key={index}
                    value={coinName}
                    className="add-modal__dropdown-item"
                  >
                    {coinName}
                  </option>
                ))}
              </select>
            </div>
            <div className="add-modal__input-group">
              <label className="add-modal__label" htmlFor="coinAmount">
                Amount of coin
              </label>
              <input
                className="add-modal__input"
                type="text"
                id="coinAmount"
                name="coinAmount"
                placeholder="0"
                onChange={handleAmountChange}
                value={coinAmount}
              ></input>
            </div>
          </div>
        </div>
        <div className="add-modal__footer">
          <button className="add-modal__cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
          <button className="add-modal__add">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
