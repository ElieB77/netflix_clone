/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface CardProps {
  poster_path: string;
  onClick: React.MouseEventHandler;
}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <>
      <div className={styles.card} onClick={props.onClick}>
        <img
          className={styles.card__image}
          src={props.poster_path}
          alt="card"
        />
      </div>
    </>
  );
};
