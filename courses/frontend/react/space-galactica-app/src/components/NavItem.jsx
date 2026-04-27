import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";

export default function NavItem({ title, link, isActive, order }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link to={link}>
        <b>{order}</b> {title}
      </Link>
    </li>
  );
}
