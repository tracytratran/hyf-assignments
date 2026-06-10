import { useLocation } from "react-router-dom";
import { useWishList } from "../contexts/WishListContext";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
    order: "01",
  },
  {
    title: "DESTINATION",
    link: "/destination",
    order: "02",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
    order: "03",
  },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { wishlistCount } = useWishList();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((navbarItem) => (
            <NavItem
              key={navbarItem.link}
              title={navbarItem.title}
              link={navbarItem.link}
              isActive={navbarItem.link === currentPath}
              order={navbarItem.order}
            />
          ))}
          <li className={styles.wishlistBadge} aria-label="Wishlist"></li>
        </ul>
        {/* 🧑🏽‍🚀 Task - Week 4 - part 3 */}
        {/* Take the count of the planets wishlist from the context and display it in the Badge. */}
        <Badge count={wishlistCount()}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
