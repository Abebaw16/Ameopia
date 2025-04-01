import styles from "./nav.module.css";
import Home from "./Home";
import About from "./About";
import ContactMe from "./ContactMe";
import Resume from "./Resume";
import Projects from "./Projects";
import SignIn from "./SignIn";
import Logo from "./Logo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <BrowserRouter>
      <div className={styles.nav}>
        <div className={styles.navs}>
          <div className={styles.logo}>
            <Link to="/logo">
              <img
                className={styles.image}
                src="././Ameopiaxyz.png"
                alt="Logo Unavailable"
              />
            </Link>
          </div>
          <div className={styles.home}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.about}>
            <Link to="/about">About</Link>
          </div>
          <div className={styles.contactme}>
            <Link to="/contactme">ContactMe</Link>
          </div>
          <div className={styles.resume}>
            <Link to="/resume">Resume</Link>
          </div>
          <div className={styles.projects}>
            <Link to="/projects">Projects</Link>
          </div>
          <div className={styles.signin}>
            <Link to="/signin">SignIn</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/logo" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
