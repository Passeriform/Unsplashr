import { VStack, Image, useMultiStyleConfig } from "@chakra-ui/react";

export const ImageCard = (props: any) => {
  const {
    maxWidth,
    imageSource,
    imageAlt,
    children,
    onClick,
    cardProps,
    imageProps,
  } = props;

  const styles = useMultiStyleConfig("ImageCard", {});

  return (
    <VStack
      maxWidth={maxWidth}
      onClick={onClick}
      sx={styles.container}
      {...cardProps}
    >
      <Image
        src={imageSource}
        alt={imageAlt}
        sx={styles.image}
        {...imageProps}
      />
      {children}
    </VStack>
  );
};
