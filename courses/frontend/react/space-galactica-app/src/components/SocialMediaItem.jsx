import styles from "./SocialMediaItem.module.css";

export default function SocialMediaItem({ url, title, icon }) {
  return (
    <li className={styles.mediaItem}>
      <img src={icon} alt="" width={24} height={24} />
      <a href={url}>{title}</a>
    </li>
  );
}
