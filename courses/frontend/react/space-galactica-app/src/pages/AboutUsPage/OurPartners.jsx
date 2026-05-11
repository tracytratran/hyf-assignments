import styles from "./OurPartners.module.css";

const businessPartners = [
  {
    imageSrc: "/public/business_partners/alphabet_logo.png",
    alt: "Alphabet Logo",
  },
  { imageSrc: "/public/business_partners/amazon_logo.png", alt: "Amazon Logo" },
  { imageSrc: "/public/business_partners/cbc_logo_white.png", alt: "CBC Logo" },
  {
    imageSrc: "/public/business_partners/microsoft_logo_white.png",
    alt: "Microsoft Logo",
  },
  { imageSrc: "/public/business_partners/nyu_logo.png", alt: "NYU Logo" },
  {
    imageSrc: "/public/business_partners/queens_logo_white.png",
    alt: "Queens Logo",
  },
  {
    imageSrc: "/public/business_partners/samsung_logo.png",
    alt: "Samsung Logo",
  },
  { imageSrc: "/public/business_partners/sodexo_logo.png", alt: "Sodexo Logo" },
];

const OurPartners = () => {
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <br />
      <section className={styles.partnersGrid}>
        {businessPartners.map((partner) => (
          <img src={partner.imageSrc} alt={partner.alt} />
        ))}
      </section>
    </>
  );
};

export default OurPartners;
