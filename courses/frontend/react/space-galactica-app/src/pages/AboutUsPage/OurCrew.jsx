import styles from "./OurCrew.module.css";

const crewMembers = [
  {
    img: "/public/crew/image-anousheh-ansari.png",
    name: "Captain Sarah Vega",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    img: "/public/crew/image-anousheh-ansari.png",
    name: "Dr. Leo Redding",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    img: "/public/crew/image-anousheh-ansari.png",
    name: "Chief Engineer Hana Lee",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    img: "/public/crew/image-anousheh-ansari.png",
    name: "Mission Specialist Alex Santos",
    description:
      "As a mission specialist, Alex's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    img: "/public/crew/image-anousheh-ansari.png",
    name: "Crew Member Maya Patel",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She's always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <br />

      <div className={styles.crewGrid}>
        {crewMembers.map((member) => (
          <section className={styles.crewCard}>
            <img src={member.img} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.description}</p>
          </section>
        ))}
      </div>
    </>
  );
};

export default OurCrew;
