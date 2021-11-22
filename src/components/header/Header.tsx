import {
  Flex,
  HStack,
  Heading,
  Link,
  useBreakpointValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { ColorModeToggle } from "@components/color-mode-toggle/ColorModeToggle";
import { Search } from "@components/search/Search";

import { NavTab } from "./NavTab";

export const Header = () => {
  const displayNavTabs = useBreakpointValue({ base: false, "2xl": true });
  const displayModeToggle = useBreakpointValue({ base: false, lg: true });
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
        {displayNavTabs && <NavTab to="#">Explore</NavTab>}
        {displayNavTabs && <NavTab to="#">Collection</NavTab>}
        {displayNavTabs && <NavTab to="#">Community</NavTab>}
      </HStack>
      {displayModeToggle && <ColorModeToggle />}
    </Flex>
  );
};
