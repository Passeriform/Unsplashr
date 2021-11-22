import { Context, createContext, useState } from "react";

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (_: string) => void;
};

export const SearchContext: Context<SearchContextType> =
  createContext<SearchContextType>({
    searchTerm: "",
    setSearchTerm: () => {},
  });

export const SearchContextProvider = (props: any) => {
  const { children } = props;

  const [searchTerm, setSearchTerm] = useState("");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
