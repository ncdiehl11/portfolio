import PhotoRotary from '../PhotoRotary'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <div className="hero-label">
            <span className="hero-dot" />
            Brooklyn, NY &middot; Engineer &middot; Biotech &middot; Open Source
          </div>
          <h1>
            Hi, I'm <span className="accent">Nicholas Diehl</span>
          </h1>
          <p className="hero-description">
            Engineer with a passion for biotech, open science, and open hardware. 
            I build software that bridges complex science with great user 
            experiences — making powerful tools accessible to researchers everywhere.
          </p>
          <div className="hero-links">
            <a href="https://github.com/ncdiehl11" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nicholas-diehl" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>
        </div>
        <PhotoRotary />
      </div>
    </section>
  )
}
