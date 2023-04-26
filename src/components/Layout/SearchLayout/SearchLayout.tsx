import { Card } from "@/components/Card";
import styles from "./styles.module.css";
import { useModal, useSearch } from "@/contexts";
import { Modal } from "@/components/Modal";
import { ModalInfoLayout } from "../ModalInfoLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieResponseType } from "@/types/media";
import { fetchData } from "@/services/http";

export const SearchLayout = () => {
  const router = useRouter();
  const { openModal, isOpen, closeModal } = useModal();
  const [searchData, setSearchData] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [hasMoreData, setHasMoreData] = useState<boolean>(false);

  console.log("modal", isOpen);

  useEffect(() => {
    const loadData = async () => {
      const searchResults: any =
        router.query.query &&
        (await fetchData(
          `/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${router.query.query}&language=en-US&page=${pageCount}&adult=false`
        ));
      if (searchResults) {
        setSearchData((prevData: MovieResponseType[]) => [
          ...prevData,
          ...searchResults.results,
        ]);
      }
    };
    loadData();
  }, [pageCount]);

  console.log(searchData);
  return (
    <>
      <div className={styles.container}>
        <InfiniteScroll
          next={() => {
            setPageCount((prevCount) => prevCount + 1);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          dataLength={searchData.length}
        >
          {searchData &&
            searchData.map((media: any, index: number) => {
              return (
                <Card
                  key={index}
                  poster_path={
                    media.poster_path
                      ? `${process.env.NEXT_PUBLIC_IMAGE_PATH}${media.poster_path}`
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
        content={<ModalInfoLayout isMounted={isOpen} />}
      />
    </>
  );
};
