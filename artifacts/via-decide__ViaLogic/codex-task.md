You are working in repository via-decide/ViaLogic on branch main.

MISSION
Enhance 'DaxiniMapper' with 'DaxiniChronos'-a temporal sequencing logic for the 24,000-unit timeline. CORE ARCHITECTURE (The Time-Space Bridge): 1. The Chronological Parser: - Update 'scripts/generate-registry.js' to extract 'Birth Year' or 'Discovery Date' from the metadata of each folder.

CONSTRAINTS
Zero external timeline libraries. Use the Canvas API for the 24,000-node spiral rendering. The sorting logic must handle BC/BCE dates correctly to avoid 'negative index' errors.

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