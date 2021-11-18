import React from "react";
import {
  Flex,
  Icon,
  Image,
  Heading,
  Text,
  Link,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { TiThumbsUp } from "react-icons/ti";

import { minimizeWithSuffix } from "@utility/conversion"
import { getMediaPlugMeta, formatHandle, SocialMediaType } from "@utility/social"

export interface ImageDetailsProps {
  name: string
  handle: string
  avatarSource: string
  mediaPlugs: Record<SocialMediaType, string>
  likes: number
  isExpanded: boolean
}

export const ImageDetails = (props: any) => {
  const { name, handle, avatarSource, mediaPlugs = {} as Record<SocialMediaType, string>, likes = 0, isExpanded }: ImageDetailsProps = props

  const color = useColorModeValue("#4F4F4F", "#E5E5E5")

  return <Flex
    w="100%"
    p={4}
    align="center"
    justify="space-around"
  >
    {/* Can default to Name Initials */}
    <Image
      src={avatarSource}
      w={(isExpanded ? 16 : 10)}
      h={(isExpanded ? 16 : 10)}
      borderRadius={2 * (isExpanded ? 16 : 10)}
    />
    <Flex
      pl={4}
      flexGrow={1}
      align="center"
    >
      <VStack align="start">
        <Heading as="h4" size="md" fontSize={isExpanded ? 14 : 12} color={color}>{ name }</Heading>
        {handle && <Text fontFamily="Poppins" fontSize={isExpanded ? 12 : 10} fontWeight={600} mt={0} fontStyle="italic" color="#A7A7A7">{ formatHandle(handle) }</Text>}
      </VStack>
      <HStack pl={4}>
      {
        Object.entries(mediaPlugs).map(([mediaType, username]) => {
          const { icon, href } = getMediaPlugMeta(mediaType as SocialMediaType, username)

          return <Link href={href}>
            <HStack p={4}>
              <Icon as={icon} w={6} h={6} />
              <Text fontFamily="Poppins" fontSize={12} fontWeight={600} fontStyle="italic" color="#A7A7A7">/{username}</Text>
            </HStack>
          </Link>
        })
      }
      </HStack>
    </Flex>
    <HStack>
      <Icon as={TiThumbsUp} w={6} h={6} />
      <Text fontSize={isExpanded ? 15 : 12} fontWeight={600} color={isExpanded ? "#858484" : color}>{ minimizeWithSuffix(likes) }</Text>
    </HStack>
  </Flex>
}
