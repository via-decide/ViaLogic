Repair mode for repository via-decide/ViaLogic.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement an Explanation Engine (core/explainer.js) to provide reasoning traces for rule evaluations.

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
# ViaLogic ## Global UI/UX Engine The root experience is now powered by a reusable map engine with modular UI systems: - `ui/map-engine.js` orchestrates data loading, scenery generation, progression, and path rendering. - `ui/entity-renderer.js` dynamically creates thinker entities from `data/ent
- AGENTS snippet:
not found
- package.json snippet:
not found