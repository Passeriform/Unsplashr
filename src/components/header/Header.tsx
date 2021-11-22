import {
  Flex,
  HStack,
  Heading,
  Link,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { ColorModeToggle } from "@components/color-mode-toggle/ColorModeToggle";
import { Search } from "@components/search/Search";

import { NavTab } from "./NavTab";

export const Header = () => {
  const styles = useMultiStyleConfig("Header", {});

  return (
    <Flex as="nav" align="center" justify="space-around" sx={styles.container}>
      <Link href="/" style={{ textDecoration: "none" }} sx={styles.logo}>
        <Heading as="h2" sx={styles.logoText}>
          Image Gallery
        </Heading>
      </Link>
      <HStack sx={styles.navSearch}>
        <Search placeholder="Search images here" />
        <NavTab to="#">Explore</NavTab>
        <NavTab to="#">Collection</NavTab>
        <NavTab to="#">Community</NavTab>
      </HStack>
      <ColorModeToggle />
    </Flex>
  );
};
