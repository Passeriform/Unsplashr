import { extendTheme, ThemeConfig } from "@chakra-ui/react"

import styles from "./styles"
import fonts from "./fonts"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const overrides = {
  config,
  fonts,
  styles,
}

export default extendTheme(overrides)
