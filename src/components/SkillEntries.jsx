import { lazy } from "preact-iso";

const SkillEntry = lazy(() => import("./SkillEntry"));

export default function SkillEntries() {
  return (
    <div className='langentrybox'>
      <SkillEntry
        name='Leadership'
        description="A leader is the anchor point for a team to revolve around. Ensuring that a team and their skills mesh well together should be a leader's top priority."
      />
      <SkillEntry
        name='Communication'
        description='Ideas need to be shared with a team. Communication, whether through text, imagery, or speech, allows the effective transfer of skill and knowledge.'
      />
      <SkillEntry
        name='Problem Solving'
        description='A clear direction or a series of seemingly diconnected questions, each problem is a unique and challenging puzzle to solve.'
      />
      <SkillEntry
        name='Persistence'
        description='Sometimes, a project may experience difficulties or setbacks. It is important to maintain a level head through turbulence and move forward with the lessons learned.'
      />
      <SkillEntry
        name='Critical Thinking'
        description='With the deluge of information we have at our fingertips today, it is more important than ever to ask questions and challenge potential solutions, established or otherwise.'
      />
      <SkillEntry
        name='Professionalism'
        description='Professionalism consists of many different factors, such as physical presentation and organization, accountability, humility, reliability, and punctuality.'
      />
    </div>
  );
}
