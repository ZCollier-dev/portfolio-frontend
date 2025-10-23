import Anchor from "../assets/anchor.png";

/* This is where all other skills reside. No explanations, just their names */

export default function SkillEntry({ name }) {
  return (
    <div className='otherentry'>
      <img src={Anchor} alt='No logo' />
      <p>{name}</p>
    </div>
  );
}
