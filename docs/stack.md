# Stack — Smallest Practical Version

## Simplification proposal (needs your yes)
Your brief mentions students **and** a coordinator. Real roles would need logins, a shared database, and a server — that is the heavy version. Here is the simpler version I propose, which runs **fully in the browser** with no logins, no payments, no server:

| Brief asked for | V1 simplification |
|---|---|
| Students + coordinator roles | One shared page; anyone can add or complete tasks. Roles are a demo concept, not enforced. |
| Logins | None — no accounts at all |
| Shared database | Browser `localStorage` (data lives on that one device's browser) |
| Live data / server | None — a single static page |

**Trade-off to understand:** localStorage means tasks saved on your laptop's browser will *not* appear on your friend's phone. Real syncing is a V2 feature once you're ready for a server. For the hackathon MVP, "visible and persistent on one device" is enough to demo.

## The stack (all confirmed if you say yes)
- **HTML** — the page structure (the "interface")
- **CSS** — the look, mobile-first so it works on a phone
- **JavaScript** — the behaviour (choose, confirm, see the result) and saving to localStorage
- **Git** — snapshots of our code
- **Hosting** — runs by opening `index.html` in a browser; no install, no server

## Why this stack
- Zero setup: no frameworks, no installs, no accounts.
- Everything is in one folder you can read and understand line by line — good for your learning goals.
- Easy to upgrade later: the same HTML/JS can later talk to a real server.
