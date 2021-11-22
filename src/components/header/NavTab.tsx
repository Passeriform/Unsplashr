import { FC } from "react";
import { Link, useStyleConfig } from "@chakra-ui/react";

export type NavTabProps = {
  to?: string;
};

export const NavTab: FC<NavTabProps> = ({ children, to = "/" }) => {
  const styles = useStyleConfig("NavTab", {});

  return (
    <Link to={to} style={{ textDecoration: "none" }} sx={styles}>
      {children}
    </Link>
  );
};
