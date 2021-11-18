import { ChangeEvent, useState, useContext } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { SearchContext } from "./SearchContextProvider";

export interface SearchProps {
  size?: string;
  placeholder?: string;
}

export const Search = (props: SearchProps) => {
  const { size, placeholder } = props;

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [isFocussed, setIsFocussed] = useState(false);

  const color = useColorModeValue("#4F4F4F", "#8D8D8D");
  const placeholderColor = useColorModeValue("#C4C4C4", "#8D8D8D");
  const backgroundColor = useColorModeValue(
    "#FAFAFA",
    isFocussed ? "#FAFAFA" : "#4F4F4F"
  );
  const borderColor = useColorModeValue("#ECECEC", "#858484");
  const searchIconColor = useColorModeValue("#A7A7A7", "#8D8D8D");

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <InputGroup
      minWidth={400}
      borderRadius={6}
      boxShadow="inset 0px 4px 19px rgba(0, 0, 0, 0.05)"
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderColor={borderColor}
    >
      <InputLeftElement
        h="100%"
        w={size === "lg" ? 16 : 10}
        pointerEvents="none"
        color={searchIconColor}
        fontSize="1.2em"
      >
        <SearchIcon />
      </InputLeftElement>
      <Input
        focusBorderColor="none"
        pl={size === "lg" ? 14 : 10}
        size={size || "md"}
        color={color}
        variant="filled"
        placeholder={placeholder || "Search..."}
        fontSize={14}
        value={searchTerm}
        onChange={onTextChange}
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        _placeholder={{ color: placeholderColor }}
      />
    </InputGroup>
  );
};
