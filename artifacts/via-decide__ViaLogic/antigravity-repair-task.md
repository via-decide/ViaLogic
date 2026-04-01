Repair mode for repository via-decide/ViaLogic.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Execute 'Wave 3: AssetsBurst': Generate and push 6,000 unique PRs to the '/assets' directory to move the total commit count to 18,000.

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