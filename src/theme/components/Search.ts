import { mode } from "@chakra-ui/theme-tools";

export const Search = {
  parts: ["container", "leading", "text"],
  baseStyle: (props: any) => ({
    container: {
      borderRadius: 6,
      borderWidth: 1,
      borderColor: mode("brand.850", "brand.550")(props),
      boxShadow: "inset 0px 4px 19px brand.shadow",
      backgroundColor: mode("brand.875", "brand.300")(props),
      _placeholder: {
        backgroundColor: mode("brand.750", "brand.550")(props),
      },
    },
    leading: {
      height: "100%",
      pointerEvents: "none",
      color: mode("brand.650", "brand.550")(props),
      fontSize: 14,
    },
    text: {
      color: mode("brand.300", "brand.550")(props),
      fontSize: 14,
    },
  }),
  sizes: {
    md: {
      container: {
        minWidth: 250,
        maxWidth: 600,
      },
      leading: {
        width: 2.5,
        left: 2.5,
      },
    },
    lg: {
      container: {
        minWidth: 500,
        maxWidth: 900,
      },
      leading: {
        width: 4,
        left: 3.5,
      },
    },
  },
};
