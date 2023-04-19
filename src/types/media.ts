export interface MovieType {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface MovieResponseType {
  results: MovieType[];
}

export interface GenreType {
  name: string;
  id: number;
}

export interface GenreDataType {
  genres: GenreType[];
}

export interface VideoType {
  key: string;
  type: string;
}

export interface VideoDataType {
  videos: {
    results: VideoType[];
  };
}

export interface CrewMemberType {
  name: string;
  job: string;
}

export interface CrewMemberDataType {
  credits: {
    crew: CrewMemberType[];
  };
}

export interface DurationType {
  runtime: string;
  number_of_seasons: string;
}

export interface DateType {
  release_date: string;
  first_air_date: string;
}
