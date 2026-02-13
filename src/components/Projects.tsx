import { ExternalLinkIcon, GitHubIcon } from './Icons'

const PROJECTS = [
  {
    name: 'Setlist2Playlist',
    description:
      'Turn concert setlists into playlists. Search for any artist, browse their past shows on Setlist.fm, and instantly create a Spotify or Apple Music playlist from the songs they played. Built with React, TanStack Query, and a platform-agnostic music service abstraction.',
    tags: ['React', 'TypeScript', 'Spotify API', 'Apple Music'],
    demoUrl: 'https://demo.arcade.software/ZF08RO88yQ6l49qAK9Rq?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true',
    liveUrl: 'https://setlist2playlist.vercel.app',
    sourceUrl: 'https://github.com/ncdiehl11/setlist2spotify',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-description">
          Side projects and tools I've shipped. More coming soon.
        </p>

        {PROJECTS.map((project) => (
          <div key={project.name} className="project-card">
            {project.demoUrl && (
              <div className="project-demo">
                <iframe
                  src={project.demoUrl}
                  title={project.name}
                  loading="lazy"
                  allowFullScreen
                  allow="clipboard-write"
                  style={{ colorScheme: 'light' }}
                />
              </div>
            )}
            <div className="project-body">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLinkIcon />
                    Live site
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitHubIcon size={14} />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
