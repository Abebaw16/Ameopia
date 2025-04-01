import { useState } from "react";
import styles from "./contactme.module.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowSuccess(true);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className={styles.myBackground}>
      <div className={styles.contact}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter a valid email address"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter your message here"
            required
          />
          <button type="submit">SUBMIT</button>
        </form>

        {showSuccess ? (
          <div className={styles.successMessage}>
            <p>Message sent successfully!</p>
          </div>
        ) : null}
        <div className={styles.footer}>
          <p>
            &copy;&nbsp;{new Date().getFullYear()} Ameopia. Unauthorized
            reproduction or distribution of any content on this site is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
