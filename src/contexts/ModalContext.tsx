import { fetchData } from "@/services/http";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContext {
  isOpen: boolean;
  openModal: any;
  closeModal: () => void;
  mediaData: any;
  isMovie: boolean;
}

const ModalContext = createContext({} as ModalContext);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mediaId, setMediaId] = useState<number>();
  const [mediaData, setMediaData] = useState<any>();
  const [isMovie, setIsMovie] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      const findById: any = await fetchData(
        `/${isMovie ? "movie" : "tv"}/${mediaId}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&external_source=imdb_id&append_to_response=videos,credits`
      );
      setMediaData(findById);
    };
    loadData();
  }, [mediaId, isMovie]);

  const openModal = (id: number, movie: boolean) => {
    setMediaId(id);
    setIsOpen(true);
    setIsMovie(movie);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        mediaData,
        isMovie,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
