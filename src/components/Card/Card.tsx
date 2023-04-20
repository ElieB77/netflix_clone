/* eslint-disable @next/next/no-img-element */
import { Suspense, useEffect, useRef, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./styles.module.css";

interface CardProps {
  poster_path: string;
  onClick: React.MouseEventHandler;
}

export const Card = ({ onClick, poster_path }: CardProps): JSX.Element => {
  return (
    <>
      <Suspense
        fallback={
          <Skeleton
            baseColor={"#444"}
            highlightColor={"#fff"}
            width={100}
            height={100}
            enableAnimation={true}
            duration={2}
          />
        }
      >
        <div className={styles.card} onClick={onClick}>
          <img className={styles.card__image} src={poster_path} alt="card" />
        </div>
      </Suspense>
    </>
  );
};
