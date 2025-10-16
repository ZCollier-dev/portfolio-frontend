import { lazy } from "preact-iso";

const LangEntry = lazy(() => import("./LangEntry"));

export default function LangEntries() {
  return (
    <div className='langentrybox'>
      <LangEntry
        name='HTML'
        description='Familiar with HTML as the structure of a webpage.'
      />
      <LangEntry
        name='CSS'
        description='Tinkered with CSS to ensure the best look for a webpage.'
      />
      <LangEntry
        name='JavaScript'
        description='Educated in and familiar with JavaScript and some of its technologies, frameworks, and derivatives.'
        related='TypeScript, Node.js, Express.js'
      />
      <LangEntry
        name='React'
        description='Experienced and educated with the React framework and one of its derivatives, Preact.'
        related='Preact'
      />
      <LangEntry
        name='Java'
        description='Educated in Java as a backend API language with Spring Boot and testing with JUnit.'
        related='Spring Boot, JUnit'
      />
      <LangEntry
        name='Python'
        description='Educated in the fundamentals of Python.'
      />
    </div>
  );
}
