import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Root Cause Finder",
    category: "AI for Ops / Log Analysis",
    tools: "Python, Drain3, Chroma, Ollama (llama3.1:8b), pytest",
    description: "Upload a Linux log and get the most likely root cause with the exact log lines as proof. Drain3 groups lines into patterns, Chroma retrieves past-fix cards, a local LLM explains, and plain code verifies every evidence line. 77% first-answer accuracy on 30 seeded failures vs 63% for a keyword baseline.",
    link: "https://github.com/SaiGupta954/root-cause-finder",
  },
  {
    title: "Nexus AGI",
    category: "Local AI Voice Assistant / Agentic AI",
    tools: "Python, FastAPI, Docker, WebSockets, RAG",
    description: "A private AI voice assistant that runs fully on local hardware, with RAG document search, long-term memory and agentic system control.",
    link: "#",
  },
  {
    title: "CrossMind AI",
    category: "Computer Vision / Smart Infrastructure",
    tools: "Python, OpenCV, FastAPI",
    description: "A computer vision prototype that detects a pedestrian waiting at a crosswalk and sends the WALK request through a FastAPI backend, with no button press.",
    link: "#",
  },
  {
    title: "Smart Inventory AI",
    category: "Demand Forecasting / Full Stack",
    tools: "Python, TypeScript, React, Forecasting",
    description: "A platform that forecasts demand spikes from past sales data. Working on the Python backend, running locally with no cloud APIs.",
    link: "https://github.com/SaiGupta954/Smart-Inventory-",
  },
  {
    title: "Drone Noise Prediction",
    category: "Machine Learning / Aeroacoustics",
    tools: "Python, TensorFlow, Scikit-Learn, Pandas",
    description: "ML models that predict drone propeller noise from sensor data (RPM, frequency, decibels), with feature engineering, hyperparameter tuning and evaluation across multiple validation splits.",
    link: "#",
  },
  {
    title: "Secure LangChain Chatbot",
    category: "LLM Application",
    tools: "JavaScript, LangChain, Node.js",
    description: "An LLM chatbot built with LangChain and a secured backend, exploring safe prompt handling and API key management.",
    link: "https://github.com/SaiGupta954/secure-langchain-chatbot",
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
