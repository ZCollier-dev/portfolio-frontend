export default function NavButton(props) {
  return (
    <a href={props.route}>
      <button>{props.name}</button>
    </a>
  );
}
