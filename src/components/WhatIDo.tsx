import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Description</h4>
              <p>
                Architecting resilient Ruby on Rails backends, high-throughput Sidekiq background pipelines (100K+ records/day), RESTful API design, zero-downtime upgrades (Rails 6 to 7), and secure webhook integrations.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Ruby</div>
                <div className="what-tags">Rails 6/7/8</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Sidekiq</div>
                <div className="what-tags">ActiveRecord</div>
                <div className="what-tags">Service Objects</div>
                <div className="what-tags">ActionCable</div>
                <div className="what-tags">RSpec</div>
                <div className="what-tags">Stripe</div>
                <div className="what-tags">Zeitwerk</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PERFORMANCE</h3>
              <h4>Description</h4>
              <p>
                Eliminating N+1 queries, profiling with EXPLAIN ANALYZE, and optimizing PostgreSQL/MySQL performance. Orchestrating AWS, Docker, and CI/CD pipelines alongside streaming LLM integrations (OpenAI/Groq).
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Redis</div>
                <div className="what-tags">EXPLAIN ANALYZE</div>
                <div className="what-tags">AWS (EC2/S3)</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">GitHub Actions</div>
                <div className="what-tags">Hotwire</div>
                <div className="what-tags">OpenAI / Groq</div>
                <div className="what-tags">TypeScript</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
