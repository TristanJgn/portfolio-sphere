import { useNavigate } from "react-router-dom";
import MainButton from "../../Components/Buttons/MainButton/MainButton"
import "./Portfolio.scss";

function Portfolio() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Take the user to the login page
  };

  if (!sessionStorage.authToken) {
    return (
      <main className="portfolio-page">
        <h1 className="portfolio-page__title">
          You must be logged in to view your portfolio.
        </h1>
        <MainButton
          buttonText={"Login"}
          onClickAction={handleLogin}
        />
      </main>
    );
  }

}

export default Portfolio;
