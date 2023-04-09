import { useNavigate } from "react-router-dom";
import MainButton from "../../Components/MainButton/MainButton";
import "./NotFound.scss";

function NotFound() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/"); // Takes the user back to the home page
  }

  return (
    <main className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">
          404
        </h1>
        <h2 className="not-found-page__sub-title">
          Page not found
        </h2>
        <h3 className="not-found-page__text">
          We're sorry, the page you are looking for does not exist.
        </h3>
        <MainButton
          buttonText={"Back to Home"}
          onClickAction={handleReturnHome}
        />
      </div>
    </main>
  );
}

export default NotFound;
