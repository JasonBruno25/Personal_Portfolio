export default function Experience({ experiences }) {
  return (
    <div>
      {experiences.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{exp.company}</strong>
            <span>{exp.location}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <em>{exp.position}</em>
            <span>{exp.period}</span>
          </div>
          <ul style ={{ textAlign: "left"}}>
            {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}