import "../styles/Home.css";

export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="heading-black">About Me</h1>
      <p>
        I'm a recent graduate of Virginia Tech's Computational Modeling and Data Analytics (CMDA) program,
        with a strong foundation in cloud software engineering, full-stack development, and high-performance
        computing. I thrive on solving real problems - whether that's scaling a distributed system,
        optimizing performance at the bit level, or building intuitive user experiences.
      </p>

      <br />
      <h2 className="heading-black">Technical Focus</h2>

      <p>
        My primary interests lie in <strong>cloud software engineering</strong> and <strong>full-stack development</strong>.
        I've deployed multiple Jakarta EE applications on AWS EC2 using WildFly, integrated external REST APIs
        (Google Books, Yelp, NPS, Kroger), and built front-ends with PrimeFaces and React. I also have extensive
        experience in parallel and distributed computing - implementing OpenMP, MPI, and CUDA solutions for
        clustering, k-center approximation, and large-scale data processing.
      </p>
      <p>
        While my coursework included data science, I am most energized by engineering challenges: making systems
        reliable, efficient, and user-friendly. I'm actively expanding my knowledge of AI and machine learning,
        and I'm eager to apply those skills in a professional setting.
      </p>

      <br />
      <h2 className="heading-black">How I work</h2>

      <p>
        I am driven by a commitment to <strong>optimal solutions</strong> - not perfectionism, but persistence.
        I dig into specifications, test edge cases, and iterate until the result is clean and robust. In team
        settings, I communicate proactively, hold myself and others accountable, and I'm not afraid to raise
        concerns when quality or deadlines are at risk. Professors and peers have described me as
        <strong> detail-oriented</strong> and <strong>creative</strong> - qualities I bring to every project.
      </p>

      <br />
      <h2 className="heading-black">Select Projects</h2>

      <ul>
        <li>
          <strong>Personal Portfolio:</strong> Built a JSON-driven React site to showcase 40+ projects,
          each with a detailed README within their respective GitHub links. Learned to structure and document work for long-term maintainability.
        </li>
        <li>
          <strong>Program Discovery (Capstone):</strong> Led development of an automated scraping pipeline
          for graduate program data. Gained real-world experience in stakeholder communication, agile reporting,
          and handling uneven team contributions.
        </li>
        <li>
          <strong>Air Traffic Control System:</strong> Implemented a 3D bintree with Composite and FlyWeight
          patterns, plus a generic skip list. Demonstrated that complex problems become manageable with
          early planning, diagramming, and systematic testing.
        </li>
      </ul>

      <br />
      <h2 className="heading-black">Beyond Code</h2>

      <p>
        Outside of work, I enjoy football, soccer, and competitive wrestling (folkstyle / Greco-Roman).
        I love to cook and explore new cuisines, and I'm fascinated by storytelling - from ancient myths
        to modern animation. I'm currently exploring 2D/3D animation as a creative outlet and long-term goal.
        I want to learn animation and bring some of those stories to life through
        <strong> Project Lyra</strong>.
      </p>
      
      <br />
      <h2 className="heading-black">What I'm looking for</h2>

      <p>
        I'm seeking a <strong>software engineer, full-time software engineering or cloud development role</strong> where I can
        contribute immediately while growing into AI/ML. I want to join a team that values innovation,
        transparency, and steady progress - not just feature churn. I'm ready to learn, collaborate,
        and build things that matter.
      </p>

      <br />

      <p>
        If you remember one thing about me, let it be this:<br />
        <strong>
          I strive to learn, I work hard, and I care about the people I build with.
        </strong><br />
        I'm logical, I'm empathetic, and I don't sit quietly when things need to get done.
      </p>
      <p>
        <strong>Let's connect.</strong> I'd love to talk about how my skills and drive can help your team.
      </p>

    </div>
  );
}