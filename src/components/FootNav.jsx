export default function FootNav(props) {
  return (
    <a href={props.route} target='_blank'>
      {props.name}
    </a>
  );
}
