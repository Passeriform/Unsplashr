import { SyntheticEvent, useRef, useState } from "react";
import {
  Flex,
  Image,
  Link,
  Portal,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { ImageDetails } from "@components/image-details/ImageDetails";
import { Loader } from "@components/loader/Loader";
import { useResize } from "@hooks/useResize";
import { pickBy } from "@utility/conversion";
import { imageFillsContainer } from "@utility/image";

export const Describe = (props: any) => {
  const { model } = props;

  const imageContainer = useRef(null);
  const loaderContainer = useRef(null);

  const [isContainable, setIsContainable] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const containerDimensions = useResize<HTMLDivElement>(imageContainer);

  const styles = useMultiStyleConfig("Describe", {});

  const imageLoadedHandler = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setIsContainable(
      imageFillsContainer(event.currentTarget, containerDimensions)
    );
    setIsImageLoading(false);
  };

  const fallbackLoader = (
    <Portal containerRef={loaderContainer}>
      <Loader text="Loading image..." size="lg" />
    </Portal>
  );

  return (
    <Flex
      align="center"
      justify="start"
      direction="column"
      ref={imageContainer}
      sx={styles.container}
    >
      {isImageLoading && (
        <Flex
          align="center"
          justify="space-around"
          direction="column"
          ref={loaderContainer}
          sx={styles.loaderContainer}
        />
      )}
      <Link href={model.urls.raw} sx={styles.imageWrapper} isExternal>
        <Image
          src={model.urls.full}
          alt={model.description}
          fallback={fallbackLoader}
          onLoad={imageLoadedHandler}
          fit={isContainable ? "cover" : "contain"}
          sx={styles.image}
        />
      </Link>
      <ImageDetails
        size="full"
        name={model.user.name}
        handle={model.user.username}
        avatarSource={model.user.profile_image.medium}
        likes={model.likes}
        mediaPlugs={pickBy({
          instagram: model.user.instagram_username,
          twitter: model.user.twitter_username,
        })}
      />
    </Flex>
  );
};
