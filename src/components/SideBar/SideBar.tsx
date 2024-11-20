import type { FC } from "react";

import { MenuSubHeader, SideBar as MySideBar, SubMenu } from "@gaberabreu/react-mui-sidebar";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";

import MenuLink from "./MenuLink";

interface MySideBarProps {
  open?: boolean;
}

const SideBar: FC<MySideBarProps> = ({ open }) => {
  return (
    <MySideBar open={open}>
      <Toolbar />
      <List>
        <MenuSubHeader text="Main items" />
        <MenuLink
          icon={<DashboardIcon />}
          text="Dashboard"
          to="/"
        />
        <MenuLink
          icon={<AccountCircleIcon />}
          text="Profile"
          to="/profile"
        />
        <SubMenu
          icon={<SettingsIcon />}
          text="Management"
        >
          <MenuLink
            icon={<PeopleIcon />}
            text="Users"
            to="/management/users"
          />
          <MenuLink
            icon={<SecurityIcon />}
            text="Roles"
            to="/management/roles"
          />
        </SubMenu>
      </List>
    </MySideBar>
  );
};

export default SideBar;
