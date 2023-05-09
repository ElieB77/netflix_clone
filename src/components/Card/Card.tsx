/* eslint-disable @next/next/no-img-element */
import { Suspense, useEffect, useRef, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./styles.module.css";

interface CardProps {
  posterPath: string;
  onClick: React.MouseEventHandler;
}

export const Card = ({ onClick, posterPath }: CardProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 2000);
  };

  return (
    <>
      <div className={styles.card} onClick={onClick}>
        {/* {posterPath && ( */}
        {/* <> */}
        {/* {!imageLoaded && <div className={styles.skeleton}></div>} */}

        <img
          className={styles.card__image}
          src={posterPath}
          alt="card"
          onLoad={handleImageLoad}
          // style={{ display: imageLoaded ? "block" : "none" }}
        />
        {/* </> */}
        {/* )} */}
      </div>
    </>
  );
};
