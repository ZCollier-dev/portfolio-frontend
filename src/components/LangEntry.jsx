import Anchor from "../assets/anchor-white.png";

import PythonLogo from "../assets/python-logo.svg";
import HtmlLogo from "../assets/HTML5-Logo.png";
import CssLogo from "../assets/css3-logo.png";
import JavascriptLogo from "../assets/JavaScript-logo.png";
import ReactLogo from "../assets/React-logo.png";
import JavaLogo from "../assets/java-logo.svg";

import EntryDescription from "./EntryDescription";

import { useSignal } from "@preact/signals";

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

const HandleClick = (currentState) => {
  if (currentState) {
    return false;
  } else {
    return true;
  }
};

export default function LangEntry({ name, description, related = "None" }) {
  const isDescDisplayed = useSignal(false);

  return (
    <div
      className='langentry'
      onClick={() => {
        isDescDisplayed.value = HandleClick(isDescDisplayed.value);
      }}
    >
      <div className='langentryleft'>
        {ProgLangImg(name)}
        <h4>{name}</h4>
      </div>
      {isDescDisplayed.value ? (
        <div className='langentrydesc'>
          <EntryDescription
            description={description}
            related={"Related Languages & Technologies: " + related}
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
