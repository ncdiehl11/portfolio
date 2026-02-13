import { GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons'

export default function Nav() {
  return (
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
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/nicholas-diehl" target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/nickdmakesfood/" target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}
