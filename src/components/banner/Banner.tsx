import React from "react";
import {
  Heading,
  Image,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Search } from "@components/search/Search"
import splashImage from "@assets/images/splash.png"

export const Banner = () => {
  return <Flex
    direction="column"
    align="center"
    justify="space-around"
    minWidth={600}
  >
    <Image src={splashImage} alt="Splash Image" />
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      pos="absolute"
    >
      <VStack pb={4}>
        <Heading color="#FFFFFF" pb={4}>
            Download High Quality Images By Creators
        </Heading>
        <Text fontSize={14} fontWeight={500} color="#C4C4C4">
            Over 2.4 million+ stock images by our talented community
        </Text>
      </VStack>
        <Search
          size="lg"
          placeholder="Search high resolution Images, categories, wallpapers"
        />
    </Flex>
  </Flex>
}
