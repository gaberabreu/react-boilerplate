import { type FC } from "react";

import { MenuItem, type MenuItemProps } from "@gaberabreu/react-mui-sidebar";

import { Link, type LinkProps } from "@tanstack/react-router";

interface MenuLinkProps extends MenuItemProps {
  to: LinkProps["to"];
}

const MenuLink: FC<MenuLinkProps> = ({ ...rest }) => {
  return (
    <MenuItem
      component={Link}
      {...rest}
    ></MenuItem>
  );
};

export default MenuLink;
