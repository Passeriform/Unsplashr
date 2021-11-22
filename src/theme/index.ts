import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import colors from "./colors";
import { components } from "./components";
import fonts from "./fonts";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "tars",
};

const breakpoints = createBreakpoints({
  sm: "21.875em", // 350px
  md: "28.125em", // 450px
  lg: "40.625em", // 650px
  xl: "53.125em", // 850px
  "2xl": "59.375em", // 950px
});

const overrides = {
  config,
  breakpoints,
  colors,
  fonts,
  styles,
  components,
};

export default extendTheme(
  withDefaultColorScheme({ colorScheme: "brand" }),
  overrides
);
