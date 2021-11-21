import { Link, useStyleConfig } from "@chakra-ui/react";

export const NavTab = (props: any) => {
  const { children, to = "/" } = props;

  const styles = useStyleConfig("NavTab", {});

  return (
    <Link to={to} style={{ textDecoration: "none" }} sx={styles}>
      {children}
    </Link>
  );
};
