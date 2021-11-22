import { FC } from "react";
import { Image, VStack, useMultiStyleConfig } from "@chakra-ui/react";

export type ImageCardProps = {
  imageSource: string;
  imageAlt: string;
  imageProps?: Record<string | number | symbol, unknown>;
  cardProps: Record<string | number | symbol, unknown>;
  onClick: () => void;
};

export const ImageCard: FC<ImageCardProps> = ({
  imageSource,
  imageAlt,
  imageProps,
  cardProps,
  children,
  onClick,
}) => {
  const styles = useMultiStyleConfig("ImageCard", {});

  return (
    <VStack onClick={onClick} sx={styles.container} {...cardProps}>
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
