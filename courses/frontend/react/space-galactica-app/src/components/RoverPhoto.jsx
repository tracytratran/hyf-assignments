import styles from "./RoverPhoto.module.css";

export default function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      <p>Date {date}</p>
      <img className={styles.roverPhoto} src={src} alt={roverName} />
    </div>
  );
}
