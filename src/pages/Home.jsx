import "./styles/home.css";

import { lazy } from "preact-iso";

const LangEntries = lazy(() => import("../components/LangEntries"));
const TechEntries = lazy(() => import("../components/TechEntries"));
const SkillEntries = lazy(() => import("../components/SkillEntries"));
const OtherEntries = lazy(() => import("../components/OtherEntries"));
const ProjectEntries = lazy(() => import("../components/ProjectEntries"));
const EmploymentEntries = lazy(() => import("../components/EmploymentEntries"));

export default function Home() {
  /* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
  /* Any projects I've done, including this very portfolio */
  /* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/
  return (
    <main>
      <article>
        <h1>Zachary Collier</h1>
        <h2>Junior Full-Stack Developer</h2>
        <h3>
          Software Development &middot; SQL &middot; Communication &middot; Team
          Leadership &middot; Problem Solving
        </h3>
        <br />
        <p>
          Hello! I am a Junior Software Developer and a recent graduate of Keyin
          College's Software Development program eager to begin a long and
          fruitful journey into the tech world. Through my long educational
          journey, I have acquired a vast array of technical skill in both
          Software Development and Chemical Engineering Technology.
          <br />
          <br />
          Throughout my journey, I have refined my communication, teamwork, and
          leadership skills, while consistently strengthening my problem-solving
          and analysis skills. I am always willing to try and subsequently adapt
          to new approaches to a new and novel problem, bolstered by a strong
          capability for research.
          <br />
          <br />I use Linux as a daily driver, alongside a Windows Virtual
          Machine through WinBoat for Windows-only applications. While I'm more
          of a casual user, more than once have I had to diagnose an issue,
          adjust workflow, and/or implement a fix for my system. I enjoy the
          privacy and freedom Linux grants me - if there is a problem, it can be
          addressed with a little effort.
        </p>
      </article>
      <article>
        <section>
          <h2>Programming Languages</h2>
          <LangEntries />
        </section>
        <section>
          <h2>Technologies</h2>
          <TechEntries />
        </section>
        <section>
          <h2>Soft Skills</h2>
          <SkillEntries />
        </section>
        <section>
          <h2>Other Skills</h2>
          <OtherEntries />
        </section>
      </article>
      <article>
        <section>
          <h2>Projects</h2>
          <ProjectEntries />
        </section>
        <section>
          <h2>Employment</h2>
          <EmploymentEntries />
        </section>
      </article>
    </main>
  );
}
