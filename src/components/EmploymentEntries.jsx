import { lazy } from "preact-iso";

const ProjectEntry = lazy(() => import("./ProjectEntry"));

export default function EmploymentEntries() {
  return (
    <div className='projectentrybox'>
      <ProjectEntry
        name='Data Farms (November 2024 - February 2025) (Internship)'
        description='Data Farms is a startup based out of Newfoundland, started by farmers, for farmers. Using crop montioring technologies, Data Farms aims to make farms that make use of their technology to monitor weather, soil, and other factors to ensure crops are healthy and productive. During my time at Data Farms, I used React TypeScript and Plotly to create front-end plots for a weather dashboard.'
        skillsArray={["HTML", "CSS", "TypeScript", "React"]}
        buttonArray={[{ name: "Website", route: "https://datafarms.ca/" }]}
      />
    </div>
  );
}
