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
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <img
          className={styles.card__image}
          src={posterPath || "Hello"}
          alt="card"
        />
      </div>
    </>
  );
};
