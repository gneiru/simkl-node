import type { SeriesType } from "./simkl";

export type SearchResult = {
  title: string;
  title_en?: string;
  title_romaji?: string;
  year?: number;
  type: SeriesType;
  poster: null | string;
  ids: {
    simkl_id: number;
    slug: string;
    tmdb?: string;
  };
};

export type AnimeDetail = {
  title: string;
  year: number;
  type: "anime";
  ids: {
    simkl: number;
    slug: string;
  };
};

export type TrendingAnime = {
  poster: string;
  fanart: string;
  ids: {
    simkl_id: number;
  };
  release_date: string;
  rank: number;
  drop_rate: string;
  watched: number;
  plan_to_watch: number;
  ratings: {
    simkl: {
      rating: number;
      votes: number;
    };
    mal: {
      rating: number;
      votes: number;
    };
  };
  country: string;
  runtime: string;
  status: "premier" | "ended" | "ongoing";
  anime_type: "tv" | "ona" | "ova" | "movie";
  total_episodes: number;
  network: string | null;
};

export type AnimeSeriesType = "movies" | "ovas" | "music" | "onas" | "tv";
