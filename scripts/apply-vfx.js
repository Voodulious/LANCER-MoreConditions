import { tokenmagicVFX } from "./tokenmagic-vfx.js";   // ← updated name
import { jb2aVFX } from "./jb2a-vfx.js";               // unchanged


// When a condition is applied
Hooks.on("createActiveEffect", async (effect, options, userId) => {
  const actor = effect.parent;
  const token = actor?.getActiveTokens()[0];
  if (!token) return;

  const statusId = [...effect.statuses][0];
  if (!statusId) return;

  console.log("imc: ActiveEffect created:", statusId);

  handleConditionVFX(token, new Set([statusId]), statusId);
});


// When a condition is removed
Hooks.on("deleteActiveEffect", async (effect, options, userId) => {
  const actor = effect.parent;
  const token = actor?.getActiveTokens()[0];
  if (!token) return;

  const statusId = [...effect.statuses][0];
  if (!statusId) return;

  console.log("imc: ActiveEffect removed:", statusId);

  handleConditionVFX(token, new Set(), statusId);
});



function handleConditionVFX(token, statuses, changedCondition = null) {

  const conditions = [
    "imc-test",
    "prone",
    "bolster",
    "hidden",
    "shredded",
    "flying",
    "resistance_heat",
	"resistance_kinetic",
	"resistance_burn",
	"resistance_energy",
	"resistance_explosive",
	"downandout",
	"immobilized",
	"shutdown",
	"engaged",
	"mia",
	"exposed",
	"impaired",
	"lockon",
	"slow",
	"stunned",
	"imc-nano-repair-cloud",
	"imc-crush-targeting",
	"imc-rebound-scan",
	"imc-tear-down",
	"imc-blind",
	"imc-leadership-die",
	"imc-prepare",
	"core_power_active",
	"imc-climbing"
	
  ];

  for (const cond of conditions) {

    // APPLY VFX only if this condition icon is active
    if (statuses.has(cond)) {
      applyVFX(token, cond);
      continue;
    }

    // REMOVE VFX only if THIS condition icon was removed
    if (changedCondition === cond) {
      removeVFX(token, cond);
    }
  }
}



function applyVFX(token, conditionId) {
	
	let appliedSomething = false;

  // 1. TokenMagic special effects
  if (tokenmagicVFX[conditionId]?.apply) {
    tokenmagicVFX[conditionId].apply(token);
    appliedSomething = true;
  }

  // 2. JB2A / Sequencer effects
  if (jb2aVFX[conditionId]?.apply) {
    jb2aVFX[conditionId].apply(token);
    appliedSomething = true;
  }

  // 3. Fallback Sequencer VFX
  if (!appliedSomething) {

    const effectName = `imc-${conditionId}-${token.id}`;

    if (Sequencer.EffectManager.getEffects({ name: effectName }).length > 0) return;

    let file = null;

    switch (conditionId) {
      case "imc-test":
        file = "jb2a.arcane_hand";
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

    console.log("Applying fallback VFX for:", conditionId, "using file:", file);
  }
}



function removeVFX(token, conditionId) {

	let removedSomething = false;
	
  // 1. TokenMagic VFX
  if (tokenmagicVFX[conditionId]?.remove) {
    tokenmagicVFX[conditionId].remove(token);
    removedSomething = true;
  }

  // 2. JB2A VFX
  if (jb2aVFX[conditionId]?.remove) {
    jb2aVFX[conditionId].remove(token);
    removedSomething = true;
  }

  // 3. Fallback Sequencer removal
  if (!removedSomething) {
    const effectName = `imc-${conditionId}-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("Removing fallback VFX for:", conditionId);
  }
}
