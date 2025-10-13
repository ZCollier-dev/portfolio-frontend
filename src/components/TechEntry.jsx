import Anchor from "../assets/anchor.svg";

import SqlLogo from "../assets/sql-logo.svg";
import MongoLogo from "../assets/mongodb-logo.svg";
import DockerLogo from "../assets/docker-logo.svg";
import GithubLogo from "../assets/github-logo.svg";
import AwsLogo from "../assets/aws-logo.png";

/* SQL (sub: PostgreSQL, MySQL), MongoDB, Docker, GitHub, AWS (not certified yet)*/
/* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
/* Any projects I've done, including this very portfolio */
/* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/

const TechImg = (name) => {
  switch (name) {
    case "SQL":
      return <img src={SqlLogo} alt={name} />;
    default:
      return <img src={Anchor} alt='No logo' />;
  }
};

export default function TechEntry({ name, description, related = "None" }) {
  return (
    <div className='langentry'>
      <div>
        {TechImg(name)}
        <h3>{name}</h3>
      </div>
      <div>
        <p>{description}</p>
        <p>Related Languages & Technologies: {related}</p>
      </div>
    </div>
  );
}
