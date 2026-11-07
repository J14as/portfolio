import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiRubygems } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jayeshborkar5868@gmail.com">
                jayeshborkar5868@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918766520396">
                +91 87665 20396
              </a>
            </p>
            <h4>Location</h4>
            <p>
              Nagpur, Maharashtra <br />
              <span style={{ fontSize: "14px", opacity: 0.7 }}>(Open to on-site work in Pune or Remote)</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/J14as"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <FaGithub />
              <span>Github</span>
              <MdArrowOutward className="contact-arrow" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayesh-borkar-08657a21b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <FaLinkedinIn />
              <span>Linkedin</span>
              <MdArrowOutward className="contact-arrow" />
            </a>
            <a
              href="https://rubygems.org/gems/pretty_irb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <SiRubygems />
              <span>RubyGems</span>
              <MdArrowOutward className="contact-arrow" />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jayesh Borkar</span>
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
