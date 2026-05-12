import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";
import { useWishList } from "../contexts/WishListContext";

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
          {/* <NavItem
            title={navbarItems[0].title}
            link={navbarItems[0].link}
            isActive={navbarItems[0].link === currentPath}
            order="01"
          />
          <NavItem
            title={navbarItems[1].title}
            link={navbarItems[1].link}
            isActive={navbarItems[1].link === currentPath}
            order="02"
          />
          <NavItem
            title={navbarItems[2].title}
            link={navbarItems[2].link}
            isActive={navbarItems[2].link === currentPath}
            order="03"
          /> */}
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Replace repeating content by using .map() and the previously created NavItem component. */}
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
