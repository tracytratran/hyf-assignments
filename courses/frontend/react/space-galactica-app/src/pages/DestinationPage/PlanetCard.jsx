import styles from "./PlanetCard.module.css";

export default function PlanetCard({
  name,
  description,
  thumbnail,
  isSelected,
  togglePlanetSelection,
}) {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={`Image of ${name}`}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={togglePlanetSelection}>
        {isSelected ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
      </button>
    </div>
  );
}
