import type { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { createLazyFileRoute } from "@tanstack/react-router";

const RouteComponent: FC = () => {
  return (
    <Box>
      <Typography variant="body1">Route /management/users</Typography>
    </Box>
  );
};

export const Route = createLazyFileRoute("/management/users")({
  component: RouteComponent,
});
