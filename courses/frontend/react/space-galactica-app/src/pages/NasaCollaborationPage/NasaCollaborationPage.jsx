import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import RoverPhoto from "../../components/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
const API_KEY = "6V87kaVneIgHP8vr6xVebecrF2qGVQNo7SVck32F";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,

  // marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,

  // Alternative API as the Mars Rover API has been archived
  marsRoverPhoto:
    "https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2015-6-3",
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  // 🧑🏽‍🚀 Task - Week 3
  // Fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable.
  useEffect(() => {
    const fetchAstronomyPicOfTheDay = async () => {
      const astronomyPicOfTheDayResponse = await fetch(
        NASA_URLs.astronomyPicOfTheDay,
      ).then((response) => response.json());
      setDailyImg(astronomyPicOfTheDayResponse);
    };

    fetchAstronomyPicOfTheDay();
  }, []);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json(),
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here. */}
          {/* You should display the title, explanation, and the image using the url from the response */}
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
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Iterate over the roverPhoto?.photos array and display all the pictures. */}
          {roverPhoto?.photos?.length ? (
            <div className={styles.photosWrapper}>
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
