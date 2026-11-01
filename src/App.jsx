import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFundexPic from './assests/useFundexPic.webp'
import souanagouveiaPic from './assests/anaWebsiteExample.webp'
import rapidhypePic from './assests/rapidhypePic.webp'
import archangelPic from './assests/archangelPic.webp'
import multiTenantCrmPic from './assests/multiTenantCrmPic.webp'
import archangelPic2 from './assests/archangelPic2.webp'
import archangelPic3 from './assests/archangelPic3.webp'
import archangelPic4 from './assests/archangelPic4.webp'
import multiTenantCrmPic2 from './assests/multiTenantCrmPic2.webp'
import rkfPic from './assests/rkfPic.webp'
import digitalizeraPic from './assests/digitalizeraPic.webp'
import youngoriginsPic from './assests/youngoriginsPic.webp'
import consultantukPic from './assests/consultantukPic.webp'
import consultanteuPic from './assests/consultanteuPic.webp'

// 800px copies of each screenshot, so phones and the two-column grid don't download 1400px files
const largeImages = import.meta.glob('./assests/*.webp', { eager: true, import: 'default' })
const smallImages = import.meta.glob('./assests/sm/*.webp', { eager: true, import: 'default' })
const smallByLarge = Object.fromEntries(
  Object.entries(largeImages).map(([path, url]) => [url, smallImages[path.replace('./assests/', './assests/sm/')]]),
)
const PROJECT_IMAGE_SIZES = '(max-width: 920px) calc(100vw - 2rem), 590px'

function responsiveImage(src) {
  const small = smallByLarge[src]
  return small ? { srcSet: `${small} 800w, ${src} 1400w`, sizes: PROJECT_IMAGE_SIZES } : {}
}

const expertise = [
  {
    title: 'Frontend',
    icon: 'layers',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Design systems'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Solana / Web3'],
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

// category: 'app' = SaaS platforms, dashboards and web apps; 'website' = marketing and brand sites
const projects = [
  {
    name: 'UseFundex',
    category: 'app',
    description:
      'A SaaS CRM fintech platform engineered for intuitive financial management, investment tracking, and smarter decision making.',
    link: 'https://www.usefundex.com/',
    tags: ['SaaS', 'CRM', 'Fintech'],
    image: useFundexPic,
  },
  {
    name: 'Multi-Tenant CRM',
    category: 'app',
    description:
      'A multi-tenant SaaS CRM with isolated workspaces, role-based access, and Kanban lead pipelines for managing contacts, deals, tasks, and campaigns.',
    tags: ['SaaS', 'CRM', 'Multi-Tenant'],
    image: multiTenantCrmPic,
    gallery: [multiTenantCrmPic, multiTenantCrmPic2],
  },
  {
    name: 'ArchAngel Trading Bot',
    category: 'app',
    description:
      'An automated Solana trading bot with a live dashboard for new token discovery, real-time trades, risk management, and portfolio P&L tracking.',
    tags: ['Web3', 'Trading Bot', 'Solana'],
    image: archangelPic,
    gallery: [archangelPic, archangelPic2, archangelPic3, archangelPic4],
  },
  {
    name: 'Rohail Kamal Fragrance',
    category: 'app',
    description:
      'A full e-commerce store for a fragrance brand, with a custom admin dashboard to manage products, categories, stock, offers, and customer orders.',
    tags: ['E-commerce', 'Admin Dashboard', 'Fragrance'],
    image: rkfPic,
  },
  {
    name: 'RapidHype',
    category: 'website',
    description:
      'A modern digital marketing platform tailored for growth-focused businesses with performance-driven campaigns and brand systems.',
    link: 'https://rapidhype.pk/',
    tags: ['Marketing', 'Growth', 'Agency'],
    image: rapidhypePic,
  },
  {
    name: 'Ana Gouveia',
    category: 'website',
    description:
      'Ana Gouveia from Brazil wanted a completely new modern personal website. I designed and developed it from scratch using a new stack, focusing on a polished, responsive, and engaging user experience.',
    link: 'https://souanagouveia.vercel.app/',
    tags: ['Portfolio', 'Personal', 'Brand'],
    image: souanagouveiaPic,
  },
  {
    name: 'Digitalizera',
    category: 'website',
    description:
      'A bold web development agency experience built to showcase scalable product design, development, and business transformation services.',
    link: 'https://digitalizera.vercel.app/',
    tags: ['Agency', 'Web Apps', 'Brand'],
    image: digitalizeraPic,
  },
  {
    name: 'Young Origins',
    category: 'website',
    description:
      'A contemporary creative studio website built to communicate culture-led campaigns, storytelling, and brand value with clarity.',
    link: 'https://youngorigins.vercel.app/',
    tags: ['Creative', 'Branding', 'Marketing'],
    image: youngoriginsPic,
  },
  {
    name: 'Executive Advisory',
    category: 'website',
    description:
      'A premium consulting website designed for executive strategy, polished storytelling, and strong first impressions for high-value clients.',
    link: 'https://consultant-demo-eu.vercel.app/',
    tags: ['Consulting', 'B2B', 'Premium'],
    image: consultanteuPic,
  },
  {
    name: 'Consultant UK',
    category: 'website',
    description:
      'A refined business consultancy site focused on trust, expertise, and clarity for companies seeking strategic growth support.',
    link: 'https://consultant-uk.vercel.app/',
    tags: ['Consulting', 'Strategy', 'Business'],
    image: consultantukPic,
  },
]

const projectFilters = [
  { id: 'all', label: 'All work' },
  { id: 'app', label: 'SaaS & web apps' },
  { id: 'website', label: 'Websites' },
]

const INITIAL_PROJECT_COUNT = 6

const highlights = [
  { label: 'Products shipped', value: '20+', icon: 'star' },
  { label: 'Industries served', value: '8+', icon: 'globe' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammed-umer05', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/UMER-05', icon: 'github' },
  { label: 'WhatsApp', href: 'https://wa.me/923021601044', icon: 'whatsapp' },
]

const heroFacts = [
  { label: 'Based in', value: 'Pakistan' },
  { label: 'Time zone', value: 'PKT (UTC+5)' },
  { label: 'Focus', value: 'SaaS, CRMs & web apps' },
  { label: 'Core stack', value: 'React, Next.js, Node.js' },
]

const processSteps = [
  {
    title: 'Discovery',
    text: 'We talk through your goals, users, and scope, and agree on a clear plan and timeline.',
  },
  {
    title: 'Design',
    text: 'I map the user journeys and design the interface before any code is written.',
  },
  {
    title: 'Build',
    text: 'Frontend, backend, and database come together, with regular demos so you see progress.',
  },
  {
    title: 'Launch & support',
    text: 'I deploy, test on real devices, and stay on hand for fixes and next steps.',
  },
]

// Real client reviews. Only add reviews clients actually wrote.
const testimonials = [
  {
    name: 'Jordan Pearcey',
    country: 'United Kingdom',
    rating: 5,
    quote:
      'Muhammad did an amazing job working on my website. He was very professional throughout, listened to what I needed, and completed the job very quickly. I will definitely use him again and would recommend him to anyone who needs their web. Thanks a lot, I appreciate the effort you have put into it.',
  },
  {
    name: 'Spiros Fourkiotis',
    country: 'Greece',
    rating: 5,
    quote: 'Great work. A highly premium design, and very professional.',
  },
]

const CONTACT_EMAIL = 'uk4354314@gmail.com'

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

const SLIDE_INTERVAL_MS = 3500

function ProjectSlider({ images, name }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [nearView, setNearView] = useState(false)
  const sliderRef = useRef(null)

  // Defer loading the extra slides until the slider is close to the viewport,
  // so they don't compete with the hero photo on first load.
  useEffect(() => {
    const node = sliderRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion || !nearView) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused, nearView, images.length])

  return (
    <div
      ref={sliderRef}
      className="project-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="project-slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {(nearView ? images : images.slice(0, 1)).map((src, i) => (
          <img
            key={src}
            src={src}
            {...responsiveImage(src)}
            alt={`${name} screenshot ${i + 1} of ${images.length}`}
            loading={i === 0 ? 'lazy' : 'eager'}
            decoding="async"
            aria-hidden={i !== index}
          />
        ))}
      </div>
      <div className="project-slider-dots">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={i === index ? 'active' : ''}
            aria-label={`Show ${name} screenshot ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [projectFilter, setProjectFilter] = useState('all')
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Close the mobile menu on Escape, and lock page scroll while it is open.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 761px)')
    const onResize = () => {
      if (desktop.matches) setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    projectFilter === 'all' ? projects : projects.filter((project) => project.category === projectFilter)
  const canCollapse = filteredProjects.length > INITIAL_PROJECT_COUNT
  const visibleProjects =
    canCollapse && !showAllProjects ? filteredProjects.slice(0, INITIAL_PROJECT_COUNT) : filteredProjects
  const currentYear = new Date().getFullYear()

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {mobileMenuOpen && <div className="nav-backdrop" onClick={() => setMobileMenuOpen(false)} />}

      <header className={`topbar ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <a className="brand header-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            MU
          </span>
          <span className="brand-copy">
            <strong>Umer</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? 'active' : ''}
              aria-current={activeSection === item.href ? 'true' : undefined}
              style={{ '--i': i }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="nav-index">0{i + 1}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-arrow">
                <Icon kind="arrow" />
              </span>
            </a>
          ))}
          <a
            className="nav-cta"
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ '--i': navItems.length }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon kind="mail" />
            <span>Let&apos;s talk</span>
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Muhammed Umer · Full Stack Developer</p>
            <h1>
              I build <span className="accent">SaaS platforms, CRMs</span> and web apps that ship.
            </h1>
            <p className="hero-text">
              I design and build modern software for startups, SaaS products, and growth-focused brands, from fast UI
              experiences to dependable backend systems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                <Icon kind="grid" />
                <span>Explore projects</span>
              </a>
              <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}`}>
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
              <figure className="panel-photo">
                <img
                  src="/umer-dev.webp"
                  srcSet="/umer-dev-400.webp 400w, /umer-dev.webp 680w"
                  sizes="(max-width: 920px) min(calc(100vw - 2rem), 560px), 430px"
                  alt="Muhammed Umer, full stack developer"
                  width="680"
                  height="590"
                  fetchPriority="high"
                />
                <figcaption>
                  <strong>Muhammed Umer</strong>
                  <span>Freelance software developer</span>
                </figcaption>
              </figure>
              <div className="panel-content">
                <p className="panel-label">Quick facts</p>
                <dl className="panel-facts">
                  {heroFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
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
            <h2>One developer, from first idea to launched product.</h2>
          </div>
          <div className="about-grid">
            <div className="text-card">
              <div className="card-icon">
                <Icon kind="globe" />
              </div>
              <p>
                I&apos;m Muhammed Umer, a freelance full-stack developer based in Pakistan. I work with
                startups and businesses around the world, from a fundraising platform and a multi-tenant CRM to brand
                websites for clients in Brazil and Kenya.
              </p>
              <p>
                I handle the whole build: product thinking and interface design, React and Next.js frontends, Node.js
                APIs, databases, and deployment. You get one point of contact from the first call to launch day.
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

        <section className="process-band" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2 id="process-title">A simple process, with no surprises.</h2>
          </div>
          <ol className="process-steps">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="process-number">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Projects &amp; Experience</p>
            <h2>Real products I&apos;ve designed, built, and shipped for clients.</h2>
            <p className="section-subtitle">
              From SaaS platforms, CRMs, and a Solana trading bot to marketing and business websites, each project
              below was delivered end to end, from UI design to deployment.
            </p>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={projectFilter === filter.id ? 'active' : ''}
                aria-pressed={projectFilter === filter.id}
                onClick={() => {
                  setProjectFilter(filter.id)
                  setShowAllProjects(false)
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.name}>
                {project.gallery ? (
                  <ProjectSlider images={project.gallery} name={project.name} />
                ) : (
                  <img
                    src={project.image}
                    {...responsiveImage(project.image)}
                    alt={`${project.name} website screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="project-content">
                  <div className="project-top">
                    <h3 className="project-name">{project.name}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit the ${project.name} website (opens in a new tab)`}
                      >
                        <Icon kind="arrow" />
                        Visit
                      </a>
                    )}
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
          {canCollapse && (
            <div className="project-more">
              <button
                type="button"
                className="btn btn-secondary"
                aria-expanded={showAllProjects}
                onClick={() => setShowAllProjects((prev) => !prev)}
              >
                {showAllProjects ? 'Show fewer projects' : `Show all ${filteredProjects.length} projects`}
              </button>
            </div>
          )}
        </section>

        <section id="reviews" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Client reviews</p>
            <h2>What clients say after we ship.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((review) => (
              <figure className="testimonial-card" key={review.name}>
                <div className="testimonial-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Icon kind="star" key={i} />
                  ))}
                </div>
                <blockquote>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                </blockquote>
                <figcaption>
                  <span className="testimonial-avatar" aria-hidden="true">
                    {review.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.country}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Ready to build something modern and memorable?</h2>
              <p>
                Whether you need a new product, a high-converting website, or a strong digital presence, I am ready to
                help shape it. Tell me what you&apos;re building and I&apos;ll reply with next steps.
              </p>
              <a
                className="btn btn-primary"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New project enquiry')}`}
              >
                <Icon kind="mail" />
                <span>Start a project</span>
              </a>
            </div>
            <div className="contact-links">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <span className="contact-icon" aria-hidden="true">
                  <Icon kind="mail" />
                </span>
                {CONTACT_EMAIL}
              </a>
              <a href="https://wa.me/923021601044" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <Icon kind="whatsapp" />
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

      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              MU
            </span>
            <span className="brand-copy">
              <strong>Muhammed Umer</strong>
              <small>Building modern software solutions</small>
            </span>
          </a>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <Icon kind={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Muhammed Umer. All rights reserved.</span>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
