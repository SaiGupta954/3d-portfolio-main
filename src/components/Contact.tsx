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
            <h4>Email</h4>
            <p>
              <a href="mailto:gamparamakrishna8@gmail.com" data-cursor="disable">
                gamparamakrishna8@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S. in Computer Science, University of Cincinnati — AUG 2024 –
              APR 2026 · 3.96 GPA
            </p>
            <h4>Community</h4>
            <p>
              IEEE Member, University of Cincinnati (NOV 2024 – APR 2026)<br />
              Technical workshops, coding competitions and networking events.
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
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
