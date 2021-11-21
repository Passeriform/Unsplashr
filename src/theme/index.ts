import {
  extendTheme,
  withDefaultColorScheme,
  ThemeConfig,
} from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
import { components } from "./components";

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
