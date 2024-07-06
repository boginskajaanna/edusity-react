import React from "react";
import styles from "./Contact.module.css";
import Title from "../Title/Title";
import messageIcon from "../../assets/images/icons/msg-icon.png";
import mailIcon from "../../assets/images/icons/mail-icon.png";
import phoneIcon from "../../assets/images/icons/phone-icon.png";
import locationIcon from "../../assets/images/icons/location-icon.png";
import whiteArrow from "../../assets/images/icons/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8aef373-8078-438e-ba21-1f555b720bc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contact__inner}>
          <Title title="Contact Us" subtitle="Get In Touch" />
          <div className={styles.contact__area}>
            <div className={styles.contact__column}>
              <h4 className={styles.contact__title}>
                Send us a message <img src={messageIcon} alt="message icon" />
              </h4>
              <p className={styles.contact__text}>
                Feel free to reach out through contact form of find our contact information below. Your
                feedback, questions and suggestions are important to us as we strive to provide exceptional
                service to uor university community.
              </p>
              <address className={styles.contact__address}>
                <ul className={styles.contact__list}>
                  <li className={styles.contact__item}>
                    <a className={styles.contact__link} href="mailto:Contact@Edusity.edu">
                      <img src={mailIcon} alt="mail icon" />
                      Contact@Edusity.edu
                    </a>
                  </li>
                  <li className={styles.contact__item}>
                    <a className={styles.contact__link} href="tel:+1234567890">
                      <img src={phoneIcon} alt="phone icon" />
                      +1 123-456-7890
                    </a>
                  </li>
                  <li className={styles.contact__item}>
                    <a
                      className={styles.contact__link}
                      href="https://maps.app.goo.gl/DbxqjJdrQUbrKEYD6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={locationIcon} alt="location icon" />
                      77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className={styles.contact__column}>
              <form className={styles.contact__form} onSubmit={onSubmit}>
                <label htmlFor="name">Your name*</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" required />

                <label htmlFor="tel">Phone number*</label>
                <input type="tel" name="tel" id="tel" placeholder="Enter your mobile number" required />

                <label htmlFor="message">Write your message here*</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                ></textarea>

                <button className="btn accent-btn" type="submit">
                  Submit now <img src={whiteArrow} alt="arrow icon" />
                </button>
              </form>
              <p className={styles.form__result}>{result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
