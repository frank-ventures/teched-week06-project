export default function UpgradeDetail({
  description,
  content,
  className,
  suffix
}) {
  // This spicy little number was a bit of help from GPT, who informed me about "Array.isArray". The prompt:
  // With other 'upgrades', this component displays the number which is stored in the userStats object. However, for extraAinsleys, it's now showing the text stored in the array, so the display on the page is now a long list of image sources.
  // How would I fix this? Would I use a conditional inside the component which says, 'if the parameter contains "assets" then display upgradename.length?
  // And sure enough, if the 'content' parameter 'isArray', then I can return content.length instead of an endless string of image locations. Beautiful. Nice and hot.
  if (Array.isArray(content)) {
    return (
      <div className="individual-detail-row flex">
        <p className={className}>{description}</p>{" "}
        <p className="upgrade-content">
          {content.length}
          {suffix}
        </p>
      </div>
    );
  } else {
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
}
