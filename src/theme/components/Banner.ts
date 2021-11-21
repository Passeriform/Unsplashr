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
      pb: 4,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: 500,
      color: mode("brand.750", "brand.750")(props),
    },
  }),
};
