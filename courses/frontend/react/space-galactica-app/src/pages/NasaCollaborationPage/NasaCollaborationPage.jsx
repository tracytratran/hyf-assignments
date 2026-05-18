import { useEffect, useState } from "react";
import { NASA_API_KEY } from "../../../config.js";
import RoverPhoto from "../../components/RoverPhoto";
import styles from "./NasaCollaborationPage.module.css";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`,

  marsRoverPhoto:
    "https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2015-6-3",
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAstronomyPicOfTheDay = async () => {
      try {
        setError(null);

        const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const astronomyPicOfTheDayData = await response.json();
        setDailyImg(astronomyPicOfTheDayData);
      } catch (error) {
        setError("Failed to load the astronomy picture. Please try again!");
      }
    };
    fetchAstronomyPicOfTheDay();
  }, []);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const response = await fetch(NASA_URLs.marsRoverPhoto);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const roverPhotoData = await response.json();
        setRoverPhoto(roverPhotoData);
      } catch (error) {
        setError("Failed to load the rover photo. Please try again!");
      }
    };
    fetchRoverPhotos();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg ? (
            <div className={styles.nasaPicOfTheDay}>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img src={dailyImg.url} alt="" className={styles.nasaImg} />
            </div>
          ) : (
            <p>Loading astronomy picture of the day...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverPhotosWrapper}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
