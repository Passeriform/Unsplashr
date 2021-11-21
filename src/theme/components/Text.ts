import { mode } from "@chakra-ui/theme-tools";

export const Text = {
  variants: {
    subtitle: (props: any) => ({
      fontFamily: "Poppins",
      fontWeight: 600,
      fontStyle: "italic",
      color: mode("brand.650", "brand.650")(props),
    }),
    loaderInfo: (props: any) => ({
      margin: 12,
      fontSize: 24,
      fontWeight: 700,
      color: mode("brand.650", "brand.350")(props),
      textDecoration: "none",
    }),
  },
};
