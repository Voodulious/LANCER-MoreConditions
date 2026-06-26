// isGrappled.js
console.log("LMC: isGrappled (track only grappled tokens) loaded");

const GRAPPLED = new Set();           // token.id strings currently tracked
const _debounce = new Map();
const MAGNITUDE = 20; // pixels grappled units move by









// Helpers (same as before)
function detectVisualTarget(token) {
  if (!token) return null;
  const m = token.mesh;
  if (!m) return token.object?.position ? { obj: token.object, prop: "position" } : null;
  if (m.position && typeof m.position.set === "function") return { obj: m, prop: "position" };
  if (m.transform?.position && typeof m.transform.position.set === "function") return { obj: m.transform, prop: "position" };
  if (m.vertexData && m.vertexData.length >= 2) return { obj: m, prop: "vertexData", kind: "vertexData" };
  return token.object?.position ? { obj: token.object, prop: "position" } : null;
}






















function findNearestEdgeAware(token) {
  const maxCenter = canvas.grid.size + 1;
  let bestEdge = null, bestEdgeVal = Infinity;
  let bestCenter = null, bestCenterVal = Infinity;
  for (const t of canvas.tokens.placeables) {
    if (t.id === token.id) continue;
    const dx = t.center.x - token.center.x;
    const dy = t.center.y - token.center.y;
    const centerDist = Math.hypot(dx, dy);
    const halfA = Math.max(token.width, token.height) / 2;
    const halfB = Math.max(t.width, t.height) / 2;
    const edgeDist = centerDist - (halfA + halfB);
    if (edgeDist <= 0 && Math.abs(edgeDist) < Math.abs(bestEdgeVal)) { bestEdge = t; bestEdgeVal = edgeDist; }
    if (centerDist <= maxCenter && centerDist < bestCenterVal) { bestCenter = t; bestCenterVal = centerDist; }
  }
  return bestEdge || bestCenter || null;
}





















function isAdjacent(token) {
  if (!token) return false;
  for (const t of canvas.tokens.placeables) {
    if (t.id === token.id) continue;
    const dx = t.center.x - token.center.x;
    const dy = t.center.y - token.center.y;
    const centerDist = Math.hypot(dx, dy);
    const halfA = Math.max(token.width, token.height) / 2;
    const halfB = Math.max(t.width, t.height) / 2;
    const edgeDist = centerDist - (halfA + halfB);
    if (edgeDist <= 0) return true;
    if (centerDist <= (canvas.grid.size + 1)) return true;
  }
  return false;
}




















//Moving token art towards each other
function nudgeTowardNearest(token, magnitude = MAGNITUDE) {
  const partner = findNearestEdgeAware(token);
  if (!partner) return false;
  const dx = partner.center.x - token.center.x;
  const dy = partner.center.y - token.center.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = dx / len, ny = dy / len;
  const offX = nx * magnitude, offY = ny * magnitude;
  const t = detectVisualTarget(token);
  if (!t) return false;

  if (t.kind === "vertexData" && t.obj.vertexData) {
    const vd = t.obj.vertexData;
    for (let i = 0; i < vd.length; i += 2) { vd[i] += offX; vd[i + 1] += offY; }
    if (typeof t.obj._updateGeometry === "function") try { t.obj._updateGeometry(); } catch {}
  } else if (t.obj[t.prop] && typeof t.obj[t.prop].set === "function") {
    const curX = t.obj[t.prop].x ?? 0;
    const curY = t.obj[t.prop].y ?? 0;
    t.obj[t.prop].set(curX + offX, curY + offY);
  }
  return true;
}























// Helper: adjacency test between two tokens only
function isAdjacentBetween(a, b) {
  if (!a || !b) return false;
  const dx = b.center.x - a.center.x;
  const dy = b.center.y - a.center.y;
  const centerDist = Math.hypot(dx, dy);
  const halfA = Math.max(a.width, a.height) / 2;
  const halfB = Math.max(b.width, b.height) / 2;
  const edgeDist = centerDist - (halfA + halfB);
  if (edgeDist <= 0) return true;                     // edges touch/overlap
  if (centerDist <= (canvas?.grid?.size ?? 0) + 1) return true; // centers within one tile
  return false;
}


























// Robust check whether an ActiveEffect represents grappled
function effectIsGrappled(effect) {
  if (!effect) return false;
  const statuses = effect.statuses;
  if (statuses) {
    if (typeof statuses.has === "function" && statuses.has("grappled")) return true;
    if (Array.isArray(statuses) && statuses.includes("grappled")) return true;
    try { if ([...statuses].includes("grappled")) return true; } catch {}
  }
  if (typeof effect.label === "string" && effect.label.toLowerCase() === "grappled") return true;
  return false;
}

























/* ---------- Hooks ---------- */

// Track newly grappled tokens and nudge once on create
Hooks.on("createActiveEffect", (effect) => {
  try {
    if (!effect?.parent) return;
    if (!effectIsGrappled(effect)) return;
    const token = effect.parent.getActiveTokens()[0];
    if (!token) return;
    GRAPPLED.add(token.id);
    // Only nudge if adjacent (keeps visuals sensible)
    if (isAdjacent(token)) nudgeTowardNearest(token);
  } catch (err) {
    console.error("createActiveEffect (grapple) error", err);
  }
});

// Stop tracking when grapple removed
Hooks.on("deleteActiveEffect", (effect) => {
  try {
    if (!effect?.parent) return;
    if (!effectIsGrappled(effect)) return;
    const token = effect.parent.getActiveTokens()[0];
    if (!token) return;
    GRAPPLED.delete(token.id);
    // clear any debounce timer
    const t = _debounce.get(token.id);
    if (t) { clearTimeout(t); _debounce.delete(token.id); }
  } catch (err) {
    console.error("deleteActiveEffect (grapple) error", err);
  }
});

// canvasReady: prune GRAPPLED list to tokens present on the canvas
Hooks.on("canvasReady", () => {
  if (!canvas?.tokens) return;
  for (const id of Array.from(GRAPPLED)) {
    if (!canvas.tokens.get(id)) GRAPPLED.delete(id);
  }
});

// When any grappled token moves, reapply nudge only for tracked grappled tokens
Hooks.on("updateToken", (document, change) => {
  try {
    if (!(change.x !== undefined || change.y !== undefined)) return;

    const moved = canvas.tokens.get(document.id);
    if (!moved) return;

    // Quick check: is the moved token itself tracked?
    if (!GRAPPLED.has(moved.id)) {
      // If not tracked, check whether it's adjacent to any tracked token.
      let adjacentToTracked = false;
      for (const id of GRAPPLED) {
        const tracked = canvas.tokens.get(id);
        if (!tracked) continue;
        if (isAdjacentBetween(tracked, moved)) { adjacentToTracked = true; break; }
      }
      // If the moved token is neither tracked nor adjacent to any tracked token, do nothing.
      if (!adjacentToTracked) return;
    }

    // At this point the moved token is relevant: either tracked itself or adjacent to a tracked token.
    const DEBOUNCE_MS = 150;

    // If the moved token itself is tracked, nudge it (debounced)
    if (GRAPPLED.has(moved.id)) {
      if (_debounce.has(moved.id)) clearTimeout(_debounce.get(moved.id));
      _debounce.set(moved.id, setTimeout(() => {
        nudgeTowardNearest(moved, MAGNITUDE);
        _debounce.delete(moved.id);
      }, DEBOUNCE_MS));
    }

    // Only iterate tracked tokens that are adjacent to the moved token
    for (const id of Array.from(GRAPPLED)) {
      if (id === moved.id) continue;
      const token = canvas.tokens.get(id);
      if (!token) { GRAPPLED.delete(id); continue; }

      if (!isAdjacentBetween(token, moved)) continue; // skip unrelated tracked tokens

      // Debounce per token to avoid repeated nudges during drag
      if (_debounce.has(id)) clearTimeout(_debounce.get(id));
      _debounce.set(id, setTimeout(() => {
        nudgeTowardNearest(token, MAGNITUDE);
        _debounce.delete(id);
      }, DEBOUNCE_MS));
    }
  } catch (err) {
    console.error("updateToken grapple reapply error", err);
  }
});

