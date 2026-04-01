You are working in repository via-decide/ViaLogic on branch main.

MISSION
Enhance 'DaxiniMapper' with 'DaxiniLense'-a semantic zoom logic for multi-layered 24,000-unit visualization. CORE ARCHITECTURE (The Detail Engine): 1. The Level-of-Detail (LOD) Manager: - Implement 4 distinct Zoom States ($Z$): - Z1 (Macro): Only show Sector Glows (Science, Math, etc.) and Population Density. - Z2 (Meso): Reveal Entity IDs and Cluster names as glowing text. - Z3 (Micro): Render 'DaxiniProfile' cards with names and procedural SVG assets. - Z4 (Atomic): Fully hydrate the card with 'bio.md' text and the interactive 'logic.js' console. 2. The Frustum Culler:

CONSTRAINTS
Zero external mapping engines (No OpenLayers/D3). Use the CSS 'transform: scale()' and 'opacity' properties for hardware-accelerated rendering. Must support smooth pinch-to-zoom for mobile chrome.

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