import Simkl from "./simkl";
import { defaultError } from "./constants";
import type { ErrorResponse, AnimeDetail, TrendingAnime } from "./types";

export default class Anime extends Simkl {
  async searchByText(q: string) {
    return super.searchByText(q, "anime");
  }

  /**
   *
   * @param id  - Simkl ID
   * @returns AnimeDetail
   */
  async summary(id: number) {
    const url = this.getUrl(`/anime/${id}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        return (await res.json()) as ErrorResponse;
      }
      return (await res.json()) as AnimeDetail;
    } catch (error) {
      return defaultError;
    }
  }

  async trending() {
    const url = this.getUrl("/anime/trending");
    try {
      const res = await fetch(url);
      if (!res.ok) {
        return (await res.json()) as ErrorResponse;
      }
      return (await res.json()) as Array<TrendingAnime>;
    } catch (error) {
      return defaultError;
    }
  }
}
