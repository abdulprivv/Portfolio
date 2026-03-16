import attendanceImg from "../assets/images/a.png";
import spamImg from "../assets/images/b.png";
import taskImg from "../assets/images/c.png";

export default function Projects() {

  const projects = [
    {
      title: "SMS Spam Classifier",
      desc: "A Machine Learning-based SMS Spam Classifier built with TF-IDF and Naive Bayes, deployed using Streamlit.",
      image: attendanceImg,
      github: "https://github.com/abdulprivv/Spam-Msg-Detection.git"
    },
    {
      title: "Inventory Management App",
      desc: "A simple Android app to manage products, stock, and payments efficiently.",
      image: spamImg,
      github: "https://github.com/abdulprivv/Inventory-Management-App.git"
    },
    {
      title: "React/Next.js Frontend",
      desc: "React/Next.js project implementing responsive design with fluid typography and breakpoints",
      image: taskImg,
      github: "https://github.com/abdulprivv/React-Next-js-Project.git"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}