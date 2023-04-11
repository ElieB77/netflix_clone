import Image from "next/image";
import styles from "./styles.module.css";

interface ButtonPlusIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  iconAlt: string;
  isTransparent?: boolean;
}

export const ButtonPlusIcon = (props: ButtonPlusIconProps): JSX.Element => {
  const { content, iconSrc, iconWidth, iconHeight, iconAlt, isTransparent } =
    props;
  return (
    <button
      className={`${styles.button} ${
        isTransparent ? styles.button__transparent : ""
      } button`}
    >
      <Image
        className={isTransparent ? styles.button__icon_transparent : ""}
        src={iconSrc}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
      />
      {content}
    </button>
  );
};
