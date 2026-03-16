export default function About() {
  return (
    <section id="about" className="section about">
  <h2>About Me</h2>

  <div className="about-grid">

    
    <div className="about-card">
      <h3>Education</h3>

      <ul className="education-list">
        <li>
          <strong>BS Software Engineering</strong><br/>
          Capital University of Science & Technology
        </li>
        <li>
          <strong>FSC Pre-Engineering</strong><br/>
          Punjab College Ayub Park Campus
        </li>
        <li>
          <strong>Matric</strong><br/>
          Islamabad Model College for Boys (IMCB)
        </li>
      </ul>
    </div>

    
    <div className="about-card">
      <h3>Experience</h3>

      <ul className="experience-list">
        <li>
          <h4>Fauji Fertilizer Bin Qasim Limited</h4>
          <span>28/07/2025 – 08/09/2025</span>
          <p>
            Gained experience in ClickSense, WordPress, and HTML/CSS.
          </p>
        </li>

        <li>
          <h4>Iplex.co</h4>
          <span>25/11/2025 – Present</span>
          <p>
            Working on MERN Stack development including Attendance
            Management System and E-commerce web applications.
          </p>
        </li>
      </ul>
    </div>

    
    <div className="about-card">
      <h3>Skills</h3>

      <div className="skills-container">
        <span className="skill">React.js</span>
        <span className="skill">Node.js</span>
        <span className="skill">MongoDB</span>
        <span className="skill">Express.js</span>
        <span className="skill">Java</span>
        <span className="skill">Bootstrap</span>
        <span className="skill">JavaScript (ES6+)</span>
        <span className="skill">HTML/CSS</span>
        <span className="skill">Python</span>
        <span className="skill">MySQL DB</span>
      </div>
    </div>

  </div>
 </section>
  );
}