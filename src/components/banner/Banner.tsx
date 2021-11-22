import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import splashImage from "@assets/images/splash.png";
import { Search } from "@components/search/Search";

export const Banner = () => {
  const styles = useMultiStyleConfig("Banner", {});

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      sx={styles.container}
    >
      {/* TODO: Convert to absolute in relative parent approach. */}
      <Image src={splashImage} alt="Splash Image" />
      <Flex
        direction="column"
        align="center"
        justify="space-around"
        sx={styles.content}
      >
        <VStack sx={styles.textGroup}>
          <Heading sx={styles.title}>
            Download High Quality Images By Creators
          </Heading>
          <Text sx={styles.subtitle}>
            Over 2.4 million+ stock images by our talented community
          </Text>
        </VStack>
        <Search
          size="lg"
          width="80%"
          placeholder="Search high resolution Images, categories, wallpapers"
        />
      </Flex>
    </Flex>
  );
};
