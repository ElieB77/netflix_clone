import styles from "./styles.module.css";

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <h4>
        Coded by{" "}
        <a href="https://github.com/ElieB77" target={"_blank"}>
          ElieB77
        </a>
      </h4>
    </div>
  );
};
