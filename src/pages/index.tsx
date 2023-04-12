import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { fetchData } from "@/services/http";
import { Cover } from "@/components/Cover";
import { MovieResponseType } from "@/types/movie";
import { GetStaticProps } from "next";
import { Carousel } from "@/components/Carousel";

interface HomeProps {
  popularMovies: MovieResponseType;
}

export default function Home(props: HomeProps): JSX.Element {
  const { popularMovies } = props;

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Cover
        poster_path={popularMovies.results[0].poster_path}
        title={popularMovies.results[0].title}
        overview={popularMovies.results[0].overview}
      />
      <Carousel data={popularMovies.results} heading={"Trending now"} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMovies: MovieResponseType = await fetchData(
    `/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );

  return { props: { popularMovies } };
};
