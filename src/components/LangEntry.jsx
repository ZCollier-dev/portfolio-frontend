import Anchor from "../assets/anchor.svg";

import PythonLogo from "../assets/python-logo.svg";
import HtmlLogo from "../assets/HTML5-Logo.png";
import CssLogo from "../assets/css3-logo.png";
import JavascriptLogo from "../assets/JavaScript-logo.png";
import ReactLogo from "../assets/React-logo.png";
import JavaLogo from "../assets/java-logo.png";

const ProgLangImg = (name) => {
  switch (name) {
    case "HTML":
      return <img src={HtmlLogo} alt={name} />;
    case "CSS":
      return <img src={CssLogo} alt={name} />;
    case "JavaScript":
      return <img src={JavascriptLogo} alt={name} />;
    case "React":
      return <img src={ReactLogo} alt={name} />;
    case "Python":
      return <img src={PythonLogo} alt={name} />;
    case "Java":
      return <img src={JavaLogo} alt={name} />;
    default:
      return <img src={Anchor} alt='No logo' />;
  }
};

export default function LangEntry({ name, description, related = "None" }) {
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
