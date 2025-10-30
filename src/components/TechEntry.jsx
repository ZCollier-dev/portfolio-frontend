import Anchor from "../assets/anchor-white.png";

import SqlLogo from "../assets/sql-logo.svg";
import MongoLogo from "../assets/mongodb-logo.svg";
import DockerLogo from "../assets/docker-logo.svg";
import GitLogo from "../assets/git-logo.svg";
import AwsLogo from "../assets/aws-logo.png";

import EntryDescription from "./EntryDescription";

import { useSignal } from "@preact/signals";

/* SQL (sub: PostgreSQL, MySQL), MongoDB, Docker, GitHub, AWS (not certified yet)*/
/* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
/* Any projects I've done, including this very portfolio */
/* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/

const TechImg = (name) => {
  switch (name) {
    case "SQL":
      return <img src={SqlLogo} alt={name} />;
    case "MongoDB":
      return <img src={MongoLogo} alt={name} />;
    case "Docker":
      return <img src={DockerLogo} alt={name} />;
    case "Git":
      return <img src={GitLogo} alt={name} />;
    case "AWS":
      return <img src={AwsLogo} alt={name} />;
    default:
      return <img src={Anchor} alt='No logo' />;
  }
};

const HandleClick = (currentState) => {
  if (currentState) {
    return false;
  } else {
    return true;
  }
};

export default function TechEntry({ name, description, related = "None" }) {
  const isDescDisplayed = useSignal(false);

  return (
    <div
      className='langentry'
      onClick={() => {
        isDescDisplayed.value = HandleClick(isDescDisplayed.value);
      }}
    >
      <div className='langentryleft'>
        {TechImg(name)}
        <h4>{name}</h4>
      </div>
      {isDescDisplayed.value ? (
        <div className='langentrydesc'>
          <EntryDescription
            description={description}
            related={"Related Technologies: " + related}
          />
        </div>
      ) : (
        <></>
      )}
      <div className='langentryright'>
        {isDescDisplayed.value ? <p>&#11164;</p> : <p>&#11166;</p>}
      </div>
    </div>
  );
}
