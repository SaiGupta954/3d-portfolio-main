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
                <h4>Software &amp; Systems Debugging</h4>
                <h5>Jabil</h5>
              </div>
              <h3>JUN 26 – NOW</h3>
            </div>
            <p>
              Finding root causes in Linux systems through logs, monitoring data and diagnostics. Diagnosing DHCP and DNS issues, validating patches, and writing scripts that automate health checks and log monitoring.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Full Stack Developer</h4>
                <h5>MAK Engineering Services</h5>
              </div>
              <h3>MAY 25 – APR 26</h3>
            </div>
            <p>
              Built AI-integrated full stack apps for solar, EV and LED platforms with React, Node.js and Python. Shipped REST APIs and data pipelines for real-time monitoring and cost forecasting, plus ML models for energy efficiency and fault detection, and LLM-powered features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Researcher</h4>
                <h5>University of Cincinnati</h5>
              </div>
              <h3>APR 25 – OCT 25</h3>
            </div>
            <p>
              Built and tuned ML models with Python, TensorFlow and Scikit-Learn to predict and reduce drone propeller noise from real sensor data (RPM, frequency, decibels), with end-to-end preprocessing and evaluation pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Advisor</h4>
                <h5>University of Cincinnati</h5>
              </div>
              <h3>JAN 25 – MAR 25</h3>
            </div>
            <p>
              Helped researchers unblock their data science work: debugged R package compilation and install errors, and set up analysis workflows in R and Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
