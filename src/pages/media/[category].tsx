import { InfScroll } from "@/components/InfScroll";
import { ModalInfoLayout } from "@/components/Layout/ModalInfoLayout";
import { Modal } from "@/components/Modal";
import { useModal } from "@/contexts";
import { useRouter } from "next/router";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MediaPage = () => {
  const { isOpen, closeModal } = useModal();
  const router = useRouter();
  console.log(router.query.category);
  return (
    <>
      <InfScroll
        isSearch={false}
        apiUrl={`${
          typeof router.query.category === "string"
            ? router.query.category.replace(/-/g, "/")
            : ""
        }?api_key=${API_KEY}`}
      />
      <Modal
        isActive={isOpen}
        onClick={closeModal}
        content={<ModalInfoLayout />}
      />
    </>
  );
};

export default MediaPage;
