import { lazy } from "preact-iso";

const OtherEntry = lazy(() => import("./OtherEntry"));

export default function OtherEntries() {
  return (
    <div className='otherentrybox'>
      <OtherEntry name='Research' />
      <OtherEntry name='Analysis' />
    </div>
  );
}
