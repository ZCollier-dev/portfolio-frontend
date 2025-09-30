export default function ProjectButton(props) {
  return (
    <a key={props.key} href={props.route} target='_blank'>
      <button>{props.name}</button>
    </a>
  );
}
