import ContactNav from "../components/ContactNav";

export default function Contact() {
  return (
    <main>
      <article>
        <h1>Contact</h1>
        <section>
          <h2>Where You Can Find Me</h2>
          <ContactNav route='https://github.com/ZCollier-dev' name='GitHub' />
          <ContactNav
            route='https://www.linkedin.com/in/zachary-c-collier'
            name='LinkedIn'
          />
        </section>
        <section>
          <h2>Quick Email</h2>
        </section>
      </article>
    </main>
  );
  //freelance site?
  //then email, either via emailjs or aws sms
}
