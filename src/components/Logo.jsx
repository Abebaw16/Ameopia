import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.image}
        src="././AmeopiaLogo.svg"
        alt="Logo Unavailable"
      />
    </div>
  );
}
