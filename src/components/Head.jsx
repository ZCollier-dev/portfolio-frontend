import Anchor from "../assets/anchor.png";
import Nav from "./Nav";

export default function Head() {
  return (
    <header>
      <img src={Anchor} alt='Pixellated Anchor Logo' />
      <div>
        <h1>Pixellated Anchor</h1>
        <p>Portfolio of Zachary Collier</p>
      </div>
      <Nav />
    </header>
  );
}
