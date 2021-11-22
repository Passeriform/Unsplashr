import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import colors from "./colors";
import { components } from "./components";
import fonts from "./fonts";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "tars",
};

const overrides = {
  config,
  colors,
  fonts,
  styles,
  components,
};

export default extendTheme(
  withDefaultColorScheme({ colorScheme: "brand" }),
  overrides
);
