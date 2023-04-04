import "./MainButton.scss";

function MainButton({buttonText, onClickAction}) {
  return (
    <button className="main-button" onClick={onClickAction}>
        {buttonText}
    </button>
  );
}

export default MainButton;
