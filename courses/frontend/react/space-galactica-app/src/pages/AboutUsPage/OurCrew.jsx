import styles from "./OurCrew.module.css";

const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <br />

      <div className={styles.crewGrid}>
        <section className={styles.crewCard}>
          <img
            src="/public/crew/image-anousheh-ansari.png"
            alt="Captain Sarah Vega"
          />
          <h4>Captain Sarah Vega</h4>
          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </section>
        <section className={styles.crewCard}>
          <img
            src="/public/crew/image-anousheh-ansari.png"
            alt="Dr. Leo Redding"
          />
          <h4>Dr. Leo Redding</h4>
          <p>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </section>
        <section className={styles.crewCard}>
          <img
            src="/public/crew/image-anousheh-ansari.png"
            alt="Chief Engineer Hana Lee"
          />
          <h4>Chief Engineer Hana Lee</h4>
          <p>
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </section>
        <section className={styles.crewCard}>
          <img
            src="/public/crew/image-anousheh-ansari.png"
            alt="Mission Specialist Alex Santos"
          />
          <h4>Mission Specialist Alex Santos</h4>
          <p>
            As a mission specialist, Alex's job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </section>
        <section className={styles.crewCard}>
          <img
            src="/public/crew/image-anousheh-ansari.png"
            alt="Crew Member Maya Patel"
          />
          <h4>Crew Member Maya Patel</h4>
          <p>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She's always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </section>
      </div>
    </>
  );
};

export default OurCrew;
