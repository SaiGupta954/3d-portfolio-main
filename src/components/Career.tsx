import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
                <h4>Data Analysis & IT Intern</h4>
                <h5>MAK Engineering Services</h5>
              </div>
              <h3>DEC 25 - NOW</h3>
            </div>
            <p>
              Developing Data Pipelines, APIs, Dashboards, & AI Tools to Optimize Solar, EV, & LED System Operations. Applying ML & Data Engineering To Improve Efficiency, Cost Forecasting, & Sustainability Initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>University of Cincinnati</h5>
              </div>
              <h3>NOV 25 – FEB 26</h3>
            </div>
            <p>
              Developing machine learning models using AI techniques to predict and minimize drone propeller noise levels for improved aeroacoustics performance. Optimized ML models by analyzing sensor data with Python, TensorFlow, and Scikit-Learn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Advisor</h4>
                <h5>University of Cincinnati</h5>
              </div>
              <h3>MAY 25 – OCT 25</h3>
            </div>
            <p>
              Deployed Dockerized RStudio environments, ensuring 100% reproducibility across 10+ RNA-seq pipelines. Reduced workflow setup time by 60% by resolving dependency conflicts in 15+ computational projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Mass Mutual</h5>
              </div>
              <h3>AUG 20 - AUG 24</h3>
            </div>
            <p>
              Developed scalable web apps and RESTful APIs using React.js and Node.js. Improved response time by 42% through database optimization and load balancing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
