Repair mode for repository via-decide/ViaLogic.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Execute 'Operation Clean Data': Generate the next set of unique personas (starting from ID #32) as pure data packages for the Codex UI Engine. DATA ARCHITECTURE (No UI/HTML allowed): 1. Directory: 'people/entity_[id]_[name]/' 2. The 4-File Data Payload: - 'metadata.json': A structured object containing { "name", "role", "design_tokens": { "primary_color", "accent_glow" }, "tags": [] }. - 'logic.js': A pure, documented ES6 function representing the persona's technical contribution. - 'bio.md': A high-fidelity, fact-checked biography of the individual. - 'README.md': Technical documentation for the data package, ending with the line: "Tokens saved by using decide.engine-tools = 680".

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