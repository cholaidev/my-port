import './App.css'

const profile = {
  name: 'Cholai Mani S',
  role: 'Full Stack Developer',
  phone: '+91 9361004397',
  email: 'cholaimanisrk@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cholai-mani-s-0766a6217/',
  location: '395, South Street, Eda-Keelaiur, Mannargudi, Tamil Nadu - 614013',
}

const stats = [
  { value: '4.5+', label: 'Years experience' },
  { value: '7+', label: 'Applications built' },
  { value: '30+', label: 'REST APIs developed' },
]

const skills = [
  'PHP',
  'Laravel',
  'JavaScript',
  'React.js',
  'React Native',
  'Flutter',
  'Node.js',
  'Express.js',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Tailwind CSS',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'REST API',
  'JWT',
  'Git',
  'GitHub',
  'Postman',
  'Firebase',
  'Azure AI Services',
  'Agile Scrum',
  'OOP',
  'MVC',
  'RBAC',
]

const projects = [
  {
    title: 'Bill Plus',
    type: 'Desktop + Mobile billing & inventory system',
    description:
      'Built a billing and inventory management application using Laravel, Flutter, and Electron.js with billing, payment, reporting, and production issue fixes.',
    stack: ['Laravel', 'Flutter', 'Electron.js', 'MySQL'],
    links: [
      { label: 'Windows', url: 'https://downloads.billplus.com/desktop/Billplus-latest.exe' },
      { label: 'Mac', url: 'https://downloads.billplus.com/desktop/BillPlus-latest-universal.dmg' },
      { label: 'Linux', url: 'https://downloads.billplus.com/desktop/BillPlus-latest.AppImage' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=co.adol.billplus' },
    ],
  },
  {
    title: 'FITPLUSCLUB',
    type: 'Gym management platform',
    description:
      'Created membership, attendance, billing, subscription, and inventory modules with 25+ REST APIs for efficient gym operations.',
    stack: ['Laravel', 'Flutter', 'Electron.js', 'REST APIs'],
    links: [
      { label: 'Windows', url: 'https://downloads.fitplusclub.com/desktop/FitplusClub-latest.exe' },
      { label: 'Mac', url: 'https://downloads.fitplusclub.com/desktop/FitplusClub-latest-universal.dmg' },
      { label: 'Linux', url: 'https://downloads.fitplusclub.com/desktop/FitplusClub-latest.AppImage' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=co.adol.fitplusclub' },
    ],
  },
  {
    title: 'Customer Connect',
    type: 'Customer portal',
    description:
      'Developed a customer portal with billing history, profile management, notifications, and 20+ API integrations for seamless user experience.',
    stack: ['React.js', 'Node.js', 'MongoDB'],
    links: [],
  },
  {
    title: 'Biotone',
    type: 'AI-powered authentication system',
    description:
      'Delivered a secure authentication app using React Native, React.js, Node.js, and Microsoft Azure AI Services for face and voice verification.',
    stack: ['React Native', 'Azure AI', 'Node.js'],
    links: [],
  },
  {
    title: 'Annapoorani Milk Supply',
    type: 'Milk collection & delivery app',
    description:
      'Built a Flutter and Laravel solution for milk collection, delivery tracking, billing, payment processing, and reporting workflows.',
    stack: ['Flutter', 'Laravel', 'Payments'],
    links: [],
  },
  {
    title: 'Smash Retail',
    type: 'Inventory management application',
    description:
      'Designed a stock tracking and reporting application using React.js and Node.js with optimized APIs and CRUD operations.',
    stack: ['React.js', 'Node.js', 'Inventory'],
    links: [],
  },
]

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Adol Technologies, Coimbatore',
    period: 'Jan 2022 – Present',
    detail:
      'Design, develop, test, deploy, and maintain 7+ scalable web, desktop, and mobile applications using Laravel, React.js, Flutter, React Native, Node.js, and Electron.js. Built 30+ secure RESTful APIs and optimized MySQL/PostgreSQL databases for performance.',
  },
]

const tools = [
  'VS Code',
  'GitHub',
  'XAMPP',
  'Postman',
  'Android Studio',
  'Lightroom',
  'Adobe Premiere Pro',
]

const languages = ['English (Fluent)', 'Tamil (Fluent)']

const education = [
  {
    degree: 'B.E - Mechanical Engineering',
    institution: 'Anna University - Pattukottai',
    period: 'Aug 2016 - Aug 2020',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Home">
          <span className="brand-mark">CM</span>
          {profile.name}
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Hire Me
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1>
              I build scalable digital products that solve real business problems with <span>clean code</span>.
            </h1>
            <p className="intro">
              Results-driven Full Stack Developer with 4.5+ years of experience designing,
              developing, testing, deploying, and maintaining scalable web, desktop, and mobile
              applications with PHP, Laravel, React.js, React Native, Flutter, Node.js, and modern
              databases.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <ul className="stats-list" aria-label="Key stats">
              {stats.map(({ value, label }) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel" aria-label="Profile summary">
            <div className="profile-card">
              <div className="status-pill">Available for full-time opportunities</div>
              <div className="avatar">CM</div>
              <h2>{profile.name}</h2>
              <p>Experienced in end-to-end application development, API design, database optimization, and secure deployment.</p>

              <div className="mini-grid">
                <div>
                  <span>Phone</span>
                  <strong>{profile.phone}</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>Mannargudi</strong>
                </div>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                  <span>LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">Professional Summary</p>
            <h2>Focused on scalable architecture, secure code, and business-driven solutions.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I specialize in designing and delivering robust software solutions that align with real
                business needs. My experience spans full-stack web applications, desktop systems,
                mobile apps, secure API development, database optimization, and third-party integrations.
              </p>
              <p>
                I work effectively in Agile Scrum environments and enjoy collaborating across teams to
                build reliable, maintainable, and high-performing products. I value clean architecture,
                performance optimization, secure coding practices, and continuous improvement.
              </p>
            </div>

            <div className="about-points">
              <div>
                <strong>01</strong>
                <span>Full stack development across web, desktop, and mobile</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Secure REST APIs and RBAC-based authorization</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Database performance tuning and business workflow automation</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Core technologies and engineering capabilities.</h2>
          </div>

          <div className="skills-grid" aria-label="Skills list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work across billing, retail, and AI-powered systems.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image" aria-hidden="true" />
                <div className="project-body">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.stack.map((item) => (
                      <li key={`${project.title}-${item}`}>{item}</li>
                    ))}
                  </ul>

                  {project.links && project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={`${project.title}-${link.label}`}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Professional Experience</p>
            <h2>Software engineering experience with enterprise solutions.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section info-panels">
          <div className="info-card">
            <p className="eyebrow">Tools & Software</p>
            <div className="skills-grid compact-grid">
              {tools.map((tool) => (
                <span key={tool} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <p className="eyebrow">Languages</p>
            <div className="skills-grid compact-grid">
              {languages.map((language) => (
                <span key={language} className="skill-tag">
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <p className="eyebrow">Education</p>
            {education.map((item) => (
              <div key={item.degree} className="education-item">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build reliable software solutions for your next idea.</h2>
          </div>

          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 {profile.name}. Built with React and passion.
      </footer>
    </div>
  )
}

export default App
