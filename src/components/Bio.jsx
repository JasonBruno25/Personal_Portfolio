import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaCode, FaTools, FaCloud, FaChartLine } from "react-icons/fa";
import profileImage from "../assets/Jason_BrunoTerceros_Profile.png";
import '../styles/Home.css'; // this is calling for the <h2> color to be black

export default function Bio() {
  return (
    <div style={styles.bio}>
      {/* this is the images, name, and information */}
      {/*<img src="/src/assets/Jason_BrunoTerceros_Profile.png" alt="Jason Bruno Terceros" style={styles.image} />*/}
      <div style={{ ...styles.avatar, backgroundImage: `url(${profileImage})` }}>

      </div>
      <h2 className="heading-black">Jason Bruno Terceros</h2>
      <p>Software Engineer passionate about building reliable, scalable systems</p>
      <br />
      <p>| Cloud Software Engineer |</p>
      <p>| Full-Stack Developer |</p>
      <p>| Software Engineer |</p>

      <div className="contact-info" style={styles.contactInfo}>
        {/* location */}
        <p style={styles.contactItem}>
          <FaMapMarkerAlt style={styles.icon} /> Manassas, VA
        </p>

        {/* phone number - contact */}
        <p style={styles.contactItem}>
          <FaPhoneAlt style={styles.icon} /> (571) 499-0366
        </p>

        {/* email */}
        <p style={styles.contactItem}>
          <FaEnvelope style={styles.icon} />
          <a href="mailto:Jason.BrunoTerceros@gmail.com" style={styles.link}>
            Jason.BrunoTerceros@gmail.com
          </a>
        </p>

        {/* here we have the socail links */}
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/jason-bruno-terceros/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/JasonBruno25" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaGithub /> GitHub
          </a>
          {/* probably, but most definitely not going to use */}

          {/* 
          <a href="https://www.facebook.com/jason.derulolittleboy/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaFacebook /> Facebook
          </a>
           */}
        </div>
      </div>

      {/* TECHNICAL SKILLS below this */}
      <div style={styles.skillsSection}>
        <h3 style={styles.skillsHeader}>Technical Skills</h3>
        
        {/* Programming Languages */}
        <div style={styles.category}>
          <h4 style={styles.categoryTitle}><FaCode style={styles.categoryIcon} /> Languages</h4>
          <div style={styles.skillsList}>
            {["Python", "Java", "SQL", "JavaScript", "C++", "C", "R", "HTML/CSS", "Verilog", "MATLAB", "Dart"].map(skill => (
              <span key={skill} style={styles.skillBadge}>{skill}</span>
              ))}
            </div>
        </div>
        
        {/* Frameworks & Tools */}
        <div style={styles.category}>
          <h4 style={styles.categoryTitle}><FaTools style={styles.categoryIcon} /> Frameworks & Tools</h4>
          <div style={styles.skillsList}>
            {["Flask", "BeautifulSoup", "Flutter", "Jakarta EE", "RESTful APIs", "Git/GitHub", "OpenMP", "MPI", "CUDA", "PrimeFaces", "Gradle", "JUnit", "React", "Firebase", "Qiskit"].map(skill => (
              <span key={skill} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Cloud & Databases */}
        <div style={styles.category}>
          <h4 style={styles.categoryTitle}><FaCloud style={styles.categoryIcon} /> Cloud & Databases</h4>
          <div style={styles.skillsList}>
            {["AWS (EC2)", "MySQL", "PostgreSQL", "WildFly", "Azure"].map(skill => (
              <span key={skill} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Data & Analytics */}
        <div style={styles.category}>
          <h4 style={styles.categoryTitle}><FaChartLine style={styles.categoryIcon} /> Data & Analytics</h4>
          <div style={styles.skillsList}>
            {["Excel", "ArcGIS", "Data Pipeline Automation", "ETL Processes", "pandas", "Numpy", "Matplotlib / Seaborn", "scikit-learn", "statsmodels", "Jupyter Notebooks", "Tableau"].map(skill => (
              <span key={skill} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bio: {
    padding: "1.5rem",
    textAlign: "center",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundSize: "170%",        // <<<< ZOOM: 100% = normal, 150% = zoom in
    backgroundPosition: "50% 70%", // <<<< PAN: change these values to shift image
    backgroundRepeat: "no-repeat",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px solid #fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "1rem",
    objectFit: "cover", // crops to fill, no distrotion
    objectPosition: "50% 30%", // shifts crop focus
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    backgroundImage: "url('/src/assets/hero.png')",
    backgroundSize: "150%",          // 100% = normal, 150% = zoom in, 200% = more zoom
    backgroundPosition: "50% 30%",    // adjust to pan after zoom
    backgroundRepeat: "no-repeat",
  },
  contactInfo: {
    marginTop: "1.5rem",
    textAlign: "left",
    borderTop: "1px solid #eee",
    paddingTop: "1rem"
    //marginLeft: "-1rem"
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    margin: "0.75rem 0",
    fontSize: "0.9rem",
    color: "#555"
  },
  icon: {
    minWidth: "18px",
    color: "#0077b5"
  },
  link: {
    color: "#0077b5",
    textDecoration: "none",
    transition: "color 0.2s"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1rem",
    flexWrap: "wrap"
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#555",
    textDecoration: "none",
    fontSize: "0.9rem",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    background: "#fff",
    transition: "all 0.2s"
  },
  
  skillsSection: { marginTop: "1.5rem", textAlign: "left", borderTop: "1px solid #eee", paddingTop: "1rem" },
  skillsHeader: { fontSize: "1.1rem", marginBottom: "0.75rem", color: "#222" },
  category: { marginBottom: "1rem" },
  categoryTitle: { fontSize: "0.85rem", fontWeight: "600", color: "#0077b5", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "0.3rem" },
  categoryIcon: { fontSize: "0.8rem" },
  skillsList: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  skillBadge: {
    background: "#eef2f5",
    padding: "0.2rem 0.6rem",
    borderRadius: "16px",
    fontSize: "0.7rem",
    color: "#1a1a1a",
    whiteSpace: "nowrap"
  }
};