import { ChangeEvent, useContext, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { SearchContext } from "./SearchContextProvider";

export interface SearchProps {
  size?: string;
  width?: string;
  placeholder: string;
}

export const Search = (props: SearchProps) => {
  const { size = "md", width = "100%", placeholder } = props;

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [isFocussed, setIsFocussed] = useState(false);

  const styles = useMultiStyleConfig("Search", { size });

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <InputGroup
      width={width}
      sx={{
        ...styles.container,
        ...(isFocussed && {
          backgroundColor: "brand.875",
        }),
      }}
    >
      <InputLeftElement sx={styles.leading}>
        <SearchIcon />
      </InputLeftElement>
      <Input
        focusBorderColor="none"
        variant="filled"
        placeholder={placeholder || "Search..."}
        size={size}
        value={searchTerm}
        onChange={onTextChange}
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        sx={styles.text}
      />
    </InputGroup>
  );
};
