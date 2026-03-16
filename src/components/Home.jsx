export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <h1>Hi, I'm Abdulrahman</h1>
        <h2>MERN Stack Developer</h2>
        <span></span>
        <p>
          I build scalable full-stack web applications using MongoDB,
          Express, React, and Node.js. Passionate about clean UI,
          optimized backend systems, and solving real-world problems.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>

      <div className="home-image">
        <img src="./images/me.png" alt="Abdul Rahman" />
      </div>
    </section>
  );
}