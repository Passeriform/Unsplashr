import { TiThumbsUp } from "react-icons/ti";
import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { minimizeWithSuffix } from "@utility/conversion";
import {
  SocialMediaType,
  formatHandle,
  getMediaPlugMeta,
} from "@utility/social";

export interface ImageDetailsProps {
  avatarSource: string;
  handle: string;
  name: string;
  likes?: number;
  mediaPlugs?: Record<SocialMediaType, string>;
  size?: string;
}

export const ImageDetails = ({
  avatarSource,
  handle,
  name,
  likes = 0,
  mediaPlugs = {} as Record<SocialMediaType, string>,
  size = "md",
}: ImageDetailsProps) => {
  const styles = useMultiStyleConfig("ImageDetails", { size });

  return (
    <Flex align="center" justify="space-around" sx={styles.container}>
      <Avatar name={name} src={avatarSource} sx={styles.avatar} />
      <Flex align="center" sx={styles.details}>
        <VStack align="start">
          <Heading as="h4" sx={styles.heading}>
            {name}
          </Heading>
          {handle && (
            <Text variant="subtitle" sx={styles.handle}>
              {formatHandle(handle)}
            </Text>
          )}
        </VStack>
        <HStack pl={4}>
          {Object.entries(mediaPlugs).map(([mediaType, username]) => {
            const { icon, href } = getMediaPlugMeta(
              mediaType as SocialMediaType,
              username
            );

            return (
              <Link href={href} key={mediaType.toString()} isExternal>
                <HStack p={4}>
                  <Icon as={icon} sx={styles.mediaIcon} />
                  <Text variant="subtitle" sx={styles.mediaHandle}>
                    /{username}
                  </Text>
                </HStack>
              </Link>
            );
          })}
        </HStack>
      </Flex>
      <HStack>
        <Icon as={TiThumbsUp} sx={styles.likeIcon} />
        <Text sx={styles.likeCount}>{minimizeWithSuffix(likes)}</Text>
      </HStack>
    </Flex>
  );
};
