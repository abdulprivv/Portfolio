import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yz3bqvl",      
      "template_zz2yyul",     
      form.current,
      "xmA19p5hXpKMC7REJ"       
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
  console.log("FULL ERROR:", error);
  alert("Failed to send message!");
}
    );
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          required 
        />

        <input 
          type="email" 
          name="from_email" 
          placeholder="Your Email" 
          required 
        />

        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: abdulrahman5815786@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/abdul-rahman-1850b2344?utm_source=portfolio</p>
      </div>
    </section>
  );
}