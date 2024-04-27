import UpgradeDetail from "./UpgradeDetail";

export default function UpgradeSection({ upgrades, increaseHPS, userStats }) {
  return (
    <section className="upgrade-section">
      <h3>Give it a stir...</h3>
      <ul className="flex">
        {upgrades.map((upgrade) => {
          return (
            <li
              className="flex"
              key={upgrade.name + upgrade.id}
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
            >
              <img src={upgrade.imageSource} className="upgrade-icon" />
              <p className="upgrade-title">{upgrade.name}</p>

              <div className="upgrade-details-box flex">
                <UpgradeDetail
                  content={upgrade.cost}
                  description={"Costs: "}
                  className="upgrade-left"
                  suffix=" Ħ"
                />
                <UpgradeDetail
                  content={upgrade.increaseValue}
                  description={"Gets: "}
                  className="upgrade-left"
                  upgradeName={upgrade.upgradeName}
                  suffix=" Ħps"
                />
                <UpgradeDetail
                  content={userStats[upgrade.upgradeName]}
                  description={"You have: "}
                  className="upgrade-left"
                  suffix=""
                />
                {/* <p className="upgrade-cost">Costs: </p> <p>Ħ{upgrade.cost}</p>
                <p className="upgrade-value">Gets:</p>{" "}
                <p>{upgrade.increaseValue}Ħps</p>
                <p className="user-stat">You have</p>{" "}
                <p>{userStats[upgrade.upgradeName]}</p> */}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
