import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB = "https://github.com/gregoiremrcr";
const EMAIL = "gregoire-mercier@orange.fr";
const LOCATION = "Puteaux (92800)";

const projects = [
  {
    number: "01",
    title: "Robotique",
    eyebrow: "ROBOTIQUE · AUTONOMIE",
    description:
      "Prototype de robot d’assistance autonome : dashboard React pour créer et suivre des missions, API PHP/MySQL, WebSocket temps réel et intégration ROS 2 pour la navigation, la vision et la manipulation d’objets.",
    stack: ["React", "TypeScript", "PHP", "MySQL", "WebSocket", "ROS 2", "Python", "Docker"],
    github: "https://github.com/gregoiremrcr/RobotiqueVF",
    detailHref: "./project-robotiquevf.html",
    featured: true,
    visual: "robot"
  },
  {
    number: "02",
    title: "CloudVision",
    eyebrow: "IA · VISION PAR ORDINATEUR",
    description:
      "Plateforme fullstack qui analyse des images avec l’API OpenAI et transforme les résultats en contenu audio. Le principal objectif du projet est de créer une plateforme permettant aux personnes malvoyantes d'accéder à l'information visuelle. Une seconde partie du projet utilise Tesseract pour reconnaître du texte dans une image et produire un vocal.",
    stack: ["React", "Flask", "Python", "OpenAI API", "MongoDB", "OpenCV", "Tesseract", "Docker"],
    github: "https://github.com/gregoiremrcr/cloudvisionF",
    detailHref: "./project-cloudvisionf.html",
    featured: true,
    visual: "vision"
  },
  {
    number: "03",
    title: "IoT / MQTT",
    eyebrow: "IOT · TEMPS RÉEL",
    description:
      "Interface en temps réel pour visualiser les données de stations météo IoT. Un bridge Node.js reçoit les messages MQTT et les retransmet en WebSocket vers une application SvelteKit.",
    stack: ["SvelteKit", "Node.js", "MQTT", "WebSocket", "ESP32"],
    github: "https://github.com/gregoiremrcr/iot-mqtt",
    detailHref: "./project-iot-mqtt.html",
    featured: true,
    visual: "iot"
  }
];

const skills = [
  ["Innovation digitale", "Produits numériques · IA · robotique · objets connectés"],
  ["Frontend", "React · TypeScript · JavaScript · HTML · CSS"],
  ["Backend", "Python · Flask · Node.js · APIs REST"],
  ["IA & Vision", "OpenAI API · Computer Vision · OCR · traitement d’images"],
  ["Data", "MongoDB · MySQL · SQL · gestion de données"],
  ["Systèmes", "MQTT · WebSocket · Docker · Git · GitHub"]
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" aria-hidden="true" />
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Accueil">
          GM<span>.</span>
        </button>
        <div className="nav-name" aria-label="Nom du portfolio">Grégoire MERCIER</div>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => handleNavClick("projects")}>Projets</button>
          <button onClick={() => handleNavClick("cv")}>CV</button>
          <button onClick={() => handleNavClick("about")}>À propos</button>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker"><span className="dot" /> DISPONIBLE POUR DE NOUVEAUX PROJETS</p>
              <h1>
                J'organise et créé des
                <span> systèmes web </span>
                répondant au besoin d'un marché.
              </h1>
              <p className="hero-text">
                Développeur orienté innovation digitale, avec un intérêt particulier
                pour les API, l’IA, les données, la robotique et les systèmes connectés.
              </p>
              <div className="hero-actions">
                <button className="button button--primary" onClick={() => scrollTo("projects")}>
                  Voir les projets <span>↓</span>
                </button>
                <button className="button button--ghost" onClick={() => scrollTo("contact")}>
                  Me contacter <span>↗</span>
                </button>
              </div>
            </div>

            <div className="hero-terminal" aria-label="Profil technique">
              <div className="terminal-top">
                <span /><span /><span />
                <small>gregoire@portfolio:~</small>
              </div>
              <div className="terminal-body">
                <p><i>$</i> whoami</p>
                <strong>Grégoire MERCIER</strong>
                <p><i>$</i> focus --actuel</p>
                <strong>Architecture logicielle / dev fullstack</strong>
                <p><i>$</i> stack --principal</p>
                <strong>Python · React · Node.js · SQL</strong>
                <p><i>$</i> statut</p>
                <strong className="online">Étudiant bachelor développement web 3 HETIC MONTREUIL</strong>
              </div>
            </div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TRAVAUX SÉLECTIONNÉS</p>
              <h2>Trois projets.<br /><span>Trois situations d'apprentissage.</span></h2>
            </div>
            <p className="section-intro">
              Des projets qui couvrent l’IA, le web, les systèmes connectés et la robotique autonome.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.title}>
                <div className={`project-visual project-visual--${project.visual}`}>
                  <ProjectVisual type={project.visual} />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-links">
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      Explorer le repository <span>↗</span>
                    </a>
                    <a className="project-link project-link--secondary" href={project.detailHref}>
                      Voir la fiche projet <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cv" className="section cv">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CV</p>
              <h2>Expérience.<br /><span>Compétences. Approche.</span></h2>
            </div>
            <p className="section-intro">
              Mon parcours s’inscrit dans l’innovation digitale : conception de produits numériques, intégration de solutions IA, architecture logicielle et systèmes connectés orientés usage réel.
            </p>
          </div>

          <div className="cv-download">
            <a className="button button--primary" href="/cv-gregoire-mercier.pdf" download>
              Télécharger le CV <span>↓</span>
            </a>
          </div>

          <div className="cv-grid">
            <div className="cv-card">
              <p className="eyebrow">EXPÉRIENCE</p>
              <ul>
                <li>Expérience professionnelle au sein de VINCI, au cœur de projets orientés innovation et digitalisation.</li>
                <li>Développement de solutions numériques visant à améliorer les processus internes et la qualité des outils métiers.</li>
                <li>Conception et mise en œuvre d’outils web, d’interfaces et d’intégrations fonctionnelles répondant à des besoins concrets.</li>
                <li>Participation à des projets mêlant technologie, organisation et usage réel, dans une logique d’efficacité et d’innovation.</li>
              </ul>
            </div>
            <div className="cv-card">
              <p className="eyebrow">FOCUS</p>
              <ul>
                <li>Architecture logicielle et développement d’outils utiles.</li>
                <li>Innovation digitale à travers le web, l’IA et les systèmes connectés.</li>
                <li>Robotique autonome, interfaces réactives et expérience utilisateur.</li>
                <li>Déploiement, conteneurisation et bonnes pratiques de production.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-copy">
            <p className="eyebrow">À PROPOS / INNOVATION DIGITALE</p>
            <h2>Je crée des solutions<br /><span>à la fois utiles et concrètes.</span></h2>
            <p>
              Je m’intéresse à l’innovation digitale dans sa globalité : architecture logicielle,
              interfaces, intégrations, intelligence artificielle, données et systèmes connectés.
              Mon approche consiste à comprendre un besoin, concevoir une solution durable et la
              transformer en un outil fonctionnel et exploitable.
            </p>
            <p>
              Ce qui me motive, c’est la création de produits numériques qui allient qualité technique,
              clarté fonctionnelle et expérience utilisateur. Mon portfolio reflète cette logique :
              développer, connecter, automatiser et rendre les systèmes réellement utiles.
            </p>
          </div>
          <div className="skills">
            {skills.map(([title, value], index) => (
              <div className="skill-row" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <b>{title}</b>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <p className="eyebrow">CONTACT</p>
            <h2>Un projet en tête ?<br /><span>Construisons-le.</span></h2>
            <p>
              Pour discuter d’un projet, d’une collaboration ou d’une opportunité,
              voici mes coordonnées.
            </p>
            <div className="contact-details" aria-label="Coordonnées">
              <a href={`mailto:${EMAIL}`}>
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </a>
              <div>
                <span>Localisation</span>
                <strong>{LOCATION}</strong>
              </div>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>@gregoiremrcr ↗</strong>
              </a>
            </div>
            <a className="button button--primary" href={`mailto:${EMAIL}`}>
              Envoyer un email <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Grégoire</span>
        <span>Construit avec React + CSS</span>
        <a href={GITHUB} target="_blank" rel="noreferrer">@gregoiremrcr ↗</a>
      </footer>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "vision") {
    return (
      <div className="vision-ui">
        <div className="scan-box">
          <span className="corner c1" /><span className="corner c2" />
          <span className="corner c3" /><span className="corner c4" />
          <div className="scan-line" />
          <div className="face">◌</div>
        </div>
        <div className="data-card">
          <small>ANALYSE IA</small>
          <b>image → description</b>
          <span>audio généré</span>
        </div>
      </div>
    );
  }

  if (type === "robot") {
    return (
      <div className="robot-photo-frame">
        <img
          className="robot-photo"
          src="/robotique-vf.jpg"
          alt="RobotiqueVF robot prototype"
        />
      </div>
    );
  }

  return (
    <div className="iot-ui">
      <div className="iot-header"><span>TÉLÉMÉTRIE</span><b>● EN LIGNE</b></div>
      <div className="wave">
        {Array.from({ length: 26 }).map((_, i) => <i key={i} style={{ "--h": `${18 + ((i * 17) % 64)}%` }} />)}
      </div>
      <div className="iot-metrics">
        <div><small>TEMP</small><b>21.8°</b></div>
        <div><small>MQTT</small><b>12 msg/s</b></div>
        <div><small>WS</small><b>08ms</b></div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
