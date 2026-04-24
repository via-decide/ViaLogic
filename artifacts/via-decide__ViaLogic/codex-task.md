You are working in repository via-decide/ViaLogic on branch main.

MISSION
Implement an Explanation Engine (core/explainer.js) to provide reasoning traces for rule evaluations.

CONSTRAINTS
- Max 1 new file (core/explainer.js) - Zero external dependencies - Explanation overhead <5ms - Must not affect rule determinism

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
# ViaLogic ## Global UI/UX Engine The root experience is now powered by a reusable map engine with modular UI systems: - `ui/map-engine.js` orchestrates data loading, scenery generation, progression, and path rendering. - `ui/entity-renderer.js` dynamically creates thinker entities from `data/ent

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