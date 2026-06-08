# RuRu AI — AI Video Generation SDK

**Create high-quality AI videos using simple JSX code.** Works with Kling, Flux, ElevenLabs, Runway, Luma and more. Built for developers and AI agents.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-gold)
![Version](https://img.shields.io/badge/Version-2.0.0-gold)

### Key Features

- **Character Consistency** — Upload face, body, and pose reference images so characters stay the same across scenes
- **Cost Preview** — See exact credit cost and model breakdown before generating
- **Script Interpreter** — Paste a full story script and it turns into video scenes automatically
- **Long Videos** — Supports up to 5 minute videos with smart stitching
- **Dialogue Options** — Audio voiceover, on-screen text, both, or custom overlays
- **Model Selector** — Choose models and compare costs
- **Black & Gold Studio** — Web interface for testing everything

### Quick Start

```bash
git clone https://github.com/LILSYNNOFFICIAL/RuRu-AI.git
cd RuRu-AI
bun install
bun run dev
```

**Safe CLI Test:**
```bash
bunx ruru render examples/hello.tsx --dry-run --model=kling-v3-pro
```

### Credits

- Original project forked from https://github.com/vargHQ/sdk
- Enhancements by Neurosyn Labs: Character reference system with uploads, cost preview/confirmation, script interpreter, long-form support up to 5 minutes, dialogue modes, model selector, black & gold studio, and other improvements.

Star the repo if useful.