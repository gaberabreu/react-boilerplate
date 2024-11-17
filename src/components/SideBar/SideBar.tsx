import type { FC } from "react";

import {
  MenuItem,
  MenuSubHeader,
  SideBar as MySideBar,
  SubMenu,
} from "@gaberabreu/react-mui-sidebar";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface MySideBarProps {
  open?: boolean;
}

const SideBar: FC<MySideBarProps> = ({ open }) => {
  return (
    <MySideBar open={open}>
      <Toolbar />
      <List>
        <MenuSubHeader text="Main items" />
        <SubMenu
          icon={<HelpIcon />}
          text="Help"
        >
          <MenuItem
            icon={<LockIcon />}
            text="Privacy"
          />
          <MenuItem
            icon={<NotificationsIcon />}
            text="Notification"
          />
        </SubMenu>
      </List>
    </MySideBar>
  );
};

export default SideBar;
