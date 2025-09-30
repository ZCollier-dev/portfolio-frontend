import NavButton from "./NavButton";

export default function Nav() {
  return (
    <nav>
      <h1>Zachary Collier</h1>
      <NavButton name='Home' route='/' />
      <NavButton name='Contact' route='/contact' />
    </nav>
  );
}
