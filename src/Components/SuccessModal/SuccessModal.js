import "./SuccessModal.scss";

function SuccessModal({ show, titleText, bodyText }) {
  if (show === false) {
    return null;
  }

  return (
    <div className="success-modal">
      <div
        className="success-modal__content"
      >
        <div className="success-modal__top-container">
          <div className="success-modal__header">
            <h1 className="success-modal__header-title">
              {titleText}
            </h1>
          </div>
          <div className="success-modal__body">
            <p className="success-modal__body-p">
                {bodyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
