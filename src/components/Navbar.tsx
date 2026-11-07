import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let section = element.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          JAYESH BORKAR
        </a>
        <a
          href="mailto:jayeshborkar5868@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          jayeshborkar5868@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack">
              <HoverLinks text="TECH" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
