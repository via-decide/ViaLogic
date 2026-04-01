You are working in repository via-decide/ViaLogic on branch main.

MISSION
Build 'DaxiniGalaxy'-the 3D orbital mapping logic for the 24,000-unit network. CORE ARCHITECTURE (The Stellar Map): 1. The Spherical Coordinate Engine: - In 'js/registry-loader.js', implement a conversion logic that maps Entity IDs to 3D space. - Use the 'Golden Spiral on a Sphere' algorithm to distribute 24,000 nodes evenly across a 3D globe. 2. The WebGL Starfield: - Replace the 2D canvas with a 'Lightweight 3D Context' (Vanilla WebGL or CSS3D). - Render each of the 6,321+ entities as a glowing particle in a 3D star-field. 3. The Orbital Rotation Logic: - Implement a 'Sovereign Spin'-the galaxy must slowly rotate on its axis, with the 'Active Sectors' (where the Swarm is currently pushing PRs) glowing brighter. 4. The 3D Camera Controls: - Add 'Infinite Zoom' and 'Rotate' capabilities. Users should be able to "Fly" through the 24,000-unit network using their mouse or trackpad on the MacBook Air M2. UI/UX SPECIFICATIONS:

CONSTRAINTS
Strictly no heavy libraries (No Three.js if possible, use raw CSS3D/WebGL for speed). Must be optimized for the M2 Neural Engine to handle 24,000 vertex calculations in real-time.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: HTML
- README snippet:
# ViaLogic

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.