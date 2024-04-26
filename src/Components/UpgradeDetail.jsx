export default function UpgradeDetail({
  description,
  content,
  className,
  suffix
  //   upgradeName
}) {
  //   const suffix = upgradeName === "extraAinsleys" ? "" : " Ħps";

  return (
    <div className="individual-detail-row flex">
      <p className={className}>{description}</p>{" "}
      <p className="upgrade-content">
        {content}
        {suffix}
      </p>
    </div>
  );
}
