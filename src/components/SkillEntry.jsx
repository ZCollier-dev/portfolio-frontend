import Anchor from "../assets/anchor.svg";

/* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
/* Any projects I've done, including this very portfolio */
/* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/

export default function SkillEntry({ name, description }) {
  return (
    <div className='langentry'>
      <div>
        <img src={Anchor} alt='No logo' />
        <h3>{name}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
