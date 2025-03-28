import styles from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Your Name - Web Developer & Problem Solver</h1>
          <p>
            Passionate about creating user-centric web applications and
            delivering impactful solutions.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/projects" className={styles.ctaButton}>
              View My Portfolio
            </Link>
            <a href="/your-resume.pdf" className={styles.ctaButton} download>
              Download My Resume
            </a>
            <Link to="/contactme" className={styles.ctaButton}>
              Let's Connect
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/your-profile-picture.jpg" alt="Your Profile" />
        </div>
      </section>

      <section className={styles.skills}>
        <h2>Skills and Technologies</h2>
        <div className={styles.skillsList}>
          <div className={styles.skill}>
            <img src="/react-logo.png" alt="React" />
            <span>React</span>
          </div>
          <div className={styles.skill}>
            <img src="/node-logo.png" alt="Node.js" />
            <span>Node.js</span>
          </div>
          <div className={styles.skill}>
            <img src="/python-logo.png" alt="Python" />
            <span>Python</span>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Featured Projects</h2>
        <div className={styles.projectList}>
          <div className={styles.project}>
            <img src="/project1-screenshot.jpg" alt="Project 1" />
            <h3>Project 1 Title</h3>
            <p>Brief description of Project 1.</p>
            <div className={styles.projectLinks}>
              <a
                href="/project1-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="/project1-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <img src="/project2-screenshot.jpg" alt="Project 2" />
            <h3>Project 2 Title</h3>
            <p>Brief description of Project 2.</p>
            <div className={styles.projectLinks}>
              <a
                href="/project2-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="/project2-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutMe}>
        <h2>About Me</h2>
        <p>
          I'm a dedicated web developer with a passion for creating clean,
          efficient, and user-friendly web applications. I have experience in
          [mention your experience] and am eager to contribute to a dynamic
          team. [Add more details about your background and goals].
        </p>
      </section>

      <section className={styles.contact}>
        <h2>Let's Connect</h2>
        <Link to="/contactme" className={styles.contactButton}>
          Contact Me
        </Link>
      </section>
    </div>
  );
}
