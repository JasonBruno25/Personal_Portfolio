import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {

  const handleDownload = () => {
    // link to your pdf file in the public folder
    const pdfUrl = "/public/Jason_BrunoTerceros_Resume.pdf"; // adjust the path and name
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jason_BrunoTerceros_Resume.pdf"; // filename 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <header className="main-header">
      <div className="logo">Jason Bruno Terceros</div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        <button onClick={handleDownload} style={downloadButtonStyle}>Resume</button>
      </nav>
    </header>
  );
}

const downloadButtonStyle ={
  background: "#861F41",
  color: "white",
  border: "none",
  padding: "0.3rem 0.8rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.8rem",
  fontWeight: "500",
}

const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: "1px solid #ccc" },
  logo: { fontWeight: "bold", fontSize: "1.5rem" },
  nav: { display: "flex", gap: "1.5rem" },
  link: { textDecoration: "none", color: "#333" },
  active: { textDecoration: "none", color: "#007bff", fontWeight: "bold", borderBottom: "2px solid #007bff" }
};