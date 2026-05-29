import Experience from "../components/Experience";
import { allExperiences } from "../data/fullExperienceData";
import '../styles/Home.css'; // calls on siteStyles

export default function FullExperience() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="heading-black">Complete Work History</h1>
      <Experience experiences={allExperiences} />
    </div>
  );
}