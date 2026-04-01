Branch: simba/improve-repository-via-decidevialogic
Title: Improve repository via-decide/ViaLogic

## Summary
- Repo orchestration task for via-decide/ViaLogic
- Goal: Fix the previous pathing errors by correctly populating the 'people' folder with 16 unique historical figures, restoring the momentum of the world-record attempt.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.