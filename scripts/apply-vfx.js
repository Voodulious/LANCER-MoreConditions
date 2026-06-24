Hooks.on("updateActor", async (actor, changes) => {
  if (!actor?.prototypeToken) return;

  const token = actor.getActiveTokens()[0];
  if (!token) return;

  const activeStatuses = new Set(
    actor.effects
      .map(e => [...e.statuses])
      .flat()
  );

  handleConditionVFX(token, activeStatuses);
});

function handleConditionVFX(token, statuses) {
  // Example: your custom condition IDs
  const conditions = [
    "lmc-burning",
    "lmc-overloaded",
    "lmc-system-lock",
    "lmc-emp-shock",
	"lmc-test"
  ];

  for (const cond of conditions) {
    if (statuses.has(cond)) {
      applyVFX(token, cond);
    } else {
      removeVFX(token, cond);
    }
  }
}

function applyVFX(token, conditionId) {
  const effectName = `lmc-${conditionId}-${token.id}`;

  // Prevent duplicates
  if (Sequencer.EffectManager.getEffects({ name: effectName }).length > 0) return;

  let file = null;

  switch (conditionId) {
    case "lmc-burning":
      file = "jb2a.fire_burst.orange.02";
      break;
    case "lmc-overloaded":
      file = "jb2a.static_electricity.02.blue";
      break;
    case "lmc-system-lock":
      file = "jb2a.energy_strands.purple.01";
      break;
    case "lmc-emp-shock":
      file = "jb2a.shockwave.02.blue";
      break;
	case "lmc-test":
		file = "jb2a.static_electricity.02.blue";
		break;
  }

  if (!file) return;

  new Sequence()
    .effect()
    .file(file)
    .attachTo(token)
    .scale(1.2)
    .opacity(0.7)
    .persist()
    .name(effectName)
    .play();
}

function removeVFX(token, conditionId) {
  const effectName = `lmc-${conditionId}-${token.id}`;
  Sequencer.EffectManager.endEffects({ name: effectName });
}
