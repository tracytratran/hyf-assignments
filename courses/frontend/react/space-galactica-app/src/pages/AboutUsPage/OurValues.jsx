import styles from "./OurValues.module.css";

const values = [
  {
    order: "01",
    name: "Exploration",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    order: "02",
    name: "Innovation",
    description:
      "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
  },
  {
    order: "03",
    name: "Sustainability",
    description:
      "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    order: "04",
    name: "Community",
    description:
      "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];

const OurValues = () => {
  return (
    <>
      {values.map((value) => (
        <div className={styles.valueWrapper}>
          <h3 className={styles.valueTitle}>
            {value.order}. {value.name}
          </h3>
          <p>{value.description}</p>
        </div>
      ))}
    </>
  );
};

export default OurValues;
