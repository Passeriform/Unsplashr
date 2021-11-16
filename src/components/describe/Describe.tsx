import {
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";

import { ImageDetails } from "../image-details/ImageDetails"
import { pickBy } from "../../utility/conversion"

export const Explore = (props: any) => {
  const { model } = props

  return <Flex
    w="100%"
    align="center"
    justify="center"
    direction="column"
  >
    <Link href={model.urls.raw}>
      <Image
        src={model.urls.full}
        alt={model.description}
        maxHeight={500}
        isExternal
      />
    </Link>
    <ImageDetails
      name={model.user.name}
      handle={model.user.username}
      avatarSource={model.user.profile_image.medium}
      likes={model.likes}
      mediaPlugs={pickBy({
        instagram: model.user.instagram_username,
        twitter: model.user.twitter_username,
      })}
      isExpanded
    >
    </ImageDetails>
  </Flex>
}
