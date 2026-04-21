import { motion } from 'framer-motion'
import './App.css'

const experiences = [
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
] as const

const projects = [
  {
    title: 'One-Step Shopify',
    date: 'Feb 2026',
    summary:
      'Multi-tenant cloud-native WooCommerce store provisioning platform with Kubernetes namespace isolation, Dockerized services, and Helm automation.',
    highlights: [
      'Automated create/list/delete lifecycle for isolated tenant stores.',
      'Implemented PostgreSQL + Kubernetes reconciliation for near 99% provisioning reliability.'
    ]
  },
  {
    title: 'Parkinson Project',
    date: 'Jul 2025 - Present',
    summary:
      'Early Parkinson detection from multi-channel EEG using graph neural networks and functional connectivity pipelines.',
    highlights: [
      'Trained a GCN model reaching 88% subject-level accuracy.',
      'Engineered graph-based features from time-frequency and inter-channel connectivity signals.'
    ]
  },
  {
    title: 'RoverLink',
    date: 'Sep 2025',
    summary:
      'Android control system for autonomous robots using Kotlin, Android SDK, WebSockets, and ROS integrations.',
    highlights: [
      'Integrated live video, LiDAR map visualization, and waypoint navigation.',
      'Achieved sub-200ms command latency for reliable remote operation.'
    ]
  }
] as const

const skills = [
  ['Languages', 'C++, Python, SQL, Java, C#'],
  ['Web and APIs', 'React, JavaScript, Django, FastAPI'],
  ['ML and AI', 'PyTorch, CNNs, GNNs, Transformers, Sentence-BERT, NumPy, Pandas'],
  ['Data and Cloud', 'AWS, PostgreSQL, Databricks, PySpark, PowerBI'],
  ['AI Systems', 'RAG, vector databases, OCR pipelines'],
  ['Tools', 'Git, ROS, MATLAB, LaTeX']
] as const

const fadeIn = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 }
}

function App() {

  return (
    <div className="page-shell">
      <div className="glow glow-one" aria-hidden="true"></div>
      <div className="glow glow-two" aria-hidden="true"></div>

      <header className="site-header">
        <a href="#top" className="brand">Aaryan Agarwal</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <motion.section className="hero" {...fadeIn}>
          <p className="eyebrow">Software Engineer | AI/ML Builder | Cloud Systems</p>
          <h1>Engineering products that move from idea to production.</h1>
          <p className="hero-copy">
            Electrical Engineering undergraduate at Delhi Technological University (GPA 8.67/10),
            with practical experience delivering AI and cloud solutions across hospitality,
            manufacturing, and enterprise data systems.
          </p>
          <div className="hero-actions">
            <a href="mailto:aaryan.agarwal2781@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="./Aaryan_Agarwal_RA.pdf" className="btn btn-ghost" target="_blank" rel="noreferrer">Resume PDF</a>
          </div>
          <div className="hero-strip">
            <span>350+ coding problems solved</span>
            <span>Google Cloud Certified (2x)</span>
            <span>Codeforces Specialist</span>
          </div>
        </motion.section>

        <motion.section id="experience" className="section" {...fadeIn}>
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Impact across software and AI systems</h2>
          </div>
          <div className="stack-list">
            {experiences.map((item, index) => (
              <motion.article
                className="card"
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{item.role}</h3>
                <p className="meta">{item.company} | {item.meta}</p>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section" {...fadeIn}>
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected builds</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span>{project.date}</span>
                </div>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="section" {...fadeIn}>
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Tools I use in production</h2>
          </div>
          <div className="skill-grid">
            {skills.map(([title, value], index) => (
              <motion.article
                className="skill-tile"
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <h3>{title}</h3>
                <p>{value}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section highlight" {...fadeIn}>
          <div className="section-heading">
            <p className="eyebrow">Achievements</p>
            <h2>Signals recruiters care about</h2>
          </div>
          <ul>
            <li>350+ solved problems on LeetCode, Codeforces Specialist (1400+), and CodeChef 3-star.</li>
            <li>Google Cloud Certified (2x), Stanford ML Specialization, Amazon ML Summer School, Smart India Hackathon.</li>
            <li>PES Vice Chairperson and active contributor in IEEE initiatives.</li>
          </ul>
        </motion.section>
      </main>

      <footer id="contact" className="site-footer">
        <h2>Open to Software Engineering and AI/ML roles</h2>
        <p>Let us connect for internships and full-time opportunities.</p>
        <div className="link-row">
          <a href="mailto:aaryan.agarwal2781@gmail.com">aaryan.agarwal2781@gmail.com</a>
          <a href="tel:+919368355756">+91 93683 55756</a>
          <a href="https://github.com/gtbGithub" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aaryan-agarwal" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
