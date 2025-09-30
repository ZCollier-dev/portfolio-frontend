//for each button needed, display button
import ProjectButton from "./ProjectButton";

export default function ProjectEntry({
  name,
  description,
  skillsArray,
  buttonArray,
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        Skills Used:
        <ul>
          {skillsArray.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </p>
      <div>
        {buttonArray.map((button, index) => (
          <ProjectButton key={index} name={button.name} route={button.route} />
        ))}
      </div>
    </div>
  );
}
