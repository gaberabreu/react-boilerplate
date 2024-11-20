import { type FC, useState } from "react";

import Box from "@mui/material/Box";

import { createRootRoute, Outlet } from "@tanstack/react-router";

import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

const RouteComponent: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        open={open}
        toggle={() => setOpen((prev) => !prev)}
      />
      <Box sx={{ display: "flex" }}>
        <SideBar open={open} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
