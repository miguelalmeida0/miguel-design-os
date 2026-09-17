# Studio Preview

Studio Preview is a local visual concept renderer for Miguel Design OS.

It is not a production app. It exists to render three distinct concept routes before implementation:

- `/concept/1`
- `/concept/2`
- `/concept/3`

Run locally:

```sh
cd studio-preview
npm install
npm run dev
```

Capture concepts from the repo root:

```sh
node tools/capture-concepts.mjs --url http://localhost:5174
```

No hosted Lovable, screenshot-to-code generation, external models, or API keys are used.
