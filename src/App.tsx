import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";

const App = () => {
  const [open, setOpen] = useState(false);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Typography variant="h1">App.tsx</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
