import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeToggle = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const getTogglePrompt = () =>
    colorMode === "light" ? "Dark Mode" : "Light Mode";

  return (
    <HStack
      as="button"
      w={40}
      align="center"
      justify="center"
      onClick={toggleColorMode}
    >
      <Text fontWeight={700} fontSize={12}>
        {" "}
        {getTogglePrompt()}{" "}
      </Text>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="blue"
      />
    </HStack>
  );
};
