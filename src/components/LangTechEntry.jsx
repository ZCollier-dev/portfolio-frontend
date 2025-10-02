import Anchor from "../assets/anchor.svg";

import Python from "../assets/python-logo.svg";

const ProgLangImg = (name) => {
  switch (name) {
    case "Python":
      return <img src={Python} alt={name} />;
    default:
      return <img src={Anchor} alt='No logo' />;
  }
};

export default function LangTechEntry({ name, description, related = "None" }) {
  return (
    <div className='langentry'>
      <div>
        {ProgLangImg(name)}
        <h3>{name}</h3>
      </div>
      <div>
        <p>{description}</p>
        <p>Related Languages & Technologies: {related}</p>
      </div>
    </div>
  );
}
