import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const footerLinks = [
  {
    name: "Facebook",
    link: "https://facebook.com",
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
  },
  {
    name: "Tiktok",
    link: "https://tiktok.com",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
  {
    name: "On the streets at night",
    link: "https://google.com",
  },
];

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Task - Week 2 */}
      {/* Create a new list for the Pages. */}
      {/* We need to use the <Link /> component here. */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {footerLinks.map((footerLink) => (
            <li key={footerLink.name}>
              <a href={footerLink.link}>{footerLink.name}</a>
            </li>
          ))}
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* SocialMediaItem should accept the following props: url, title, icon. */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder. */}
        </ul>
      </div>
    </footer>
  );
};
