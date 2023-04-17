import Head from "next/head";
import { fetchData } from "@/services/http";
import { MovieResponseType } from "@/types/movie";
import { GetStaticProps } from "next";
import { HomeLayout } from "@/components/Layout/HomeLayout";

interface HomeProps {
  popularMovies: MovieResponseType;
  trendingMedia: MovieResponseType;
  popularTVShows: MovieResponseType;
  topRatedTVShows: MovieResponseType;
  topRatedMovies: MovieResponseType;
}

export default function Home(props: HomeProps): JSX.Element {
  const {
    popularMovies,
    trendingMedia,
    popularTVShows,
    topRatedTVShows,
    topRatedMovies,
  } = props;

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout
        coverImage={popularMovies.results[1].poster_path}
        coverTitle={popularMovies.results[1].title}
        coverOverview={popularMovies.results[1].overview}
        trendingMedia={trendingMedia}
        popularMovies={popularMovies}
        popularTVShows={popularTVShows}
        topRatedTVShows={topRatedTVShows}
        topRatedMovies={topRatedMovies}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMovies: MovieResponseType = await fetchData(
    `/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const trendingMedia: MovieResponseType = await fetchData(
    `/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const popularTVShows: MovieResponseType = await fetchData(
    `/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const topRatedTVShows: MovieResponseType = await fetchData(
    `/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const topRatedMovies: MovieResponseType = await fetchData(
    `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      popularMovies,
      trendingMedia,
      popularTVShows,
      topRatedTVShows,
      topRatedMovies,
    },
  };
};
