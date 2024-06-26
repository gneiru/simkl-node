# simkl-node

## 0.2.3

### Patch Changes

- 4db44ec: Added Episodes method

  ## Usage

  ```ts
  import { Anime } from "simkl-node/anime";

  const anime = new ANIME("YOUR_CLIENT_ID");

  // Get the episodes of an anime
  const episodes = await anime.episodes("simkl_anime_id");
  ```

## 0.2.2

### Patch Changes

- 7679d68: - Fixes import from simkl/anime

  ## Before

  ```ts
  import Anime from "simkl-node/anime";
  ```

  ## After

  ```ts
  import { Anime } from "simkl-node/anime";
  ```

## 0.2.1

### Patch Changes

- 30cfd44: add sourcemap in tsup

## 0.2.0

### Minor Changes

- bed4888: Moved `simkl-node/simkl` to `simkl-node`

## 0.1.1

### Patch Changes

- 7dc1fa8: fix: exports

## 0.1.0

### Minor Changes

- 8ecd543: Separated anime, simkl, types

  - `Anime` class is now in `src/anime/index.ts`
  - `Simkl` class is now in `src/simkl/index.ts`
  - `types` is now in `src/types/index.ts`

  Instead of importing them all in `simkl-node`, you can now import them individually.

  ## Before

  ```ts
  import { Anime, Simkl, types } from "simkl-node";
  ```

  ## After

  ```ts
  import { Anime } from "simkl-node/anime";
  import { Simkl } from "simkl-node/simkl";
  ```

## 0.0.2

### Patch Changes

- 147c950: - unexport some types
  - add `best` method to `Anime` class
