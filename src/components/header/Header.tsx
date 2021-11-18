import React from "react";
import {
  Link,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Search } from "@components/search/Search"
import { ColorModeToggle } from "@components/color-mode-toggle/ColorModeToggle"

const NavTab = (props: any) => {
  const { isEnd, children, to = "/", ...attribs } = props
  return (
    <Link
      m={0}
      p={4}
      display="block"
      to={to}
      style={{ textDecoration: "none" }}
      fontWeight={700}
      fontSize={12}
      {...attribs}
    >
      {children}
    </Link>
  )
}

export const Header = (props: any) => {
  const color = useColorModeValue("#333333", "#FFFFFF")

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="nowrap"
      h={24}
      {...props}
    >
        <Link
          href="/"
          style={{ textDecoration: "none" }}
        >
          <Heading
            as="h2"
            fontFamily="Pattaya"
            fontSize={30}
            textAlign="center"
            color={color}
          >
            Image Gallery
          </Heading>
        </Link>
        <HStack>
          <Search
            placeholder="Search images here"
          />
          <NavTab to="#">Explore</NavTab>
          <NavTab to="#">Collection</NavTab>
          <NavTab to="#" isEnd>Community</NavTab>
        </HStack>
        <ColorModeToggle />
    </Flex>
  );
}
