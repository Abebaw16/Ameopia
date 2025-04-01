import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.footer}>
        <p>
          &copy;&nbsp;{new Date().getFullYear()} Ameopia. Unauthorized
          reproduction or distribution of any content on this site is
          prohibited.
        </p>
      </div>
    </div>
  );
}
