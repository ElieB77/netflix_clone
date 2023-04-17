import styles from "./styles.module.css";
import Image from "next/image";

interface ModalProps {
  isActive: boolean;
  content?: JSX.Element;
  onClick: React.MouseEventHandler;
}

export const Modal = (props: ModalProps): JSX.Element => {
  const { isActive, content, onClick } = props;
  return (
    <div
      className={`${styles.modal} ${isActive ? styles.active : styles.unset}`}
    >
      <button className={styles.modal__close_button} onClick={onClick}>
        <Image
          className={styles.modal__close_button_icon}
          src="/images/close-icon.svg"
          width={20}
          height={20}
          alt="Close icon"
        />
      </button>
      <div>{content}</div>
    </div>
  );
};
