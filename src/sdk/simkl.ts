import { defaultError } from "./constants";
import type { ErrorResponse } from "../types";
import type { SearchResult } from "../types/anime";
import type { SeriesType } from "../types/simkl";

export default class Simkl {
  protected client_id = "";
  protected baseUrl = "https://api.simkl.com";

  constructor(clientId: string) {
    this.client_id = clientId;
  }

  protected getUrl(path: string) {
    const url = new URL(this.baseUrl + path);
    url.searchParams.set("client_id", this.client_id);
    return url;
  }

  /**
   * Search by text
   * @param q search query
   * @param type movie, anime, tv
   */
  async searchByText(q: string, type: SeriesType = "movie") {
    const url = this.getUrl(`/search/${type}`);
    url.searchParams.set("q", q);
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        return (await response.json()) as ErrorResponse;
      }
      return (await response.json()) as Array<SearchResult>;
    } catch (error) {
      return defaultError;
    }
  }
}
