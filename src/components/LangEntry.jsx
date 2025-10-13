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

/* Python, HTML, CSS, JavaScript (sub: TypeScript, Node.js, Express.js), 
  React (sub: Preact), Java (sub: Spring Boot, JUnit) */
/* SQL (sub: PostgreSQL, MySQL), NoSQL (sub: MongoDB), Docker, GitHub, AWS (not certified yet)*/
/* Research, Analysis, Process Flow Diagrams, (anything else from CPET)*/
/* Any projects I've done, including this very portfolio */
/* Any employment I've gotten. Data Farms as an Intern, Rambler as a Co-Op Work Term*/

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
