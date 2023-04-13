import { Carousel } from "@/components/Carousel";
import { Cover } from "@/components/Cover";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import styles from "./styles.module.css";

interface HomeLayoutProps {
  coverImage: string;
  coverTitle: string;
  coverOverview: string;
  trendingMedia: any;
  popularMovies: any;
  popularTVShows: any;
  topRatedTVShows: any;
  topRatedMovies: any;
}

export const HomeLayout = (props: HomeLayoutProps): JSX.Element => {
  const {
    coverImage,
    coverTitle,
    coverOverview,
    trendingMedia,
    popularMovies,
    popularTVShows,
    topRatedTVShows,
    topRatedMovies,
  } = props;
  return (
    <>
      <Navbar />
      <Cover
        poster_path={coverImage}
        title={coverTitle}
        overview={coverOverview}
      />
      <div className={styles.carousel__container}>
        <Carousel data={trendingMedia} heading={"Trending now"} />
        <Carousel data={popularMovies} heading={"Popular movies"} />
        <Carousel data={popularTVShows} heading={"Popular TV Shows"} />
        <Carousel data={topRatedTVShows} heading={"Top-rated TV Shows"} />
        <Carousel data={topRatedMovies} heading={"Top-rated movies"} />
      </div>

      <Footer />
    </>
  );
};
