export const createRandomGem = () => {
  let gem = {
    name: "",
    damage_type: "",
    power: null,
  };
  //generate damage type
  const ranVal = Math.floor(Math.random() * 100);

  if (ranVal < 22) {
    gem = {
      name: "Gem of Fire Resistance",
      damage_type: "fire",
      power: null,
    };
  } else if (ranVal < 44) {
    gem = {
      name: "Gem of Water Resistance",
      damage_type: "water",
      power: null,
    };
  } else if (ranVal < 66) {
    gem = {
      name: "Gem of Earth Resistance",
      damage_type: "earth",
      power: null,
    };
  } else if (ranVal < 88) {
    gem = {
      name: "Gem of Air Resistance",
      damage_type: "air",
      power: null,
    };
  } else {
    gem = {
      name: "Gem of General Resistance",
      damage_type: "all",
      power: null,
    };
  }

  //generate power
  const ranPower = Math.floor(Math.random() * 24 + 1);
  if (gem.damage_type === "all") {
    gem.power = Math.floor(ranPower / 2);
  } else gem.power = ranPower;

  return gem;
};
