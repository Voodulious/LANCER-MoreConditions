Hooks.once("init", () => {
  const newEffects = [
    {
      id: "lmc-test",
      label: "Test Condition",
      icon: "modules/LANCER-MoreConditions/icons/test.svg"
    },
    {
      id: "my-other-condition",
      label: "My Other Condition",
      icon: "modules/LANCER-MoreConditions/icons/my_condition_2.svg"
    }
  ];

  CONFIG.statusEffects.push(...newEffects);
});
