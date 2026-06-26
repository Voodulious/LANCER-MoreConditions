Hooks.on("ready", () => {
  const customEffects = [
    {
      id: "lmc-test",
      name: "Test",
      img: "modules/LANCER-MoreConditions/icons/test.svg"
    },
    {
      id: "imc-nano-repair-cloud",
      name: "Nano-Repair-Cloud",
      img: "modules/LANCER-MoreConditions/icons/Nano-Repair-Cloud.svg"
    }
  ];

  // Merge your effects with the existing LANCER ones
  CONFIG.statusEffects = [
    ...CONFIG.statusEffects,
    ...customEffects
  ];

  console.log("LMC: Custom conditions registered", CONFIG.statusEffects);
});
