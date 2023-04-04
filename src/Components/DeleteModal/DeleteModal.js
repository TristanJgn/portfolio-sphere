import axios from "axios";
import closeIcon from "../../assets/icons/close-white.svg";
import "./DeleteModal.scss";

function DeleteModal({ coin, show, onClose }) {
  if (show === false) {
    return null;
  }

  const deleteCoin = () => {
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
        return;
    }

    axios
    .delete(`http://localhost:8080/portfolio/${coin.coin_id}`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    })
    .then((response) => {
        if (response.status === 204) {
            window.location.reload(); // Refresh the page to update the user's portfolio on screen
        }
    })
    .catch((error) => {
        console.log(error);
        return <h2>{error.message}</h2>;
    });
  };

  return (
    <div className="delete-modal" onClick={() => onClose()}>
      <div
        className="delete-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="delete-modal__close" onClick={() => onClose()}>
          <img src={closeIcon} alt="close icon" />
        </button>
        <div className="delete-modal__top-container">
          <div className="delete-modal__header">
            <h1 className="delete-modal__header-title">
              Delete <strong>{coin.coin_name}</strong>?
            </h1>
          </div>
          <div className="delete-modal__body">
            <p className="delete-modal__body-p">
              Please confirm that you'd like to delete{" "}
              <strong>{coin.coin_name}</strong> from your portfolio. You won't
              be able to undo this action.
            </p>
          </div>
        </div>
        <div className="delete-modal__footer">
          <button className="delete-modal__cancel" onClick={() => onClose()}>
            Cancel
          </button>
          <button className="delete-modal__delete" onClick={() => deleteCoin()}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
