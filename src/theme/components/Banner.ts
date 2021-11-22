import { mode } from "@chakra-ui/theme-tools";

export const Banner = {
  parts: ["container", "content", "textGroup", "title", "subtitle"],
  baseStyle: (props: any) => ({
    container: {
      minWidth: 600,
    },
    content: {
      pos: "absolute",
      width: "100%",
    },
    textGroup: {
      pb: 4,
    },
    title: {
      color: mode("brand.900", "brand.900")(props),
      pb: {
        base: 0,
        xl: 2,
        "2xl": 4,
      },
      fontSize: {
        base: "2xl",
        xl: "3xl",
        "2xl": "4xl",
      },
    },
    subtitle: {
      fontSize: 14,
      fontWeight: 500,
      color: mode("brand.750", "brand.750")(props),
    },
  }),
};
