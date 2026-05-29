import { projectsByCategory } from "../data/projectsData";
import Project from "../components/Project";
import '../styles/Home.css'; // for font styling
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // these are the built in react icons 

export default function Projects() {

  const [expandedCategories, setExpandedCategories] = useState(() => {
    // initially all expanded
    const initial = {};
    projectsByCategory.forEach((_, idx) => { initial[idx] = false; });
    return initial;
  });

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // check all categories are expanded
  const allExpanded = Object.values(expandedCategories).every(Boolean);

  // here are the buttons and the conditioning
  const toggleAll = () => {
    if (allExpanded) {
      // collapse all
      const allCollapsed = {};
      projectsByCategory.forEach((_, idx) => { allCollapsed[idx] = false; });
      setExpandedCategories(allCollapsed);
    } else {
      // expand all
      const allExpandedState = {};
      projectsByCategory.forEach((_, idx) => { allExpandedState[idx] = true; });
      setExpandedCategories(allExpandedState);
    }
  }


  return (
    <div className="projects-page" style={{ padding: "2rem" }}>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center", 
        marginBottom: "1rem",
      }}>
        <div></div>
        <h1 className="heading-black" style={{ margin: 0, textAlign: "center" }}>All Projects</h1>
        <div style={{ textAlign: "right" }}>
          <button onClick={toggleAll} style={buttonStyle}>
            {allExpanded ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      {projectsByCategory.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: "2rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>

          <div 
            onClick={() => toggleCategory(idx)} 
            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <h2 className="heading-black">{cat.category}</h2>

            <span style={{ fontSize: "1.2rem", userSelect: "none" }}>
              {expandedCategories[idx] ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {expandedCategories[idx] && (
            <div className="projects-grid">
              {cat.projects.map((proj, i) => <Project key={i} {...proj} />)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const buttonStyle = {
  padding: "0.4rem 1rem",
  backgroundColor: "#861F41",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "background-color 0.2s"
};
