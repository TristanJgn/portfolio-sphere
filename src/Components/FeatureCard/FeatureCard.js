import "./FeatureCard.scss";

function FeatureCard({icon, featureTitle, featureDescription}) {
  return (
    <div class="feature-card">
      <div class="feature-card__icon-container">
        <img src={icon} alt="feature icon" class="feature-card__icon" />
      </div>
      <div class="feature-card__info">
        <h2 class="feature-card__title">{featureTitle}</h2>
        <p class="feature-card__description">
            {featureDescription}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
