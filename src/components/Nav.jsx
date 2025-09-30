import NavButton from "./NavButton";

export default function Nav() {
  return (
    <nav>
      <NavButton name='Home' route='/' />
      <NavButton name='Contact' route='/contact' />
    </nav>
  );
}
