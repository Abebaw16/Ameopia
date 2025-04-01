import styles from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Ameopia</h1>
          <p>
            Ameopia is a developing digital space driven by a passion for
            staying current with the ever-evolving world of technology. We're
            exploring a wide range of computer science fields, with a particular
            interest in areas that push technological boundaries. While software
            engineering roles are of immediate interest, we are also committed
            to continuous learning and adaptation to emerging trends.
          </p>
        </div>
      </section>

      <section className={styles.futureTech}>
        <h2>Future Technologies at Ameopia</h2>
        <p>
          Ameopia is focused on exploring and understanding the potential of
          emerging technologies. We are particularly interested in areas like
          machine learning, artificial intelligence, and advanced web
          development frameworks, as these fields represent significant avenues
          for innovation and growth.
        </p>
      </section>

      <section className={styles.potentialPartners}>
        <h2>Potential Collaborations with Ameopia</h2>
        <p>
          Ameopia is open to collaborations that align with our vision of
          exploring and applying cutting-edge technologies. We are interested in
          projects that offer opportunities for learning and development, and
          that contribute to the advancement of technological solutions.
        </p>
      </section>

      <section className={styles.callToAction}>
        <h2>Connect with Ameopia</h2>
        <p>
          If you are interested in discussing potential collaborations or
          learning more about Ameopia's ongoing development and exploration of
          technologies, please feel free to contact us.
        </p>
        <Link to="/contactme" className={styles.contactButton}>
          Contact Us
        </Link>
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
