import { useModal } from "@/contexts";
import { fetchData } from "@/services/http";
import { MovieResponseType } from "@/types/media";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../Card";
import { CircularProgress } from "../CircularProgress";
import styles from "./styles.module.css";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const IMAGE_PATH = process.env.NEXT_PUBLIC_IMAGE_PATH;

interface InfScrollProps {
  isSearch?: boolean;
  apiUrl?: string;
}

export const InfScroll = (props: InfScrollProps) => {
  const router = useRouter();
  const { openModal, isOpen, closeModal } = useModal();

  const [pageCount, setPageCount] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<MovieResponseType[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchQuery = router.query.query;
      // if (!searchQuery) return;

      const results: any = await fetchData(
        props.isSearch
          ? `/search/movie?api_key=${API_KEY}&adult=false&query=${searchQuery}&language=en-US&page=${pageCount}`
          : `${props.apiUrl}&page=${pageCount}`
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
  }, [pageCount, router.query.query, router, props.isSearch, props.apiUrl]);

  useEffect(() => {
    setSearchResults([]);
  }, [router.query.query]);

  console.log(searchResults);

  return (
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
                key={Math.floor(Math.random() * media.id)}
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
  );
};
