import { Link } from "react-router-dom";
import "./FeatureCard.scss";

function FeatureCard({icon, featureTitle, featureDescription, link}) {
  return (
    <Link to={link} className="feature-card__link">
      <div className="feature-card">
        <div className="feature-card__icon-container">
          <img src={icon} alt="feature icon" className="feature-card__icon" />
        </div>
        <div className="feature-card__info">
          <h2 className="feature-card__title">{featureTitle}</h2>
          <p className="feature-card__description">{featureDescription}</p>
        </div>
      </div>
    </Link>
  );
}

export default FeatureCard;
