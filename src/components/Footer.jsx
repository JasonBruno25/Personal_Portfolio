export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>© Jason Bruno Terceros Portfolio. Powered by JavaScript & React</div>
      <div>
        <a href="#">GitHub</a> | <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: { textAlign: "center", padding: "1rem", borderTop: "1px solid #ccc", marginTop: "2rem" }
};