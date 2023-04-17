/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

interface ModalInfoLayoutProps {
  isMounted: boolean;
}

export const ModalInfoLayout = (props: ModalInfoLayoutProps): JSX.Element => {
  return (
    <div className={styles.modal__info}>
      <ReactPlayer
        volume={1}
        muted
        playing={props.isMounted}
        stopOnUnmount={props.isMounted}
        style={{ minWidth: "100%" }}
        fallback={
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg`}
            alt="Movie backdrop"
          />
        }
        url="https://www.youtube.com/watch?v=8BFdFeOS3oM"
      />
      <div className={styles.modal__info_details}>
        <div className={styles.modal__info_details_left}>
          <p>
            <span>2013</span>
            <span>1 h 50 min</span>
          </p>
        </div>
        <div className={styles.modal__info_details_right}>
          <p>
            <span>Distribution: </span>
            Josh Holloway, Laz Alonzo
          </p>
          <p>
            <span>Genres: </span>Drama, Action
          </p>
        </div>
      </div>
      <p className={styles.modal__info_overview}>
        While working underground to fix a water main, Brooklyn plumbers—and
        brothers—Mario and Luigi are transported down a mysterious pipe and
        wander into a magical new world. But when the brothers are separated,
        Mario embarks on an epic quest to find Luigi.
      </p>
    </div>
  );
};
