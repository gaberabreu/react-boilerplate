import type { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { createLazyFileRoute } from "@tanstack/react-router";

const RouteComponent: FC = () => {
  return (
    <Box>
      <Typography variant="body1">Route /profile</Typography>
    </Box>
  );
};

export const Route = createLazyFileRoute("/profile")({
  component: RouteComponent,
});
