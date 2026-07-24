import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_371ja5y",
      "template_wbj8jf2",
      form.current,
      "-DS4A68Uo_wcjrv8T"
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log("ERROR:", error);
        console.log("STATUS:", error.status);
        console.log("TEXT:", error.text);
        alert(error.text || "Failed to send message.");
      }
    );
};
  return (
    <section className="contact-section" id="contact">
      <p className="heading">CONTACT</p>

      <h2 className="heading2">Let's Work Together!</h2>

      <p className="heading3">
        Ready to discuss your next project or opportunity.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <p>
            <strong>Email</strong>
            <br />
            arqammurad365@gmail.com
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            +92 325 3241576
          </p>

          <p>
            <strong>Location</strong>
            <br />
            Lahore, Pakistan
          </p>

          <p>
            <strong>LinkedIn</strong>
            <br />
            linkedin.com/in/arqammurad
          </p>

          <p>
            <strong>GitHub</strong>
            <br />
            github.com/Arqam0919
          </p>

        </div>

        {/* Contact Form */}

        <div className="form">

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

            <button className="msgSubmit" type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;