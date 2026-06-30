// isGrappled.js
// Visually nudges grappled tokens toward the nearest grappled token
console.log("IMC: isGrappled loaded");

// Track which tokens currently have the grappled condition
const GRAPPLED = new Set();

// Store debounce timers to prevent repeated nudging during drags
const _debounce = new Map();

// How many pixels to shift the token art toward the target
const MAGNITUDE = 20;

// Returns true if two tokens are adjacent (edges touching or centers within one grid square)
function isAdjacentBetween(a, b) {
  if (!a || !b) return false;
  const dx = b.center.x - a.center.x;
  const dy = b.center.y - a.center.y;
  const dist = Math.hypot(dx, dy);
  const halfA = Math.max(a.width, a.height) / 2;
  const halfB = Math.max(b.width, b.height) / 2;
  // Edges overlap, or centers are within one grid tile
  return (dist - (halfA + halfB)) <= 0 || dist <= (canvas?.grid?.size ?? 0) + 1;
}

// Shifts the token's visual mesh toward the nearest grappled token without changing its grid position
function nudgeTowardNearest(token, magnitude = MAGNITUDE) {
  // Find the closest grappled token on the canvas
  let nearest = null, bestDist = Infinity;
  for (const t of canvas.tokens.placeables) {
    if (t.id === token.id) continue;
    if (!GRAPPLED.has(t.id)) continue; // Only consider other grappled tokens
    const dx = t.center.x - token.center.x;
    const dy = t.center.y - token.center.y;
    const dist = Math.hypot(dx, dy);
    if (dist < bestDist) { nearest = t; bestDist = dist; }
  }
  if (!nearest || bestDist === 0) return;
  
  // Calculate normalized direction toward nearest grappled token
  const nx = (nearest.center.x - token.center.x) / bestDist;
  const ny = (nearest.center.y - token.center.y) / bestDist;
  
  // Offset the mesh position in that direction
  if (token.mesh?.position) {
    token.mesh.position.set(
      token.mesh.position.x + nx * magnitude,
      token.mesh.position.y + ny * magnitude
    );
  }
}

// Checks if an ActiveEffect has the "grappled" status condition
function effectIsGrappled(effect) {
  return effect?.statuses?.has?.("grappled") ?? false;
}

// When a grappled effect is added: track the token and nudge if adjacent to another grappled token
Hooks.on("createActiveEffect", (effect) => {
  if (!effectIsGrappled(effect)) return;
  const token = effect.parent?.getActiveTokens()?.[0];
  if (!token) return;
  GRAPPLED.add(token.id);
  if (isAdjacentBetween(token, findNearestGrappled(token))) nudgeTowardNearest(token);
});

// When a grappled effect is removed: stop tracking and clear any pending nudge
Hooks.on("deleteActiveEffect", (effect) => {
  if (!effectIsGrappled(effect)) return;
  const token = effect.parent?.getActiveTokens()?.[0];
  if (token) {
    GRAPPLED.delete(token.id);
    clearTimeout(_debounce.get(token.id));
    _debounce.delete(token.id);
  }
});

// On canvas load, prune tracked tokens that no longer exist on this scene
Hooks.on("canvasReady", () => {
  for (const id of GRAPPLED) {
    if (!canvas.tokens.get(id)) GRAPPLED.delete(id);
  }
});

// When any token moves, reapply nudge to grappled tokens that are adjacent
Hooks.on("updateToken", (document, change) => {
  // Only care about position changes
  if (change.x === undefined && change.y === undefined) return;
  const moved = canvas.tokens.get(document.id);
  if (!moved) return;

  // Collect all grappled tokens that are the mover or adjacent to it
  const relevant = new Set();
  if (GRAPPLED.has(moved.id)) relevant.add(moved.id);
  for (const id of GRAPPLED) {
    if (canvas.tokens.get(id) && isAdjacentBetween(canvas.tokens.get(id), moved)) {
      relevant.add(id);
    }
  }

  // Debounce nudge per token to avoid jitter during drags
  for (const id of relevant) {
    clearTimeout(_debounce.get(id));
    _debounce.set(id, setTimeout(() => {
      nudgeTowardNearest(canvas.tokens.get(id));
      _debounce.delete(id);
    }, 150));
  }
});

// Finds the nearest grappled token on the canvas by center distance, excluding itself
function findNearestGrappled(token) {
  let nearest = null, bestDist = Infinity;
  for (const t of canvas.tokens.placeables) {
    if (t.id === token.id) continue;
    if (!GRAPPLED.has(t.id)) continue; // Only consider other grappled tokens
    const dist = Math.hypot(t.center.x - token.center.x, t.center.y - token.center.y);
    if (dist < bestDist) { nearest = t; bestDist = dist; }
  }
  return nearest;
}