Hooks.on("ready", () => {
  const customEffects = [
    {
      id: "imc-test",
      name: "Test",
      img: "modules/LANCER-MoreConditions/icons/test.svg"
    },
    {
      id: "imc-nano-repair-cloud",
      name: "Nano-Repair-Cloud",
      img: "modules/LANCER-MoreConditions/icons/Nano-Repair-Cloud.svg"
    },
	{
      id: "imc-crush-targeting",
      name: "Crush-Targeting",
      img: "modules/LANCER-MoreConditions/icons/Crush-Targeting.svg"
    },
	{
      id: "imc-rebound-scan",
      name: "Rebound-Scan",
      img: "modules/LANCER-MoreConditions/icons/Rebound-Scan.svg"
    },
	{
      id: "imc-tear-down",
      name: "Tear-Down",
      img: "modules/LANCER-MoreConditions/icons/Tear-Down.svg"
    },
	{
      id: "imc-blind",
      name: "Blind",
      img: "modules/LANCER-MoreConditions/icons/Blind.svg"
    },
	{
      id: "imc-leadership-die",
      name: "Leadership-Die",
      img: "modules/LANCER-MoreConditions/icons/Leadership-Die.svg"
    },
	{
      id: "imc-prepare",
      name: "Prepare",
      img: "modules/LANCER-MoreConditions/icons/Prepare.svg"
    },
	{
      id: "imc-climbing",
      name: "Climbing",
      img: "modules/LANCER-MoreConditions/icons/Climbing.svg"
    },
	
	
  ];

  // Merges these effects with the existing LANCER ones
  CONFIG.statusEffects = [
    ...CONFIG.statusEffects,
    ...customEffects
  ];

  console.log("imc: Custom conditions registered", CONFIG.statusEffects);
});