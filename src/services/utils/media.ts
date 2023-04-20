import {
  CrewMemberDataType,
  CrewMemberType,
  DateType,
  DurationType,
  GenreDataType,
  GenreType,
  VideoDataType,
  VideoType,
} from "@/types/media";

export const mediaGenres = (data: GenreDataType) => {
  const genres = data?.genres
    ?.map((genre: GenreType) => {
      return genre.name
        .replace(/\s*&\s*/g, " ")
        .trim()
        .split(" ")
        .join(", ");
    })
    .join(", ");

  return genres;
};

export const mediaVideoUrl = (data: VideoDataType) => {
  return (
    data?.videos.results.find((video: VideoType) => video.type === "Trailer")
      ?.key ||
    data?.videos.results.find((video: VideoType) => video.type === "Teaser")
      ?.key ||
    data?.videos.results.find((video: VideoType) => video.type === "Clip")?.key
  );
};

export const mediaCredits = (data: CrewMemberDataType) => {
  const member = data?.credits.crew.find(
    (member: CrewMemberType) =>
      member.job === "Director" ||
      member.job === "Producer" ||
      member.job === "Executive Producer" ||
      member.job === "Creator"
  );

  return member ? member.name : "";
};

export const mediaRuntimeOrSeason = (
  data: DurationType,
  isMediaMovie: boolean
) => {
  return isMediaMovie
    ? `${data?.runtime} min`
    : `${
        Number(data?.number_of_seasons) > 1
          ? data?.number_of_seasons + " " + "seasons"
          : data?.number_of_seasons + " " + "season"
      }`;
};

export const mediaMovieOrTvDate = (data: DateType, isMediaMovie: boolean) => {
  return isMediaMovie
    ? data?.release_date?.substring(0, 4)
    : data?.first_air_date?.substring(0, 4);
};

export const mediaVoteAverage = (data: any) => {
  return Math.round(data?.vote_average * 10) / 10;
};
