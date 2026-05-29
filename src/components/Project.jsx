export default function Project({ title, context, tech, date, description, link }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      {(context || date) && (
        <div style={styles.subhead}>
          {context && <span>{context}</span>}
          {date && <span style={styles.date}>{date}</span>}
        </div>
      )}
      {tech && <p><strong>Tech:</strong> {tech}</p>}
      <div style={styles.subhead}>
      </div>
      <p>{description}</p>
      {link && link !== "#" && <a href={link} target="_blank" rel="noopener noreferrer">View →</a>}
    </div>
  );
}


const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    backgroundColor: "#fff"
  },
  subhead: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
    color: "#555",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.25rem"
  },
  date: {
    fontStyle: "italic"
  }
};