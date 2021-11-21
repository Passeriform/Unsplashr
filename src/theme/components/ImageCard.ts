import { mode } from "@chakra-ui/theme-tools";

export const ImageCard = {
  parts: ["container", "image"],
  baseStyle: (props: any) => ({
    container: {
      width: "100%",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: mode("brand.800", "brand.100")(props),
      boxShadow: "lg",
      overflow: "hidden",
    },
    image: {
      width: "100%",
    },
  }),
};
