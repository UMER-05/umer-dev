import { useState } from 'react'
import './App.css'
import useFundexPic from './assests/useFundexPic.png'
import rapidhypePic from './assests/rapidhypePic.png'
import digitalizeraPic from './assests/digitalizeraPic.png'
import youngoriginsPic from './assests/youngoriginsPic.png'
import consultantukPic from './assests/consultantukPic.png'
import consultanteuPic from './assests/consultanteuPic.png'

const expertise = [
  {
    title: 'Frontend',
    icon: 'layers',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Design systems'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'API design'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Platforms',
    icon: 'rocket',
    items: ['GitHub', 'Vercel', 'Netlify', 'Firebase', 'Postman', 'Figma'],
  },
]

const featurePoints = [
  {
    title: 'Strategy',
    text: 'Clear positioning, strong messaging, and user journeys that move ideas into action.',
    icon: 'spark',
  },
  {
    title: 'Product',
    text: 'Scalable React experiences shaped around performance, maintainability, and elegant UX.',
    icon: 'code',
  },
  {
    title: 'Growth',
    text: 'SEO-ready, responsive builds that keep your product fast, modern, and easy to scale.',
    icon: 'bolt',
  },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    name: 'UseFundex',
    description:
      'A SaaS CRM fintech platform engineered for intuitive financial management, investment tracking, and smarter decision making.',
    link: 'https://www.usefundex.com/',
    tags: ['SaaS', 'CRM', 'Fintech'],
    image: useFundexPic,
  },
  {
    name: 'RapidHype',
    description:
      'A modern digital marketing platform tailored for growth-focused businesses with performance-driven campaigns and brand systems.',
    link: 'https://rapidhype.pk/',
    tags: ['Marketing', 'Growth', 'Agency'],
    image: rapidhypePic,
  },
  {
    name: 'Digitalizera',
    description:
      'A bold web development agency experience built to showcase scalable product design, development, and business transformation services.',
    link: 'https://digitalizera.vercel.app/',
    tags: ['Agency', 'Web Apps', 'Brand'],
    image: digitalizeraPic,
  },
  {
    name: 'Young Origins',
    description:
      'A contemporary creative studio website built to communicate culture-led campaigns, storytelling, and brand value with clarity.',
    link: 'https://youngorigins.vercel.app/',
    tags: ['Creative', 'Branding', 'Marketing'],
    image: youngoriginsPic,
  },
  {
    name: 'Executive Advisory',
    description:
      'A premium consulting website designed for executive strategy, polished storytelling, and strong first impressions for high-value clients.',
    link: 'https://consultant-demo-eu.vercel.app/',
    tags: ['Consulting', 'B2B', 'Premium'],
    image: consultanteuPic,
  },
  {
    name: 'Consultant UK',
    description:
      'A refined business consultancy site focused on trust, expertise, and clarity for companies seeking strategic growth support.',
    link: 'https://consultant-uk.vercel.app/',
    tags: ['Consulting', 'Strategy', 'Business'],
    image: consultantukPic,
  },
]

const highlights = [
  { label: 'of experience', value: 'Years', icon: 'shield' },
  { label: 'Products shipped', value: '20+', icon: 'star' },
  { label: 'Industries served', value: '8+', icon: 'globe' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammed-umer05', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/UMER-05', icon: 'github' },
  { label: 'WhatsApp', href: 'https://wa.me/923021601044', icon: 'whatsapp' },
]

const heroBullets = ['Full-stack product builds', 'Modern SaaS experiences', 'Conversion-driven websites', 'Scalable web apps']

function Icon({ kind }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (kind) {
    case 'layers':
      return (
        <svg {...common}>
          <path d="M12 3 3 7l9 4 9-4-9-4Z" />
          <path d="m3 12 9 4 9-4" />
          <path d="m3 17 9 4 9-4" />
        </svg>
      )
    case 'server':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 8h16" />
          <path d="M4 16h16" />
          <circle cx="8" cy="8" r="1" />
          <circle cx="8" cy="16" r="1" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M14 4c3.9 1.7 6 5 6 8 0 3.1-2.4 6.7-6 8.5" />
          <path d="M10 4c-3.7 2-6 5.5-6 8.5 0 3.1 2.4 6.8 6 8.5" />
          <path d="M9 8c2 1 4 1 6 0" />
          <path d="M10 16c1.3-1.5 2.7-1.5 4 0" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...common}>
          <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <path d="m14 4-4 16" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.2 2.7 7.7 7 9 4.3-1.3 7-4.8 7-9V6l-7-3Z" />
          <path d="m9.5 12 1.6 1.6 3.4-3.4" />
        </svg>
      )
    case 'star':
      return (
        <svg {...common}>
          <path d="m12 3 2.4 5.7 6.1.6-4.6 4.1 1.4 6-5.3-3.3-5.3 3.3 1.4-6L3.5 9.3l6.1-.6L12 3Z" />
        </svg>
      )
    case 'crown':
      return (
        <svg {...common}>
          <path d="m4 16 2-7 5 3 5-3 2 7" />
          <path d="M4 16h16" />
          <path d="M8 19h8" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 8 8 6 8-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M7 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 11l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M6 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          <path d="M5 10h2v8H5z" />
          <path d="M11 10h2v1.2h.1c.3-.6 1.1-1.3 2.3-1.3 2.4 0 4.6 1.6 4.6 5v4.1h-2v-4c0-1.9-.1-4.3-2.7-4.3-2.7 0-3.2 2.1-3.2 4.2v4.1H11z" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19c-4 1.2-4-2-6-2" />
          <path d="M15 21v-3.2a2 2 0 0 0-.6-1.5c2-.2 4.1-1 4.1-4.5a3.5 3.5 0 0 0-1-2.5 3.2 3.2 0 0 0-.1-2.4s-.9-.3-2.9 1.1a10 10 0 0 0-5.2 0C6.9 4.3 6 4.6 6 4.6a3.2 3.2 0 0 0-.1 2.4 3.5 3.5 0 0 0-1 2.5c0 3.5 2.1 4.3 4.1 4.5a2 2 0 0 0-.6 1.5V21" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M5 19 6 15.3A8 8 0 1 1 9.7 19L5 19Z" />
          <path d="M8.8 7.9c.2-.4.4-.6.7-.7a.7.7 0 0 1 .6 0c.2 0 .3.2.4.4l.4 1a.7.7 0 0 1-.2.7l-.6.6s-.1.1 0 .2c.3.7 1 1.4 1.7 1.8.2.1.2.1.3.1l.7-.5a.6.6 0 0 1 .7-.1l1 .4c.2.1.3.3.3.5a.8.8 0 0 1-.3.6c-.7.9-2 1.2-3.2 1.1-1.1-.2-2.3-.9-3.2-1.8A9.5 9.5 0 0 1 5.8 10c-.4-1-.2-2 .2-2.8" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useState(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000)
    return () => window.clearTimeout(timer)
  })

  if (loading) {
    return (
      <div className="page-loader">
        <div className="loader-container">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
          <div className="loader-label">loading</div>
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand header-brand" href="#home">
          <span className="brand-mark">
            <Icon kind="crown" />
          </span>
          <span className="brand-copy">
            <strong>Umar</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Developer</p>
            <div className="hero-badge">
              <Icon kind="spark" />
              SaaS | CRM | Websites | Web Apps
            </div>
            <h1>
              Muhammed Umer <br /> software developer <br />
              Building <span className='blinkAnimation'>Modern</span><span className="accent "> Software</span> Solutions
            </h1>
            <p className="hero-text">
              I design and build modern software solutions for startups, SaaS products, and growth-focused brands from fast UI experiences to dependable backend systems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                <Icon kind="grid" />
                <span>Explore projects</span>
              </a>
              <a className="btn btn-secondary" href="mailto:uk4354314@gmail.com">
                <Icon kind="mail" />
                <span>Start a conversation</span>
              </a>
            </div>
            <div className="hero-meta">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon kind={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <div className="panel-orbits" />
              <div className="panel-orbits second" />
              <div className="panel-content">
                <p className="panel-label">Crafted for</p>
                <ul>
                  {heroBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Key highlights">
          {highlights.map((item) => (
            <div className="stat-card" key={item.label}>
              <div className="card-icon">
                <Icon kind={item.icon} />
              </div>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Thoughtful digital products shaped with clarity, pace, and confidence.</h2>
          </div>
          <div className="about-grid">
            <div className="text-card">
              <div className="card-icon">
                <Icon kind="globe" />
              </div>
              <p>
                My work blends product thinking, modern frontend architecture, and dependable backend delivery. I build interfaces that look premium, perform beautifully, and support real business goals.
              </p>
              <p>
                From complex SaaS dashboards to elegant marketing destinations, I focus on speed, maintainability, and design systems that scale with your brand.
              </p>
            </div>
            <div className="feature-stack">
              {featurePoints.map((item) => (
                <div className="feature-point" key={item.title}>
                  <div className="feature-icon">
                    <Icon kind={item.icon} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Expertise</p>
            <h2>Core technologies and delivery strengths.</h2>
          </div>
          <div className="expertise-grid">
            {expertise.map((group) => (
              <article className="expertise-card" key={group.title}>
                <div className="card-icon">
                  <Icon kind={group.icon} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Recent digital products and brand-led experiences.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-content">
                  <div className="project-top">
                    <p className="project-name">{project.name}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <Icon kind="arrow" />
                      Visit
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready to build something modern and memorable?</h2>
              <p>
                Whether you need a new product, a high-converting website, or a strong digital presence, I am ready to help shape it.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:uk4354314@gmail.com">
                <span className="contact-icon" aria-hidden="true">
                  <Icon kind="mail" />
                </span>
                uk4354314@gmail.com
              </a>
              <a href="https://wa.me/923021601044">
                <span className="contact-icon" aria-hidden="true">
                  <Icon kind="phone" />
                </span>
                +92 302 1601044
              </a>
              <a href="https://www.linkedin.com/in/muhammed-umer05" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <Icon kind="linkedin" />
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Umar. Building Modern Software Solutions.</footer>
    </div>
  )
}

export default App
