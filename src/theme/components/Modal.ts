import { mode } from "@chakra-ui/theme-tools";

export const Modal = {
  baseStyle: (props: any) => ({
    closeButton: {
      width: 10,
      height: 10,
      borderRadius: 20,
      backgroundColor: mode("brand.900", "brand.900")(props),
      _hover: {
        backgroundColor: mode("brand.850", "brand.850")(props),
      },
      _active: {
        backgroundColor: mode("brand.850", "brand.850")(props),
      },
      svg: {
        color: mode("brand.300", "brand.300")(props),
      },
    },
    dialog: {
      backgroundColor: mode("brand.900", "brand.150")(props),
      overflow: "hidden",
    },
    body: {
      padding: 0,
    },
  }),
};
