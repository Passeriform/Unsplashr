import Lottie from "react-lottie";
import { Flex, Text, useStyleConfig } from "@chakra-ui/react";

import { LOADER_OPTIONS } from "@config/lottie";

export interface LoaderProps {
  size: string;
  text: string;
}

export const Loader = ({ size, text }: LoaderProps) => {
  const styles = useStyleConfig("Loader", { size });

  return (
    <Flex align="center" justify="center" direction="column">
      <Lottie
        options={LOADER_OPTIONS}
        height={styles.height as number}
        width={styles.width as number}
        isClickToPauseDisabled
      />
      <Text variant="loaderInfo">{text}</Text>
    </Flex>
  );
};
