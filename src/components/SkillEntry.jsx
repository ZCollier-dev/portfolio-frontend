import Anchor from "../assets/anchor-white.png";

import EntryDescription from "./EntryDescription";

/* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
/* Any projects I've done, including this very portfolio */
/* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/

export default function SkillEntry({ name, description }) {
  return (
    <div className='langentry'>
      <div className='langentryleft'>
        <img src={Anchor} alt='No logo' />
        <h4>{name}</h4>
      </div>
      <div className='langentrydesc'>
        <EntryDescription description={description} />
      </div>
    </div>
  );
}
