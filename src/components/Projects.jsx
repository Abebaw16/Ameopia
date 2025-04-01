import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
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
