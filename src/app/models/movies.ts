export type MediaType = 'all' | 'tv' | 'movie' | 'person';
export type TimeWindow = 'day' | 'week';

export interface MovieListResponse {
  page: number;
  results: Movie[];
  dates: {
    maximum: string;
    minimum: string
  };
  total_pages: number;
  total_results: number;
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  duration?: string;
  genre?: string;
}
