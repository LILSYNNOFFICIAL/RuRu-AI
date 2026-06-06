# RuRu AI — AI Video Generation SDK

**Create high-quality AI videos using simple JSX code.** Works with Kling, Flux, ElevenLabs, Runway, Luma and more. Built for developers and AI agents.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?logo=bun\&logoColor=fff)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs\&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-gold)
![Version](https://img.shields.io/badge/Version-2.0.0-gold)

## Key Features

* **Character Consistency** — Upload face, body, and pose reference images so characters stay the same across scenes (Kling Subject Binding / image_reference support)
* **Cost Preview** — See exact credit cost and model breakdown before generating
* **Script Interpreter** — Paste a full story script and it turns into video scenes automatically
* **Long Videos** — Supports up to 5 minute videos with smart stitching
* **Dialogue Options** — Audio voiceover, on-screen text, both, or custom overlays
* **Model Selector** — Choose models and compare costs
* **Black & Gold Studio** — Web interface for testing everything

## Detailed Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/LILSYNNOFFICIAL/RuRu-AI.git
cd RuRu-AI
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Add your API keys:

* Kling AI
* ElevenLabs
* Vercel AI
* Any additional providers you enable

### 4. Start Development Server

```bash
bun run dev
```

Open:

```text
http://localhost:3000
```

## Kling Integration Note

Uses the `image_reference` array for Subject Binding consistency.

Supported:

* Face references
* Full-body references
* Pose references
* Up to 4 reference images per character

## Credits

* Original: Forked from https://github.com/vargHQ/sdk
* Enhancements by Neurosyn Labs

---

⭐ Star the repository if you find it useful.
