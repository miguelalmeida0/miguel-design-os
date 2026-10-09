# Personal design engine

The working path is a small CLI feeding the coding host, with reference retrieval and explicit correction memory. The host still inspects pixels, reasons about the project, writes code and checks it in a browser. There is no model training, hosted generation service or model API charge.

## Responsibility boundaries

| Module | Owns |
| --- | --- |
| `tools/design-os.mjs` | Small lazy entrypoint; new engine commands do not load the legacy validator CLI |
| `tools/engine/store.mjs` | Private atomic storage, exclusive writer lock, profile bounds and file size limits |
| `tools/engine/catalog.mjs` | Compact derived index, context filtering, ranked lexical retrieval and selected-image hash verification |
| `tools/engine/brief.mjs` | Consequential missing facts, scoped corrections and a bounded host packet |
| `tools/engine/feedback.mjs` | Exact user quotes, unique correction events, scope-specific supersession and history |
| `tools/engine/cli.mjs` | The small user/host command surface |
| `tools/design-os-legacy.mjs` | Existing validators and explicit older workflows with their original behavior |

## Evidence and context

The normal reference result includes only visual inspiration. Existing project screenshots and failure evidence are preserved separately and stay available to targeted QA tools. Historical approval folders are storage metadata, not confirmed taste claims.

Supported project contexts are `mobile-product`, `product-ui`, `dense-product`, `browse` and `editorial`. A project must supply its context. Retrieval filters to it before ranking; an explicit reference list must belong to it. A future cross-context transfer needs a deliberate role and should not be achieved by removing that filter.

Titles, tags, actual pixel observations and short image-specific notes support lexical retrieval. Query matches determine relevance; a user's image endorsement is a small tie-breaker. No universal palette or aesthetic is calculated. Feature observations remain marked as interpretations.

Before writing a packet, the engine checks selected files against their recorded SHA-256. It then marks pixel inspection as required. A valid hash proves file identity; it does not prove an AI host viewed or understood the image. Stills do not prove animation, behavior or layout at other widths.

## Memory

Import the private v1 state using `taste import --from <file>`. Import preserves records, correction history and existing runs. It refuses to replace a populated profile; `--merge` adds missing records by source path or event identity. A repeated identical merge does not rewrite state.

Feedback stores the exact user quote and source. Global rules apply everywhere. Context rules apply only to that context; project rules only to that project. The workflow rule allowing one grounded direction applies to design preparation. The correction about presenting simply “references” applies to reference browsing.

A correction replaces only the same key in the same scope. Superseded events stay recorded. Returning to an earlier instruction creates a new event, so imports can preserve the full history. Repeating the current correction is a no-op. Agent feature observations never become user preferences automatically.

## Privacy and persistence

The default private root is ignored `.design-os-private/`, with one directory per profile. `DESIGN_OS_PRIVATE_DIR` can name a dedicated private location. Writes stay inside the selected profile, reject symbolic-link paths, use 0600 files and 0700 created directories, and refuse data above 32 MiB. State updates use an exclusive lock and atomic replacement. A busy lock fails closed; it is not automatically stolen.

Exports create a new private file exclusively. They cannot replace a prior packet or write into another profile. Runs are append-only private directories. No command copies reference images into the tracked/public tree or sends them to a model service.

The private profile is the durable source; the index is disposable derived data. A source inode, size or modification-time change invalidates the cache. A warm reference query reads the compact index, not the complete collection of parent manifests or rulebooks. Only chosen originals are read for hash validation.

Uploaded originals retain their Library IDs in source metadata. A new host session must materialize missing originals through its supported private file tools; this local CLI does not fetch private remote bytes. Restored private originals can live at `<profile-directory>/references/<library-file-id>.png`; selected results find them even when the index is already warm. Repository references rebase to the current checkout. Their recorded SHA-256 must still match. Never claim an unavailable original was inspected.

## Verification and limits

Run the Node test suite, the legacy `doctor`, syntax checks and `git diff --check`. Node's built-in test runner is sufficient; no lint or TypeScript configuration exists at the repository root. The archived Studio's package is unrelated and must not be presented as this engine.

The regression fixtures capture 13 existing command contracts, including fail-closed validation and ordered failure-search results. Engine tests cover reference separation, scope isolation, fresh-process recall, cache invalidation, no-op updates, duplicate assets, history reverts, missing brief facts, changed originals, private path guards, append-only runs, export safety and locking.

`node tools/benchmark-engine.mjs` measures a cold index build, 30 warm lookups, index bytes and a sample packet from the imported profile. It uses a temporary copy and leaves the source intact. Latency depends on the machine. Context savings and fast retrieval do not establish better designs: Miguel's accepted functioning designs and review time remain the product measure.

This cleanup changes engine/workflow behavior and preserves browser QA tools. It does not modify a frontend or prove agency retention, economics or superiority over a good taste skill plus images.
