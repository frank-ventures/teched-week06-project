export default function UpgradeSection({ upgrades, increaseHPS }) {
  return (
    <section className="upgrade-section">
      <h3>Give it a stir...</h3>
      <ul>
        {upgrades.map((upgrade) => {
          return (
            <li key={upgrade.name + upgrade.id}>
              <img
                src={upgrade.imageSource}
                className="upgrade-icon"
                onClick={
                  upgrade.onclick
                    ? upgrade.onclick
                    : () =>
                        increaseHPS(
                          `${upgrade.name}`,
                          upgrade.cost,
                          upgrade.increaseValue,
                          upgrade.audio,
                          upgrade.upgradeName
                        )
                }
              />
              {upgrade.name}, Costs: {upgrade.cost} Gets you:{" "}
              {upgrade.increaseValue}, You have {upgrade.userHas}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
