import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Rails Developer</h4>
                <h5>Shadbox Infosystem • Select Car Leasing</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Led zero-downtime Rails 6 to 7 upgrade resolving 80+ gem deprecations and migrating to Zeitwerk. Re-engineered search & lead-flow APIs, eliminated N+1 queries, and integrated CRM & leasing APIs with Sidekiq fallbacks, cutting failed lead syncs to &lt;1%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & API Engineer</h4>
                <h5>Shadbox Infosystem • Labcorp (US)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Optimized slow PostgreSQL queries via EXPLAIN ANALYZE and partial indexes, cutting P1 production incidents by ~40% QoQ. Architected Sidekiq pipelines processing 100K+ daily records with idempotent retries, raising RSpec test coverage from 62% to 88%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ruby on Rails Developer</h4>
                <h5>Shadbox Infosystem • FilmConnx</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Owned end-to-end Rails 6 to 7 upgrade (90+ gems) with Capistrano zero-downtime deployment. Refactored workflows into service/form objects lifting matches by 20%, built Sidekiq migration workers, and established GitHub Actions CI with RuboCop gate.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Computer Science</h4>
                <h5>Nagpur University</h5>
              </div>
              <h3>EDU</h3>
            </div>
            <p>
              Foundational degree in DSA, DBMS, C++, SQL, and Python. Certified in Ruby (TestDome), SQL (TestDome), IBM DevOps (Coursera), and Prompt Engineering (LinkedIn Learning).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
