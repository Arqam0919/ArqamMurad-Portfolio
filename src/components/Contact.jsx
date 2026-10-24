import "../styles/contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const contactRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handlePointerMove = (event) => {
    const bounds = contactRef.current?.getBoundingClientRect();
    if (!bounds) return;
    contactRef.current.style.setProperty("--contact-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 2}`);
    contactRef.current.style.setProperty("--contact-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 2}`);
  };

  const resetPointer = () => {
    contactRef.current?.style.setProperty("--contact-x", "0");
    contactRef.current?.style.setProperty("--contact-y", "0");
  };

 const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  emailjs
    .sendForm(
      "service_134i83a",
      "template_wbj8jf2",
      form.current,
      "pQZZB-OjPKeh28CLK"
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);
        alert("Message sent successfully!");
        form.current.reset();
        setIsSending(false);
      },
      (error) => {
        console.log("ERROR:", error);
        console.log("STATUS:", error.status);
        console.log("TEXT:", error.text);
        alert(error.text || "Failed to send message.");
        setIsSending(false);
      }
    );
};
  return (
    <section className="contact-section" id="contact" ref={contactRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <p className="heading">CONTACT</p>

      <h2 className="heading2">Let's Work Together!</h2>

      <p className="heading3">
        Ready to discuss your next project or opportunity.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info contact-panel">

          <span className="contact-panel-orbit" aria-hidden="true" />
          <h3>Contact Information</h3>
          <p className="contact-intro">Have an idea, a question, or a project in mind? Let’s connect, exchange ideas, and build something meaningful together.</p>

          <p>
            <strong>Email</strong>
            <br />
            <a className="contact-link" href="mailto:arqammurad365@gmail.com">
              arqammurad365@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            <a className="contact-link" href="tel:+923253241576">
              +92 325 3241576
              <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p>
            <strong>Location</strong>
            <br />
            Lahore, Pakistan
          </p>

          <p>
            <strong>LinkedIn</strong>
            <br />
            <a className="contact-link" href="https://www.linkedin.com/in/arqammurad" target="_blank" rel="noreferrer">
              linkedin.com/in/arqammurad
              <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p>
            <strong>GitHub</strong>
            <br />
            <a className="contact-link" href="https://github.com/Arqam0919" target="_blank" rel="noreferrer">
              github.com/Arqam0919
              <span aria-hidden="true">↗</span>
            </a>
          </p>

        </div>

        {/* Contact Form */}

        <div className="form contact-form-card">

          <form ref={form} onSubmit={sendEmail}>

            <label htmlFor="name">
              Your Full Name
            </label>

            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="phone">
              Phone Number (Optional)
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />

            <label htmlFor="subject">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this about?"
              required
            />

            <label htmlFor="message">
              Tell me about your project or opportunity
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Describe your project..."
              required
            ></textarea>

            <button className="msgSubmit" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;