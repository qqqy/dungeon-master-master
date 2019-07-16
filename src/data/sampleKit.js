export default {
  preparedSpells: [],
  spellList: [],
  weapons: [
    {
      nickname: "Example Blade",
      id: 1,
      type: "Longsword",
      die: 8,
      times: 1,
      damage: "slashing",
      // Prices are always in copper
      price: 1500,
      // Weight is always in ounces
      weight: 42,
      versatile: {
        // Versatile is for two-handed weilding
        die: 10,
        times: 1,
      }
    },
    {
      type: "Shortsword",
      id: 2,
      die: 6,
      times: 1,
      damage: "piercing",
      // Prices are always in copper
      price: 1000,
      // Weight is always in ounces
      weight: 32,
      finesse: true,
      light: true,
    }
  ],
  items: [],
  copper: 0
}