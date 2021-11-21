import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    "html, body": {
      fontFamily: "Montserrat",
      backgroundColor: mode("brand.900", "brand.150")(props),
      color: mode("brand.300", "brand.800")(props),
    },
    "*, ::before, ::after": {
      borderColor: mode("brand.850", "brand.500")(props),
    },
  }),
};

export default styles;
