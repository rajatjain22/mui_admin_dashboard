import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function AuthRouter() {
  return (
    <Box component="main">
      <CssBaseline />
      <Outlet />
    </Box>
  );
}

export default AuthRouter;
