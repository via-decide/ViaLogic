You are working in repository via-decide/ViaLogic on branch main.

MISSION
Enhance 'DaxiniMapper' with 'DaxiniAtlas'-a spatial clustering logic for 24,000-unit navigation. CORE ARCHITECTURE (The Spatial Bridge): 1. The Sector Classifier: - Enhance 'scripts/generate-registry.js' to read the 'tags' and 'role' from 'metadata.json'. - Map each entity to one of four 'Knowledge Sectors': [Science], [Math], [Code], [Logic]. 2. The Coordinate Generator:

CONSTRAINTS
Zero external mapping libraries (No Leaflet, No D3). Use pure Vanilla JS and HTML5 Canvas for the 24,000-node render to ensure 60FPS on the MacBook Air M2.

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