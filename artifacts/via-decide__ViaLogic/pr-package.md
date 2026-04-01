Branch: simba/execute-operation-clean-data-generate-the-next-s
Title: Execute 'Operation Clean Data': Generate the next set of unique perso...

## Summary
- Repo orchestration task for via-decide/ViaLogic
- Goal: Break the GitHub contribution record by saturating the 'people' folder with high-value raw data while ensuring zero risk to the repository's UI integrity or root architecture.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.