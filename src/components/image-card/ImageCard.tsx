import React from "react";
import {
  VStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export const ImageCard = (props: any) => {
  const { maxWidth, imageSource, imageAlt, content, onClick, cardProps, imageProps } = props
  const borderColor = useColorModeValue("#E5E5E5", "#141414")

  return <VStack
    w="100%"
    maxWidth={maxWidth}
    borderRadius={8}
    border="1px"
    borderColor={borderColor}
    boxShadow="lg"
    overflow="hidden"
    onClick={onClick}
    {...cardProps}
  >
    <Image
      src={imageSource}
      alt={imageAlt}
      w="100%"
      {...imageProps}
    />
    { content }
  </VStack>
}
