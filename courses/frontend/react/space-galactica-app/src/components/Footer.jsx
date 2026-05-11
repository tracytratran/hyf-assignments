import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialMediaItem from "./SocialMediaItem";

const socialMedia = [
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "/public/socialmedia/facebook.png",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "/public/socialmedia/instagram.png",
  },
  {
    url: "https://tiktok.com",
    title: "Tiktok",
    icon: "/public/socialmedia/tiktok.png",
  },
  {
    url: "https://linkedin.com",
    title: "LinkedIn",
    icon: "/public/socialmedia/linkedin.png",
  },
  {
    url: "https://google.com",
    title: "On the streets at night",
    icon: "/public/socialmedia/google.png",
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
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.footerLinks}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about_us">About Us</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMedia.map((item) => (
            <SocialMediaItem
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
