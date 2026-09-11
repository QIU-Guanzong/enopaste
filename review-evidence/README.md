# UI review evidence

Synthetic local fixtures only. No database, user paste, real password or personal information is included.

To reproduce on the relevant PR branch, copy `qa-page.tsx` to `src/app/qa/page.tsx`, run the development server, and visit `/qa`. Remove that local route after testing; it is deliberately not part of the feature PRs.

- `fix/accessible-controls`: password labels, Show/Hide actions, error association, creation form toggle states.
- `feat/viewer-line-wrap`: default horizontal scroll, Wrap toggle, keyboard Space toggle, unchanged code text.
- `feat/paste-reading-stats`: word count and UTF-8 byte size for a mixed text/emoji sample.

Screenshots show the original branch baseline and each independent change. Desktop Chrome on macOS; no claim of a full mobile/device or screen-reader audit.
