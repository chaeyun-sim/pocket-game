# Repository Guidelines

## Project Structure & Module Organization

LUMA is a dependency-free, mobile-first canvas game. Keep the root directory limited to entry points and project configuration:

- `src/game.js` owns rendering, input, audio, and the game loop.
- `src/logic.js` contains deterministic, independently testable rules.
- `tests/` contains Node test-runner suites.
- `index.html` and `styles.css` define the interface; `sw.js` and `manifest.webmanifest` provide installability and offline caching.

Group code by feature or subsystem rather than placing unrelated modules in a single directory. Document any intentional departure from this layout here.

## Build, Test, and Development Commands

The project requires a recent Node.js and Python 3 installation but has no package dependencies:

- `npm run dev` serves the game at `http://localhost:8080`.
- `npm test` runs all deterministic logic tests with `node:test`.
- `npm run check` checks JavaScript syntax without modifying files.

Do not commit generated build output or dependency directories. Add them to `.gitignore` when the relevant tooling is introduced.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, single-quoted JavaScript strings, and `camelCase` identifiers. Use uppercase names only for true constants such as `TAU`. Keep reusable formulas and seeded behavior in `src/logic.js`; browser APIs and mutable scene state belong in `src/game.js`. Use lowercase kebab-case for future asset filenames, such as `player-idle.png`.

## Testing Guidelines

Add tests with each scoring, collision, spawning, or difficulty change. Name files `*.test.js` and describe observable behavior in each `test()` call. Keep tests fast and deterministic; use the seeded generator for randomness. Run `npm test` and `npm run check` before submitting changes. There is no numeric coverage threshold, but new rule branches should be exercised.

## Commit & Pull Request Guidelines

There is no Git history from which to infer an existing convention. Use short, imperative commit subjects, optionally with a Conventional Commit prefix, such as `feat: add player movement` or `fix: prevent duplicate scoring`.

Pull requests should explain the change, motivation, and verification performed. Link relevant issues and include screenshots or recordings for visual or gameplay changes. Keep each pull request focused, update documentation when behavior changes, and ensure configured checks pass before requesting review.
