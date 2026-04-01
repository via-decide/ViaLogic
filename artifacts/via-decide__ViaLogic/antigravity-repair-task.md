Repair mode for repository via-decide/ViaLogic.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build 'DaxiniGalaxy'-the 3D orbital mapping logic for the 24,000-unit network. CORE ARCHITECTURE (The Stellar Map): 1. The Spherical Coordinate Engine: - In 'js/registry-loader.js', implement a conversion logic that maps Entity IDs to 3D space. - Use the 'Golden Spiral on a Sphere' algorithm to distribute 24,000 nodes evenly across a 3D globe. 2. The WebGL Starfield: - Replace the 2D canvas with a 'Lightweight 3D Context' (Vanilla WebGL or CSS3D). - Render each of the 6,321+ entities as a glowing particle in a 3D star-field. 3. The Orbital Rotation Logic: - Implement a 'Sovereign Spin'-the galaxy must slowly rotate on its axis, with the 'Active Sectors' (where the Swarm is currently pushing PRs) glowing brighter. 4. The 3D Camera Controls: - Add 'Infinite Zoom' and 'Rotate' capabilities. Users should be able to "Fly" through the 24,000-unit network using their mouse or trackpad on the MacBook Air M2. UI/UX SPECIFICATIONS:

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
# ViaLogic
- AGENTS snippet:
not found
- package.json snippet:
not found