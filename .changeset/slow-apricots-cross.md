---
"simkl-node": patch
---

Added Episodes method

## Usage

```ts
import { Anime } from "simkl-node/anime";

const anime = new ANIME('YOUR_CLIENT_ID');

// Get the episodes of an anime
const episodes = await anime.episodes("simkl_anime_id");
```
