import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ramakrishna-gampa-5355a6240"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ramakrishna-gampa
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Master's In Computer Science, University of Cincinnati, Cincinnati — AUG 2024 - PRESENT
            </p>
            <h4>Leadership & Volunteer</h4>
            <p>
              Student Support Specialist, University of Cincinnati (MAY 2025 - PRESENT)<br />
              Organized AI and tech workshops, supporting students through IEEE events and hackathons.
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/SaiGupta954"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ramakrishna-gampa-5355a6240"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ramakrishna Gampa</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
