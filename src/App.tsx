import { motion } from 'framer-motion'
import './App.css'

type Experience = {
  role: string
  company: string
  meta: string
  points: readonly string[]
}

type Service = {
  title: string
  summary: string
  bullets: readonly string[]
}

type Project = {
  title: string
  period: string
  summary: string
  impact: string
  stack: readonly string[]
  link?: string
}

const experiences: readonly Experience[] = [
  {
    role: 'Software Engineering Intern, AI/ML Team',
    company: 'Devlabs Technology',
    meta: 'Jan 2026 - Present | Noida, India',
    points: [
      'Built a cloud-native LLM concierge platform on AWS (VPC, ALB, CloudFront, SQS, IAM) with FastAPI microservices for secure and low-latency hotel interactions.',
      'Implemented production RAG with Sentence-BERT, vector databases, and Vertex AI to ground chatbot responses in policies, FAQs, and booking data.',
      'Developed an OCR-to-knowledge ETL pipeline that continuously transforms hotel documents into live vector context for concierge answers.'
    ]
  },
  {
    role: 'Graduate Engineering Trainee Intern, Quality Team',
    company: 'ITC Limited',
    meta: 'May 2025 - Jul 2025 | Saharanpur, India',
    points: [
      'Designed PPQRS, CPQRS, and iPQRS consistency metrics using Six Sigma principles across multi-location manufacturing lines.',
      'Built a CNN-based capsule defect detection workflow with 92% accuracy and closed-loop control, cutting manual inspection by 40%.'
    ]
  },
  {
    role: 'Software Engineering Intern, Data Science',
    company: 'HCL Technologies',
    meta: 'May 2024 - Jul 2024 | Noida, India',
    points: [
      'Executed cloud migration and analytics pipelines with PostgreSQL, PySpark (Databricks ETL), and PowerBI, improving analytics efficiency by 35% and reducing infrastructure cost by 20%.',
      'Built a React and Python crowdfunding platform and optimized conversion flows, reducing user wait time by 30%.'
    ]
  }
]

const services: readonly Service[] = [
  {
    title: 'AI Product Engineering',
    summary:
      'From RAG architecture to production APIs, I design AI features that are measurable, observable, and safe to ship.',
    bullets: [
      'Production-grade LLM integrations',
      'Prompt + retrieval quality optimization',
      'Evaluation and guardrail instrumentation'
    ]
  },
  {
    title: 'Cloud-Native Systems',
    summary:
      'I build scalable services using modern cloud primitives and robust backend patterns tuned for real traffic.',
    bullets: [
      'Microservices with FastAPI and queue pipelines',
      'AWS networking and deployment hardening',
      'Reliable state sync and automation loops'
    ]
  },
  {
    title: 'Data and Analytics Workflows',
    summary:
      'I design ETL and analytics stacks that make operational data useful for business and product decisions.',
    bullets: [
      'PySpark and Databricks ETL pipelines',
      'PostgreSQL performance-aware data models',
      'Dashboard-ready reporting pipelines'
    ]
  }
]

const projects: readonly Project[] = [
  {
    title: 'One-Step Shopify',
    period: 'Feb 2026',
    summary:
      'Multi-tenant WooCommerce provisioning platform with Kubernetes namespace isolation, Helm automation, and Dockerized backend services.',
    impact: 'Near 99% reliable automated provisioning and teardown through reconciliation architecture.',
    stack: ['Kubernetes', 'Helm', 'Docker', 'PostgreSQL', 'TypeScript'],
    link: 'https://github.com/Aaryan1004/store-provisioning-platform'
  },
  {
    title: 'Parkinson Project',
    period: 'Jul 2025 - Present',
    summary:
      'EEG-driven early Parkinson detection using graph neural networks and feature pipelines built from functional connectivity.',
    impact: 'Achieved 88% subject-level accuracy for early-stage disease pattern identification.',
    stack: ['PyTorch', 'GCN', 'EEG', 'Signal Processing'],
    link: 'https://github.com/Aaryan1004/parkinsons-eeg-gnn'
  },
  {
    title: 'RoverLink',
    period: 'Sep 2025',
    summary:
      'Android control system for autonomous robots using Kotlin, WebSockets, and ROS telemetry integrations.',
    impact: 'Delivered sub-200ms command latency with live video and LiDAR map interaction.',
    stack: ['Kotlin', 'Android SDK', 'WebSockets', 'ROS']
  }
]

const skills = [
  ['Languages', 'C++, Python, SQL, Java, C#'],
  ['Web and APIs', 'React, JavaScript, Django, FastAPI'],
  ['ML and AI', 'PyTorch, CNNs, GNNs, Transformers, Sentence-BERT, NumPy, Pandas'],
  ['Data and Cloud', 'AWS, PostgreSQL, Databricks, PySpark, PowerBI'],
  ['AI Systems', 'RAG, vector databases, OCR pipelines'],
  ['Tools', 'Git, ROS, MATLAB, LaTeX']
] as const

const sectionVariant = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
}

const staggerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

function App() {
  const stackedSkills = skills.flatMap(([group, value]) => value.split(', ').map((item) => `${item} - ${group}`))

  return (
    <div className="portfolio-shell" id="top">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <header className="top-bar">
        <a href="#top" className="logo">Aaryan Agarwal</a>
        <nav className="menu" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:aaryan.agarwal2781@gmail.com" className="top-cta">Hire Me</a>
      </header>

      <main className="content-grid">
        <motion.section
          className="hero panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="hero-copy-block">
            <p className="eyebrow">Software Engineer | AI/ML | Cloud Platforms</p>
            <h1>Designing high-impact digital systems that recruiters can trust at first glance.</h1>
            <p className="hero-description">
              I am Aaryan, an Electrical Engineering undergraduate at Delhi Technological University
              (GPA 8.67/10) focused on building production-ready AI products, cloud systems, and
              data-driven applications with measurable outcomes.
            </p>
            <div className="hero-actions">
              <a href="./Aaryan_Agarwal_RA.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">View Resume</a>
              <a href="mailto:aaryan.agarwal2781@gmail.com" className="btn btn-secondary">Start a Conversation</a>
            </div>
            <div className="stat-row">
              <article>
                <h3>350+</h3>
                <p>DSA problems solved</p>
              </article>
              <article>
                <h3>88%</h3>
                <p>GNN model accuracy</p>
              </article>
              <article>
                <h3>40%</h3>
                <p>Manual inspection reduction</p>
              </article>
            </div>
          </div>

          <aside className="hero-side-card">
            <p className="side-title">Current Focus</p>
            <h2>AI/ML Software Engineering Intern</h2>
            <p>Devlabs Technology | Jan 2026 - Present</p>
            <ul>
              <li>Production RAG architecture for hotel concierge workflows.</li>
              <li>Cloud-native FastAPI microservices on AWS.</li>
              <li>Document intelligence pipelines with OCR and vector search.</li>
            </ul>
            <div className="availability">
              <span></span>
              Open to software engineering and AI roles
            </div>
          </aside>
        </motion.section>

        <motion.section
          id="about"
          className="panel section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Product-thinking engineer with hands-on execution</h2>
          </div>
          <div className="about-layout">
            <p>
              I bridge engineering depth with business outcomes. My work ranges from cloud-native
              service orchestration to advanced ML pipelines, with an emphasis on speed,
              reliability, and user value. I enjoy converting complex ideas into clean products
              that teams can scale and maintain.
            </p>
            <div className="skill-cloud" aria-label="Skill cloud">
              {stackedSkills.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="panel section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What I can build for fast-moving teams</h2>
          </div>
          <motion.div className="service-grid" variants={staggerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {services.map((service) => (
              <motion.article className="service-card" variants={cardVariant} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          className="panel section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Internships with measurable outcomes</h2>
          </div>
          <motion.div className="experience-list" variants={staggerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {experiences.map((item) => (
              <motion.article className="experience-card" variants={cardVariant} key={item.company}>
                <h3>{item.role}</h3>
                <p className="experience-meta">{item.company} | {item.meta}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          className="panel section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected engineering work</h2>
          </div>
          <motion.div className="project-grid" variants={staggerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                variants={cardVariant}
                whileHover={{ y: -7 }}
              >
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span>{project.period}</span>
                </div>
                <p>{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">View Repository</a>
                ) : (
                  <p className="project-note">Code available on request</p>
                )}
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          className="panel section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Core stack and capabilities</h2>
          </div>
          <motion.div className="skill-grid" variants={staggerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {skills.map(([title, value]) => (
              <motion.article className="skill-tile" key={title} variants={cardVariant}>
                <h3>{title}</h3>
                <p>{value}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="panel section achievements"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <p className="eyebrow">Achievements</p>
            <h2>Credentials that strengthen execution</h2>
          </div>
          <ul>
            <li>350+ solved problems on LeetCode, Codeforces Specialist (1400+), and CodeChef 3-star.</li>
            <li>Google Cloud Certified (2x), Stanford ML Specialization, Amazon ML Summer School, Smart India Hackathon.</li>
            <li>PES Vice Chairperson and active contributor in IEEE initiatives.</li>
          </ul>
        </motion.section>
      </main>

      <motion.footer
        id="contact"
        className="panel contact-panel"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something strong together.</h2>
          <p>
            I am actively looking for software engineering and AI/ML opportunities where I can
            contribute to real products and measurable outcomes.
          </p>
        </div>
        <div className="contact-grid">
          <a href="mailto:aaryanagarwal_ee22b14_68@dtu.ac.in">
            <span>Email</span>
            <strong>aaryanagarwal_ee22b14_68@dtu.ac.in</strong>
          </a>
          <a href="tel:+919368355756">
            <span>Phone</span>
            <strong>+91 93683 55756</strong>
          </a>
          <a href="https://github.com/Aaryan1004" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>github.com/Aaryan1004</strong>
          </a>
          <a href="https://www.linkedin.com/in/aaryan-agarwal" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>in/aaryan-agarwal</strong>
          </a>
        </div>
      </motion.footer>

      <p className="site-footer-note">Built with React and Framer Motion by Aaryan Agarwal.</p>
    </div>
  )
}

export default App
