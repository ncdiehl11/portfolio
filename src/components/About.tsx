const TECH_STACK = [
  'TypeScript', 'React', 'Python', 'Node.js',
  'PostgreSQL', 'AWS',
]

export default function About() {
  return (
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
              {TECH_STACK.map((tech) => (
                <span key={tech} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
