import { Card } from "@/components/Card";
import styles from "./styles.module.css";
import { useModal } from "@/contexts";
import { Modal } from "@/components/Modal";
import { ModalInfoLayout } from "../ModalInfoLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieResponseType, MovieType } from "@/types/media";
import { fetchData } from "@/services/http";
import { CircularProgress } from "@/components/CircularProgress";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const IMAGE_PATH = process.env.NEXT_PUBLIC_IMAGE_PATH;

export const SearchLayout = () => {
  const router = useRouter();
  const { openModal, isOpen, closeModal } = useModal();
  const [searchResults, setSearchResults] = useState<MovieResponseType[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchQuery = router.query.query;
      if (!searchQuery) return;

      const results: any = await fetchData(
        `/search/movie?api_key=${API_KEY}&adult=false&query=${searchQuery}&language=en-US&page=${pageCount}`
      );

      if (results?.results) {
        setSearchResults((prevData: MovieResponseType[]) => [
          ...prevData,
          ...results.results,
        ]);
        setTotalPages(results.total_pages);
      }
    };
    fetchSearchResults();
  }, [pageCount, router.query.query]);

  return (
    <>
      <div className={styles.container}>
        <InfiniteScroll
          next={() => {
            setPageCount((prevCount) => prevCount + 1);
          }}
          hasMore={pageCount < totalPages}
          loader={
            <div className={styles.loader__wrapper}>
              <CircularProgress />
            </div>
          }
          dataLength={searchResults.length}
          scrollThreshold={1}
        >
          {searchResults &&
            searchResults.map((media: any) => {
              return (
                <Card
                  key={media.id}
                  posterPath={
                    media.poster_path
                      ? `${IMAGE_PATH}${media.poster_path}`
                      : "/images/default-poster.svg"
                  }
                  onClick={() => {
                    openModal(
                      media.id,
                      media.hasOwnProperty("first_air_date") ? false : true
                    );
                  }}
                />
              );
            })}
        </InfiniteScroll>
      </div>
      <Modal
        isActive={isOpen}
        onClick={closeModal}
        content={<ModalInfoLayout />}
      />
    </>
  );
};
