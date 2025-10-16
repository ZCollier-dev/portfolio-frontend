import Anchor from "../assets/anchor.svg";

/* This is where all other skills reside. No explanations, just their names */

export default function SkillEntry({ name, description }) {
  return (
    <div className='otherentry'>
      <img src={Anchor} alt='No logo' />
      <h3>{name}</h3>
    </div>
  );
}
