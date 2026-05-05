import styles from "./RoverPhoto.module.css";

export default function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      {/* 🧑🏽‍🚀 Task - Week 3 */}
      {/* Create a react component for the <RoverPhoto />, which should accept the following props: */}
      {/* 1. src: source of the img; */}
      {/* 2. date: earth_date data coming from the API; */}
      {/* 3. roverName: will be in the rover object. */}
      <p>Date {date}</p>
      <img className={styles.roverPhoto} src={src} alt={roverName} />
    </div>
  );
}
