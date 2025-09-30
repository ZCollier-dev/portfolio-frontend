import FootNav from "./FootNav";

export default function Foot() {
  return (
    <footer>
      <h3>Links</h3>
      <FootNav route='https://github.com/ZCollier-dev' name='GitHub' />
      <FootNav
        route='https://www.linkedin.com/in/zachary-c-collier'
        name='LinkedIn'
      />
    </footer>
  );
}
