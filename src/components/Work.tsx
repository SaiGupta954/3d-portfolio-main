import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Drone Noise Reduction using AI",
    category: "Machine Learning / Aeroacoustics",
    tools: "Python, TensorFlow, Scikit-learn",
    description:
      "Built ML models to predict and reduce drone propeller noise using aeroacoustics sensor data. Optimized models with feature engineering achieving 15% noise reduction.",
    link: "#",
  },
  {
    title: "AI Chatbot with Secure Backend",
    category: "AI & Regression Modeling",
    tools: "Python, Regression Models, RPM/Angle Datasets",
    description:
      "Built regression models using RPM/angle/noise datasets. Reduced setup time by 60% by resolving dependency and environment conflicts.",
    link: "#",
  },
  {
    title: "Single Cell RNA-Seq Analysis",
    category: "Data Pipelines / Bioinformatics",
    tools: "RNA-seq Pipeline, Genomics, Docker",
    description:
      "Automated a single-cell RNA-seq pipeline processing 2,000+ data points, reducing analysis time by 70% and improving throughput for downstream gene expression analysis by 3×.",
    link: "#",
  },
  {
    title: "Solar & EV Operations Dashboard",
    category: "Data Engineering / Visualization",
    tools: "Python, APIs, Dashboards, AWS",
    description:
      "Developed data pipelines, APIs, and dashboards to optimize Solar, EV, & LED system operations for real-world engineering use cases at MAK Engineering Services.",
    link: "#",
  },
  {
    title: "Reproducible RNA-seq Environments",
    category: "DevOps / Reproducibility Research",
    tools: "Docker, RStudio, R, CI/CD",
    description:
      "Deployed Dockerized RStudio environments ensuring 100% reproducibility across 10+ RNA-seq pipelines. Reduced workflow setup time by 60%.",
    link: "#",
  },
  {
    title: "Full Stack Web Applications",
    category: "Full Stack Development",
    tools: "React.js, Node.js, REST APIs, SQL/NoSQL",
    description:
      "Developed scalable web apps and RESTful APIs at Mass Mutual. Improved response time by 42% through database optimization and load balancing.",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    {/* Left — number + info */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="carousel-title-row">
                          <h4>{project.title}</h4>
                          {project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="carousel-ext-link"
                              data-cursor="disable"
                            >
                              <MdArrowOutward />
                            </a>
                          )}
                        </div>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
