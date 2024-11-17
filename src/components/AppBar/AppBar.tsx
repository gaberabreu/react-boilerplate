import type { FC } from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

interface AppBarProps {
  open?: boolean;
  toggle?: () => void;
}

const AppBar: FC<AppBarProps> = ({ open, toggle }) => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 5 }}
          onClick={toggle}
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          Boilerplate
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
