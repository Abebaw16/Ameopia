import styles from "./about.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <img
          src="/myProfile.jpg"
          alt="Abebaw Tereda"
          className={styles.profileImage}
        />
        <h1>About Abebaw Tereda</h1>
        <p>
          Recent CS graduate passionate about web development and software
          engineering. I am eager to contribute to a team.
        </p>
      </section>

      <section className={styles.aspirations}>
        <h2>Career Aspirations</h2>
        <p>
          I'm eager to apply my skills and learn from experienced developers. I
          bring problem-solving skills, adaptability, and a strong work ethic to
          any team. For detailed information about my education, skills, and
          experience, please refer to my <Link to="/resume">Resume</Link>{" "}
          section.
        </p>
      </section>

      <section className={styles.contact}>
        <h2>Let's Connect</h2>
        <div className={styles.contactLinks}>
          <a
            href="mailto:abebaw.mterda@gmail.com"
            className={styles.contactLink}
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/abebaw-tereda-342206217/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Abebaw16"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </section>
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
