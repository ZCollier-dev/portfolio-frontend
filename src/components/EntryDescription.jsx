export default function EntryDescription({ description, related = null }) {
  if (related === null) {
    return <p>{description}</p>;
  } else {
    return (
      <>
        <p>{description}</p>
        <p className='relatedtech'>{related}</p>
      </>
    );
  }
}
