# Project Brief — Group Project Tracker

Source: Apexelerate brief (verbatim copy in `docs/idea.md`).

## Problem
Group projects go off track because tasks and deadlines are not visible to everyone.

## First-release outcome
Keep a group task and deadline visible, so anyone who opens the page can see what is due and confirm it.

## Users
- **Students** — view tasks, mark their own progress.
- **Coordinator** — sets tasks and deadlines.

## Main user journey
Open the page → choose an option (e.g. mark a task done / add a task) → confirm → see the result immediately.

## Failure cases to handle
- Phone user opens the page — it must be readable and tappable on a small screen.
- User taps "mark done" twice — the app should not break or duplicate.
- Page is closed and reopened — saved data should still be there (within the limits of our storage choice).

## Constraints
- Works on a phone (responsive design).
- No payments in version one.

## Decisions to confirm
| Decision | Proposal (pending Hannah's yes) |
|---|---|
| Stack & hosting | Static HTML/CSS/JS, runs locally in the browser — see `docs/stack.md` |
| What is stored & who accesses it | Tasks stored in the browser's localStorage; no accounts, anyone with the page can edit — see `docs/stack.md` |
| Real vs demo integrations | Everything is local and real; no external services in v1 |
| Acceptance test | See Mission Card 01 |
