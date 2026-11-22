# Style Guide

> **Updated (2026-11-22):** restyled to a modern navy theme with the Sora font (loaded from Google Fonts). The older light-grey palette below is superseded — the live colours are in `styles.css`.

## Current theme (v2 — navy)
- Header: deep navy gradient (`#0a1530` → `#101d3f`) with white title
- Accent: `#23408f` navy (buttons, card top border, due dates)
- Cards: white, 16px rounded corners, soft navy shadow
- Done badge: `#16875a` green on `#e2f6ec`
- Font: **Sora** (Google Fonts), headings extra-bold with tight letter-spacing

Mobile-first: every layout must be checked at phone width (~375px) before desktop.

## Design principles
- **Big touch targets** — buttons at least 44px tall, easy to tap with a thumb.
- **One clear action per screen state** — the main journey (choose → confirm → see result) should never be ambiguous.
- **Visible deadlines** — dates are prominent, not buried; overdue items stand out.

## Colours (sample palette, easy to change later)
- Background: `#f7f8fa` (light grey)
- Card/panel: `#ffffff` with soft shadow
- Main accent: `#2f6fed` (blue) — primary buttons
- Success / done: `#1e9e5a` (green)
- Overdue / warning: `#d64545` (red)
- Text: `#1c1e21` dark grey

## Text
- System font stack (fast, no downloads): `-apple-system, "Segoe UI", Roboto, sans-serif`
- Task titles: bold, 16px+
- Deadlines: shown as "Due Fri 28 Nov" style, not raw timestamps

## Accessibility basics
- Every button has a clear text label (not icon-only).
- Status shown with words ("Done", "Overdue"), not colour alone.
