import { type ErrorResponse, defaultError } from "../lib/constants";
import Simkl from "../simkl";
import type {
  AnimeDetail,
  AnimeSeriesType,
  Episode,
  TrendingAnime,
} from "../types/anime";

export class Anime extends Simkl {
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

  /**
   * Get the top anime series
   */
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

  /**
   * Get the best anime series
   * @param filter - best, all, month, year, voted, watched
   * @param type - all, movies, ovas, music, onas, tv
   */
  async best(
    filter: "best" | "all" | "month" | "year" | "voted" | "watched" = "best",
    type: "all" | AnimeSeriesType = "all",
  ) {
    const url = this.getUrl(`/anime/best/${filter}`);
    url.searchParams.set("type", type);
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

  /**
   * Get the episodes of an anime
   * @param id - Simkl ID
   */
  async episodes(id: number) {
    const url = this.getUrl(`/anime/episodes/${id}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        return (await res.json()) as ErrorResponse;
      }
      return (await res.json()) as Array<Episode>;
    } catch (error) {
      return defaultError;
    }
  }
}
