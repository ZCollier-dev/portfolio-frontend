import { lazy } from "preact-iso";

const TechEntry = lazy(() => import("./TechEntry"));

export default function TechEntries() {
  return (
    <div className='langentrybox'>
      <TechEntry
        name='SQL'
        description='Familiar with SQL relational databases'
        related='MySQL, PostgreSQL'
      />
      <TechEntry
        name='MongoDB'
        description='Familiar with the non-relational database MongoDB'
      />
      <TechEntry
        name='Docker'
        description='Familiar with app containerization through Docker'
        related='Docker Desktop'
      />
      <TechEntry
        name='Git'
        description='Familiarity with Git through GitHub - all projects are hosted through GitHub'
        related='GitHub'
      />
      <TechEntry
        name='AWS'
        description='Familiar with AWS services.'
        related='S3, EC2, RDS...'
      />
    </div>
  );
}
