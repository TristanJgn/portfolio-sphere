import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close-white.svg";
import "./AddModal.scss";

function AddModal({ coinNames, coinsList, show, setShow, onClose }) {
  const [coinAmount, setCoinAmount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(coinNames[0]);
  const [validCoinAmount, setValidCoinAmount] = useState(false);

  const handleAmountChange = (event) => {
    if (event.target.value === 0) {
      setCoinAmount(0);
    }
    setCoinAmount(event.target.value);
  };

  const handleSelectedCoin = (event) => {
    setSelectedCoin(event.target.value);
  };

  // Reset any values the user had typed prior to cancelling
  const handleCancel = () => {
    setShow(false);
    setCoinAmount(0);
    setSelectedCoin(coinNames[0]);
    setValidCoinAmount(false);
  };

  if (show === false) {
    return null;
  }

  if (!coinNames) {
    return null;
  }

  const handleAdd = () => {
    if (!coinAmount) {
        setValidCoinAmount("error");
        return;
    }

    setValidCoinAmount(true);
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
        return;
    }

    function findCoin(coin) {
        return coin.name === selectedCoin;
    }

    const foundCoin = coinsList.find(findCoin);
    const coinToAdd = {
        coin_id: foundCoin.id,
        coin_name: foundCoin.name,
        coin_symbol: foundCoin.symbol,
        coin_amount: coinAmount,
    }

    const headers = {
    Authorization: `Bearer ${jwtToken}`,
    };

    axios
    .post(
        `http://localhost:8080/portfolio`,
        coinToAdd,
        { headers }
    )
    .then((response) => {
        if (response.status === 201) {
        window.location.reload(); // Refresh the page to update the user's portfolio on screen
        }
    })
    .catch((error) => {
        return <h2>{error.message}</h2>;
    });
  };

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
                Select Coin:
              </label>
              <select
                className="add-modal__input add-modal__dropdown"
                value={selectedCoin || coinNames[0]}
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
                Amount of {selectedCoin}
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
            <div
              className={`add-modal__error ${
                validCoinAmount === "error" ? "add-modal__error--show" : ""
              }`}
            >
              <h3 className="add-modal__error-message">
                {`${!coinAmount ? "This field is required" : ""}`}
              </h3>
            </div>
          </div>
        </div>
        <div className="add-modal__footer">
          <button className="add-modal__cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
          <button className="add-modal__add" onClick={() => handleAdd()}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
