import Bio from "../components/Bio";
import Experience from "../components/Experience";
import Project from "../components/Project";
import { resumeExperiences, resumeProjects } from "../data/resumeData";
import '../styles/Home.css'; // this is calling for the <h2> color to be black



export default function Home() {
  return (
    <div className="home-container">

      {/* left bar of the page */}
      <aside style={styles.bioColumn}>
        <Bio />
      </aside>

      {/* the main body of the page */}
      <main style={styles.mainColumn}>

        {/* displays the experience */}
        <section>
          <h2 className="heading-black">Experience</h2>
          <Experience experiences={resumeExperiences} />
        </section>

        {/* displays projects */}
        <section>
          <h2 className="heading-black">Featured Projects</h2>
          {resumeProjects.map((proj, idx) => <Project key={idx} {...proj} />)}
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: { display: "grid", gridTemplateColumns: "300px 1fr", gap: "2rem", padding: "2rem" },
  bioColumn: {},
  mainColumn: {},
  "@media (max-width: 768px)": {
    container: { gridTemplateColumns: "1fr" }
  }
};