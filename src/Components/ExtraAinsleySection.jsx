export default function ExtraAinsleySection(extraAinsleys) {
  return (
    <div className="wrapper">
      <div className="extra-ainsley-section marquee">
        {/* It's Ainsleys all the way down!! */}
        {/* We do this next spicy bit, because the first 'extraAinsleys' is an object containing an 'extraAinsleys' array. Map the Array of the Object*/}
        {extraAinsleys.extraAinsleys.map((ainsley, index) => {
          return <img className="small-ainsley" key={index} src={ainsley} />;
        })}
      </div>
    </div>
  );
}
