import styles from "./styles.module.css";
import { useModal } from "@/contexts";
import { Modal } from "@/components/Modal";
import { ModalInfoLayout } from "../ModalInfoLayout";
import { InfScroll } from "@/components/InfScroll";

export const SearchLayout = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <div className={styles.container}>
        <InfScroll isSearch />
      </div>
      <Modal
        isActive={isOpen}
        onClick={closeModal}
        content={<ModalInfoLayout />}
      />
    </>
  );
};
