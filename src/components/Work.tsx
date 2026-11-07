import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "AscendAI",
    category: "AI SaaS & LLM Streaming",
    tools: "Rails 7, OpenAI, Groq, Sidekiq, ActionCable, Stripe, AWS",
    image: "/images/project-ascendai.webp",
    link: "https://github.com/J14as",
  },
  {
    title: "Digital Card SaaS",
    category: "Full-Stack QR & vCard Engine",
    tools: "Rails 8.1, PostgreSQL, Hotwire, Tailwind CSS, rqrcode, wicked_pdf",
    image: "/images/project-card-qr.webp",
    link: "https://github.com/J14as",
  },
  {
    title: "pretty_irb Gem",
    category: "Open-Source RubyGem (1K+ Downloads)",
    tools: "Ruby, RubyGems.org, IRB Console, Syntax Highlighting",
    image: "/images/project-pretty-irb.webp",
    link: "https://rubygems.org/gems/pretty_irb",
  },
  {
    title: "Select Car Leasing",
    category: "Enterprise Vehicle Leasing Platform (UK)",
    tools: "Rails 7, ERB, React, PostgreSQL, Sidekiq, REST APIs",
    image: "/images/project-select-car.webp",
    link: "https://github.com/J14as",
  },
  {
    title: " Healthcare",
    category: "Medical Management Platform (US)",
    tools: "Rails, Angular, Sidekiq, PostgreSQL, AWS, CloudWatch",
    image: "/images/project-labcorp.webp",
    link: "https://github.com/J14as",
  },
  {
    title: "FilmConnx",
    category: "Film Industry Job Marketplace",
    tools: "Rails 6/7, Service & Form Objects, Capistrano, GitHub Actions CI",
    image: "/images/project-filmconnx.webp",
    link: "https://github.com/J14as",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const flex = flexRef.current;
      if (!section || !flex) return;

      const calcScroll = () => {
        return flex.scrollWidth - window.innerWidth + 150;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${calcScroll()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work-section-pin",
        },
      });

      tl.to(flex, {
        x: () => -calcScroll(),
        ease: "none",
      });

      // Refresh ScrollTrigger once images load
      const images = flex.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => {
            ScrollTrigger.refresh();
          });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        tl.kill();
        ScrollTrigger.getById("work-section-pin")?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
