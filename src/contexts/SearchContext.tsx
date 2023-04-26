import { fetchData } from "@/services/http";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContext {
  test: any;
  pageCount: any;
}

const SearchContext = createContext({} as SearchContext);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [pageCount, setPageCount] = useState<number>(1);

  const test = (page: number) => {
    return setPageCount(pageCount + 1);
  };

  return (
    <SearchContext.Provider
      value={{
        test,
        pageCount,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
