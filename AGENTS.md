## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

# AGENTS.md

## Project

This is a React + Vite + TypeScript application.

Backend/services may use Firebase:
- Firebase Hosting
- Firestore
- Firebase Authentication when applicable

## Development

Install dependencies:

npm install

Start development server:

npm run dev

Build:

npm run build

Lint:

npm run lint

## General Rules

- Use TypeScript.
- Do not convert TypeScript files to JavaScript.
- Prefer existing project patterns over introducing new libraries.
- Do not install new npm packages unless they are actually necessary.
- Before installing a package, explain why the existing dependencies cannot solve the problem.
- Keep changes scoped to the requested task.
- Do not refactor unrelated files.
- Preserve existing behavior unless the task explicitly changes it.
- Reuse existing components and utilities where practical.
- Avoid duplicated logic.

## React

- Prefer functional components and hooks.
- Keep components reasonably small.
- Extract reusable logic when it improves clarity.
- Do not add unnecessary state.
- Avoid unnecessary useEffect usage.
- Preserve responsive behavior.

## Firebase

- Never expose Firebase Admin credentials or service-account credentials to client code.
- Never commit service account JSON files, private keys, or secrets.
- Use environment variables where appropriate.
- Do not modify Firebase security rules unless the task specifically requires it.

## Git

- Never force push.
- Never commit directly to main unless explicitly requested.
- Do not discard unrelated working-tree changes.
- Do not run destructive Git commands such as:
  git reset --hard
  git clean -fd
  unless explicitly requested.

## Before Changing Code

For non-trivial changes:

1. Inspect the relevant code.
2. Determine the root cause or implementation approach.
3. Make the smallest coherent change.
4. Check for related call sites/types.
5. Validate the result.

## Definition of Done

Before declaring a coding task complete:

1. Run the relevant tests if available.
2. Run:

   npm run build

3. Run lint/type checking when available.
4. Fix errors introduced by your changes.
5. Review the final diff for unintended changes.
6. Summarize:
   - what changed
   - files changed
   - validation performed
   - anything still unresolved

Do not say a task is complete if the build or relevant tests fail.