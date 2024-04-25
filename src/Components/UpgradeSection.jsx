export default function UpgradeSection({ upgrades, increaseHPS }) {
  return (
    <section className="upgrade-section">
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
                          upgrade.audio
                        )
                }
              />
              {upgrade.name}, Costs: {upgrade.cost} Gets you:{" "}
              {upgrade.increaseValue}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
