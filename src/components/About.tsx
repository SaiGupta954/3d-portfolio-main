import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Software AI Engineer who designs and builds AI-powered
          applications end to end: the LLM and RAG layer, the Python and
          FastAPI backend, and the React front end. I build agentic workflows
          that take actions, not just chat, and I care about AI systems that
          are easy to test, monitor and fix. M.S. in Computer Science from the
          University of Cincinnati (3.96 GPA).
        </p>
      </div>
    </div>
  );
};

export default About;
