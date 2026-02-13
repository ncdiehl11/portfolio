import './App.css'
import PhotoRotary from './PhotoRotary'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-name">
            nicholas<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link hide-mobile">About</a>
            <a href="#projects" className="nav-link hide-mobile">Projects</a>
            <a href="#contact" className="nav-link hide-mobile">Contact</a>
            <a href="https://github.com/ncdiehl11" target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-diehl" target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/nickdmakesfood/" target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nicholas-diehl" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <PhotoRotary />
        </div>
      </section>

      <main className="sections">
      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I studied Biomedical Engineering at Vanderbilt University, which 
                gave me a deep foundation in both engineering and the life sciences. Since then, 
                my career has been rooted in biotech — driven by the goal of democratizing 
                automation for scientific discovery.
              </p>
              <br />
              <p>
                I'm passionate about <strong>open science and open hardware</strong> — the idea that the tools 
                powering research should be transparent, accessible, and community-driven. That's what drew me 
                to <a href="https://opentrons.com" target="_blank" rel="noopener noreferrer">Opentrons</a>, where 
                I build software for open-source lab automation robots used by researchers around the world.
              </p>
              <br />
              <p>
                Outside of work, I'm building side projects, surfing, playing baseball, 
                exploring live music, or cooking - check out my food account 
                on <a href="https://www.instagram.com/nickdmakesfood/" target="_blank" rel="noopener noreferrer">Instagram</a>!
              </p>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Education</p>
              <div className="education-item">
                <p className="education-degree">B.E. Biomedical Engineering</p>
                <p className="education-school">Vanderbilt University</p>
              </div>
              <p className="section-label" style={{ marginBottom: '1rem', marginTop: '2rem' }}>Tech I work with</p>
              <div className="tech-grid">
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">GraphQL</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-description">
            Side projects and tools I've shipped. More coming soon.
          </p>

          <div className="project-card">
            <div className="project-demo">
              <iframe
                src="https://demo.arcade.software/ZF08RO88yQ6l49qAK9Rq?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                title="Setlist2Playlist"
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                style={{ colorScheme: 'light' }}
              />
            </div>
            <div className="project-body">
              <div className="project-header">
                <h3 className="project-name">Setlist2Playlist</h3>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Spotify API</span>
                  <span className="project-tag">Apple Music</span>
                </div>
              </div>
              <p className="project-description">
                Turn concert setlists into playlists. Search for any artist, browse their 
                past shows on Setlist.fm, and instantly create a Spotify or Apple Music 
                playlist from the songs they played. Built with React, TanStack Query, 
                and a platform-agnostic music service abstraction.
              </p>
              <div className="project-links">
                <a href="https://setlist2playlist.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live site
                </a>
                <a href="https://github.com/ncdiehl11/setlist2spotify" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-description">
            I'm always open to interesting conversations and collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:ncdiehl11@gmail.com" className="contact-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              ncdiehl11@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-diehl"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Built by <a href="https://github.com/ncdiehl11" target="_blank" rel="noopener noreferrer">Nicholas Diehl</a> &middot; 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
