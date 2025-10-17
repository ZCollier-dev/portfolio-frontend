import { lazy } from "preact-iso";

const ProjectEntry = lazy(() => import("./ProjectEntry"));

export default function ProjectEntries() {
  return (
    <div className='projectentrybox'>
      <ProjectEntry
        name='Portfolio Frontend'
        description='The webpage of the portfolio you are looking at right now!'
        skillsArray={["HTML", "CSS", "JavaScript", "Preact"]}
        buttonArray={[
          {
            name: "GitHub",
            route: "https://github.com/ZCollier-dev/portfolio-frontend",
          },
        ]}
      />
    </div>
  );
}
