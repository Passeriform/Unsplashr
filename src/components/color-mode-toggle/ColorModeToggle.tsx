import {
  HStack,
  Switch,
  Text,
  useColorMode,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles = useMultiStyleConfig("ColorModeToggle", {});

  const getTogglePrompt = () =>
    colorMode === "light" ? "Dark Mode" : "Light Mode";

  return (
    <HStack
      as="button"
      flexShrink={0}
      onClick={toggleColorMode}
      sx={styles.container}
    >
      <Text sx={styles.text}>{getTogglePrompt()}</Text>
      <Switch isChecked={colorMode === "dark"} />
    </HStack>
  );
};
