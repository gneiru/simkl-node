# simkl-node

A Node.js wrapper for the [Simkl API](https://api.simkl.com).

## Installation

```bash
npm install simkl-node
```

## Usage

```ts
import { Anime } from "simkl-node/anime";

const anime = new ANIME('YOUR_CLIENT_ID');

// Get the top anime series
const trends = await anime.trending();
```