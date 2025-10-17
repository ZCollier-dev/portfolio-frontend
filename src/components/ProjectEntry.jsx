//for each button needed, display button
import ProjectButton from "./ProjectButton";

export default function ProjectEntry({
  name,
  description,
  skillsArray = ["None"],
  buttonArray,
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Skills Used: {skillsArray.join(", ")}</p>
      <div>
        {buttonArray.map((button, index) => (
          <ProjectButton key={index} name={button.name} route={button.route} />
        ))}
      </div>
    </div>
  );
}
