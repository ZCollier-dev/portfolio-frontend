export default function ContactNav({ name, route }) {
  return (
    <a href={route} target='_blank'>
      {name}: {route}
    </a>
  );
}
