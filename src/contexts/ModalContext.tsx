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
  openModal: (id: number, movie: boolean) => void;
  closeModal: () => void;
  mediaData: any;
  isMediaMovie: boolean;
  isLoading: boolean;
}

const ModalContext = createContext({} as ModalContext);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mediaId, setMediaId] = useState<number>();
  const [mediaData, setMediaData] = useState<any>();
  const [isMediaMovie, setIsMediaMovie] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      const apiPath = `/${isMediaMovie ? "movie" : "tv"}/${mediaId}`;
      const query = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&external_source=imdb_id&append_to_response=videos,credits`;
      const findById = await fetchData(apiPath + query);
      setMediaData(findById);
      setIsLoading(false);
    };
    if (mediaId) {
      loadData();
    }
  }, [mediaId, isMediaMovie]);

  const openModal = (id: number, movie: boolean) => {
    setMediaId(id);
    setIsOpen(true);
    setIsMediaMovie(movie);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        mediaData,
        isMediaMovie,
        isLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
