import { lazy } from "preact-iso";

const OtherEntry = lazy(() => import("./OtherEntry"));

/* Unsure about: Project Management, Financial Analysis, PIDs, Laboratory Work */

export default function OtherEntries() {
  return (
    <div className='otherentrybox'>
      <OtherEntry name='Chemical Process Engineering Technology' />
      <OtherEntry name='Research' />
      <OtherEntry name='Analysis' />
      <OtherEntry name='Technical Report Writing' />
      <OtherEntry name='Material Science' />
      <OtherEntry name='Mineral Processing' />
      <OtherEntry name='Industrial Chemistry' />
      <OtherEntry name='Process Control' />
    </div>
  );
}
