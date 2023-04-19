import { Carousel } from "@/components/Carousel";
import { Cover } from "@/components/Cover";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import { Navbar } from "@/components/Navbar";
import { MovieResponseType } from "@/types/media";
import { useState } from "react";
import { ModalInfoLayout } from "../ModalInfoLayout";
import styles from "./styles.module.css";
import { useModal } from "@/contexts";

interface HomeLayoutProps {
  coverId: number;
  coverImage: string;
  coverTitle: string;
  coverOverview: string;
  trendingMedia: MovieResponseType;
  popularMovies: MovieResponseType;
  latestTVShows: MovieResponseType;
  topRatedTVShows: MovieResponseType;
  topRatedMovies: MovieResponseType;
}

export const HomeLayout = (props: HomeLayoutProps): JSX.Element => {
  const { isOpen, closeModal, openModal } = useModal();
  const {
    coverId,
    coverImage,
    coverTitle,
    coverOverview,
    trendingMedia,
    popularMovies,
    latestTVShows,
    topRatedTVShows,
    topRatedMovies,
  } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      <Cover
        poster_path={coverImage}
        title={coverTitle}
        overview={coverOverview}
        handleClickMoreInfoButton={() => openModal(coverId)}
      />
      <div className={styles.carousel__container}>
        <Carousel data={trendingMedia.results} heading={"Trending now"} />
        <Carousel data={popularMovies.results} heading={"Popular movies"} />
        <Carousel data={latestTVShows.results} heading={"Popular TV Shows"} />
        <Carousel
          data={topRatedTVShows.results}
          heading={"Top-rated TV Shows"}
        />
        <Carousel data={topRatedMovies.results} heading={"Top-rated movies"} />
      </div>

      <Modal
        isActive={isOpen}
        onClick={closeModal}
        content={<ModalInfoLayout isMounted={showModal} />}
      />

      <Footer />
    </>
  );
};
