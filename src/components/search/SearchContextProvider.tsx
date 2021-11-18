import { useState, createContext, Context } from "react";

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export const SearchContext: Context<SearchContextType> =
  createContext<SearchContextType>({
    searchTerm: "",
    setSearchTerm: () => {},
  });

export const SearchContextProvider = (props: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {props.children}
    </SearchContext.Provider>
  );
};
