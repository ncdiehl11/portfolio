import { MailIcon, LinkedInIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's connect</h2>
        <p className="section-description">
          I'm always open to interesting conversations and collaborations.
        </p>
        <div className="contact-links">
          <a href="mailto:ncdiehl11@gmail.com" className="contact-btn">
            <MailIcon />
            ncdiehl11@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-diehl"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
