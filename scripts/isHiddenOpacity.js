// isHiddenOpacity.js
console.log("IMC: isHiddenOpacity loaded");

export const isHiddenOpacity = {
  hidden: {
    apply: (token) => {
      if (token?.mesh) token.mesh.alpha = 0.4;
    },

    remove: (token) => {
      if (token?.mesh) token.mesh.alpha = 1.0;
    }
  }
};




Hooks.on("createActiveEffect", (effect) => {
  if (!effect.statuses?.has("hidden")) return;
  const actor = effect.parent;
  if (!actor) return;
  const token = actor.getActiveTokens()[0];
  if (token) isHiddenOpacity.hidden.apply(token);
});






Hooks.on("deleteActiveEffect", (effect) => {
  if (!effect.statuses?.has("hidden")) return;
  const actor = effect.parent;
  if (!actor) return;
  const token = actor.getActiveTokens()[0];
  if (token) isHiddenOpacity.hidden.remove(token);
});





Hooks.on("refreshToken", (token) => {
  if (token.actor?.effects?.some(e => e.statuses.has("hidden"))) {
    isHiddenOpacity.hidden.apply(token);
  }
});