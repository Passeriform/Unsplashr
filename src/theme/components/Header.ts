import { mode } from "@chakra-ui/theme-tools";

export const Header = {
  parts: [
    "container",
    "logo",
    "logoText",
    "navSearch",
  ],
  baseStyle: (props: any) => ({
    container: {
      height: 24,
      wrap: "nowrap",
    },
    logo: {
      flexShrink: 0,
      textDecoration: "none",
    },
    logoText: {
      margin: 4,
      fontFamily: "Pattaya",
      fontSize: 30,
      textAlign: "center",
      color: mode("brand.200", "brand.900")(props),
    },
    navSearch: {
      mx: 4,
      flexGrow: 1,
    }
  }),
};
