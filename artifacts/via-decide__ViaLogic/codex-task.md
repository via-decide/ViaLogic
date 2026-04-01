You are working in repository via-decide/ViaLogic on branch main.

MISSION
Execute 'Operation Clean Data': Generate the next set of unique personas (starting from ID #32) as pure data packages for the Codex UI Engine. DATA ARCHITECTURE (No UI/HTML allowed): 1. Directory: 'people/entity_[id]_[name]/' 2. The 4-File Data Payload: - 'metadata.json': A structured object containing { "name", "role", "design_tokens": { "primary_color", "accent_glow" }, "tags": [] }. - 'logic.js': A pure, documented ES6 function representing the persona's technical contribution. - 'bio.md': A high-fidelity, fact-checked biography of the individual. - 'README.md': Technical documentation for the data package, ending with the line: "Tokens saved by using decide.engine-tools = 680".

CONSTRAINTS
Preserve existing code; prefer additive changes.

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